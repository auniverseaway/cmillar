// loadScript and loadStyle are passed in to avoid circular dependencies
export default function init() {
  const martechListener = async () => {
    console.log('martech is the best');
  };

  const sk = document.querySelector('helix-sidekick');
  sk.addEventListener('custom:martech', martechListener);
}
