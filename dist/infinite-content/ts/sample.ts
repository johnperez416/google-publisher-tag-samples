/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// Using @types/google-publisher-tag
// https://www.npmjs.com/package/@types/google-publisher-tag

window.googletag = window.googletag || { cmd: [] };

googletag.cmd.push(() => {
  // Define slots initially present on the page.
  googletag
    .defineSlot("/6355419/Travel", [728, 90], "leaderboard")!
    .setTargeting("test", "infinitescroll")
    .addService(googletag.pubads());

  // Enable SRA and services.
  googletag.pubads().enableSingleRequest();
  googletag.enableServices();

  // Request and render an ad for the "leaderboard" slot.
  googletag.display("leaderboard");
});

function moreContent() {
  googletag.cmd.push(() => {
    // Define a new ad slot.
    const slot = googletag
      .defineSlot("/6355419/Travel", [728, 90])!
      .setTargeting("test", "infinitescroll")
      .addService(googletag.pubads());

    // Create a container for the slot and add it to the page.
    const div = document.createElement("div");
    div.id = slot.getSlotElementId(); // auto-generated by GPT
    document.body.appendChild(div);

    // Request and render an ad for the newly created slot.
    googletag.display(slot);
  });
}

// Register click event handler.
document.getElementById("addContentButton")!.addEventListener("click", moreContent);
