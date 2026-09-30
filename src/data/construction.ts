/** Site is gated until this instant, then the full landing page returns automatically. */
export const UNDER_CONSTRUCTION_UNTIL = new Date("2026-10-30T23:59:59-04:00");

export function isUnderConstruction(now = new Date()): boolean {
  return now.getTime() < UNDER_CONSTRUCTION_UNTIL.getTime();
}
