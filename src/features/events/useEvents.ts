import { useEffect, useState } from "react";
import { fetchPublicEvents } from "./api";
import { toDisplayItem } from "./format";
import type { EventDisplayItem, EventType } from "./types";
import { mockEventRowsByType } from "@/mocks/events";

function mockItems(type: EventType): EventDisplayItem[] {
  return mockEventRowsByType(type).map(toDisplayItem);
}

/** 공개 페이지에서 특정 타입의 게시된 이벤트를 표시용 형태로 로드 */
export function usePublicEvents(type: EventType) {
  const [items, setItems] = useState<EventDisplayItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(null);
    fetchPublicEvents(type)
      .then((rows) => {
        if (!active) return;
        // DB가 비어있으면(미설정/미시드) 목업 폴백
        setItems(rows.length ? rows.map(toDisplayItem) : mockItems(type));
      })
      .catch(() => {
        // DB 연결 불가(예: .env 미설정) 시 목업 폴백
        if (!active) return;
        setItems(mockItems(type));
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [type]);

  return { items, loading, error };
}
