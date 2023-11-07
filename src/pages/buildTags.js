const defaults = {
  noindex: false,
  nofollow: false
}

export const buildTags = function (props) {
  console.log('[buildTags] before conditional mutation:', props, defaults);
  if (props.toggle) {
    console.log('[buildTags] condition met - performing mutation!');
    defaults.noindex = true;
    defaults.nosuchprop = 'this prop will now persist between call to page SSR (until server restarts)';
  }
  console.log('[buildTags] after conditional mutation:', props, defaults);
  return defaults;
}