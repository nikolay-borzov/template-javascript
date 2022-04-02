// eslint-disable-next-line import/no-default-export -- It's okay for a config
export default {
  '**/*.?(c)js': (filenames) => [
    `eslint --cache --fix ${filenames.join(' ')}`,
    'ava --fail-fast',
  ],
  // Format supported non JavaScript files
  '**/*.!(?(c)js)': 'prettier --write --ignore-unknown',
}
