async function main() {
  const header = <HTMLHeadingElement>document.querySelector("h1");

  header.innerText = "Started.";

  const select = <HTMLSelectElement>document.querySelector("select");

  const mode = await chrome.storage.sync.get("mode");
  select.value = mode.mode;


  select.onchange = onChange;

  async function onChange() {
    header.innerText = "Changing...";

    await chrome.storage.sync.set({
      mode: select.value,
    })

    header.innerText = "Done.";
  }
}

main();
