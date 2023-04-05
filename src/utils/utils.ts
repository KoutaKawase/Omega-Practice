import {
  LINK_COUNT_LIMIT,
  Status,
  TAR_COUNT_LIMIT,
} from '../stores/practiceStore';

export function calclateImgSrc(count: number, prefix: 'link' | 'tar') {
  const srcTemplate = 'https://cdn.raidplan.io/game/ffxiv/mark/';
  const pngTemplate = `mark_${prefix}${count}.png`;

  if (prefix === 'link' && count === LINK_COUNT_LIMIT) {
    return srcTemplate + `mark_${prefix}${LINK_COUNT_LIMIT - 1}.png`;
  }

  if (prefix === 'tar' && count === TAR_COUNT_LIMIT) {
    return srcTemplate + `mark_${prefix}${TAR_COUNT_LIMIT - 1}.png`;
  }

  return srcTemplate + pngTemplate;
}

export function existsMarkerIn(targer: Status) {
  return targer.marker !== 'none';
}
