'use client';

import { useEffect, useState } from 'react';
import { onSnapshot, Query, DocumentData, QuerySnapshot } from 'firebase/firestore';
import { errorEmitter } from '../error-emitter';
import { FirestorePermissionError } from '../errors';

export function useCollection<T = DocumentData>(query: Query<T> | null) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [snapshot, setSnapshot] = useState<QuerySnapshot<T> | null>(null);

  useEffect(() => {
    if (!query) {
      setLoading(false);
      return;
    }

    setLoading(true);
    return onSnapshot(
      query,
      (snap) => {
        setData(snap.docs.map((doc) => doc.data()));
        setSnapshot(snap);
        setLoading(false);
      },
      async (serverError) => {
        // Tentamos extrair o path da query se disponível, ou usamos um fallback
        const path = (query as any)._query?.path?.toString() || 'unknown collection';
        const permissionError = new FirestorePermissionError({
          path,
          operation: 'list',
        });
        errorEmitter.emit('permission-error', permissionError);
        setError(permissionError);
        setLoading(false);
      }
    );
  }, [query]);

  return { data, loading, error, snapshot };
}
