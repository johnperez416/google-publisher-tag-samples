/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// Using @types/google-publisher-tag
// https://www.npmjs.com/package/@types/google-publisher-tag

window.googletag = window.googletag || { cmd: [] };

googletag.cmd.push(() => {
  // Define an ad slot for div with id "banner-ad".
  googletag
    .defineSlot("/6355419/Travel", [728, 90], "banner-ad")!
    .setTargeting("test", "privacy")
    .addService(googletag.pubads());

  // Enable the PubAdsService.
  googletag.enableServices();

  // Request and render an ad for the "banner-ad" slot.
  googletag.display("banner-ad");
});

function toggleNonPersonalizedAds(this: HTMLInputElement) {
  const isEnabled = this.checked;

  googletag.cmd.push(() => {
    googletag.pubads().setPrivacySettings({
      nonPersonalizedAds: isEnabled,
    });

    // Refresh all ads on the page.
    googletag.pubads().refresh();
  });
}

function toggleRestrictDataProcessing(this: HTMLInputElement) {
  const isEnabled = this.checked;

  googletag.cmd.push(() => {
    googletag.pubads().setPrivacySettings({
      restrictDataProcessing: isEnabled,
    });

    // Refresh all ads on the page.
    googletag.pubads().refresh();
  });
}

function changeAgeTreatment(this: HTMLSelectElement) {
  const ageTreatment = this.value as keyof typeof googletag.enums.TagForAgeTreatment;

  googletag.cmd.push(() => {
    googletag.pubads().setPrivacySettings({
      tagForAgeTreatment: googletag.enums.TagForAgeTreatment[ageTreatment],
    });

    // Refresh all ads on the page.
    googletag.pubads().refresh();
  });
}

function toggleDisablePersonalization(this: HTMLInputElement) {
  const isEnabled = this.checked;

  googletag.cmd.push(() => {
    googletag.setConfig({
      privacyTreatments: isEnabled ? { treatments: ["disablePersonalization"] } : null,
    });

    // Refresh all ads on the page.
    googletag.pubads().refresh();
  });
}

// Register change event handlers.
document.getElementById("npaCheckbox")!.addEventListener("change", toggleNonPersonalizedAds);
document.getElementById("rdpCheckbox")!.addEventListener("change", toggleRestrictDataProcessing);
document.getElementById("tfatSelect")!.addEventListener("change", changeAgeTreatment);
document
  .getElementById("disablePersonalizationCheckbox")!
  .addEventListener("change", toggleDisablePersonalization);
