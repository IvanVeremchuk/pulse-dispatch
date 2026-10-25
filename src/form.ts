// Keep the form action in partials/start.html in sync with this id.
const FORM_ID = "meaoybjy";

const form = document.querySelector<HTMLFormElement>("#start-form");

if (form) {
  const endpoint = `https://formspree.io/f/${FORM_ID}`;
  form.action = endpoint;

  const phone = form.querySelector<HTMLInputElement>("#start-phone");
  const phoneError = form.querySelector<HTMLElement>("#start-phone-error");
  const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const page = form.querySelector<HTMLInputElement>('input[name="page"]');
  const alertBox = form.querySelector<HTMLElement>("#start-alert");
  const done = document.querySelector<HTMLElement>("#start-done");
  const doneNumber = document.querySelector<HTMLElement>("#start-done-number");
  const submitLabel = submit?.textContent ?? "Call me back";

  // Pages for a trade preselect it, so the lead arrives labelled.
  const trade = document.body.dataset.trade;
  const tradeSelect = form.querySelector<HTMLSelectElement>("#start-trade");
  if (trade && tradeSelect) tradeSelect.value = trade;

  const showPhoneError = (show: boolean) => {
    if (!phone || !phoneError) return;
    phoneError.hidden = !show;
    if (show) phone.setAttribute("aria-invalid", "true");
    else phone.removeAttribute("aria-invalid");
  };

  phone?.addEventListener("input", () => {
    if (phone.validity.valid || phone.value.trim() === "") showPhoneError(false);
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (page) page.value = location.href;
    if (alertBox) alertBox.hidden = true;

    if (!form.checkValidity()) {
      showPhoneError(Boolean(phone && !phone.validity.valid && phone.value.trim() !== ""));
      const firstBad = form.querySelector<HTMLElement>(":invalid");
      firstBad?.focus();
      form.reportValidity();
      return;
    }

    if (!submit) return;
    submit.disabled = true;
    submit.textContent = "Sending…";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const data = (await response.json().catch(() => null)) as { ok?: boolean } | null;
      if (!response.ok || data?.ok === false) throw new Error("send failed");

      if (doneNumber && phone) doneNumber.textContent = phone.value.trim();
      form.hidden = true;
      if (done) {
        done.hidden = false;
        done.setAttribute("tabindex", "-1");
        done.focus();
      }
    } catch {
      submit.disabled = false;
      submit.textContent = submitLabel;
      if (alertBox) alertBox.hidden = false;
    }
  });
}
