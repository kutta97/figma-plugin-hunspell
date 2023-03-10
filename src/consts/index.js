export const PAGE_TITLE = {
  HOME: '맞춤법 검사하기',
  SEARCHING: '검사 중...',
  DETAIL: '검사 상세',
  RESULT: '검사 결과',
  CONVERTING: '변환 중...',
  COMPLETE: '변환 완료',
};
export const PAGE_TYPE = Object.keys(PAGE_TITLE).reduce((acc, key) => {
  acc[key] = key;
  return acc;
}, {});
