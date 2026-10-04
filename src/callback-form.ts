// Keep the form action in index.html in sync with this id.
const FORM_ID = "meaoybjy";

const form = document.querySelector<HTMLFormElement>("#callback-form");

if (form) {
  const endpoint = `https://formspree.io/f/${FORM_ID}`;
  form.action = endpoint;

  const phone = form.querySelector<HTMLInputElement>("#callback-phone");
  const phoneError = form.querySelector<HTMLElement>("#callback-phone-error");
  const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const page = form.querySelector<HTMLInputElement>('input[name="page"]');
  const alertBox = form.querySelector<HTMLElement>("#callback-alert");
  const success = document.querySelector<HTMLElement>("#callback-success");
  const successNumber = document.querySelector<HTMLElement>(
    "#callback-success-number",
  );
  const submitLabel = submit?.textContent ?? "Call me back";

  if (page) page.value = location.href;

  const showPhoneError = (show: boolean) => {
    if (!phone || !phoneError) return;
    phoneError.hidden = !show;
    if (show) phone.setAttribute("aria-invalid", "true");
    else phone.removeAttribute("aria-invalid");
  };

  // Constraint validation blocks the submit event, so the format message has
  // to be shown from the field's invalid event.
  phone?.addEventListener("invalid", () => {
    showPhoneError(phone.validity.patternMismatch);
  });

  phone?.addEventListener("input", () => {
    if (phone.validity.valid || phone.value.trim() === "") showPhoneError(false);
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (page) page.value = location.href;
    if (alertBox) alertBox.hidden = true;

    if (!form.checkValidity()) {
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
      const data = (await response.json().catch(() => null)) as {
        ok?: boolean;
      } | null;
      if (!response.ok || data?.ok === false) throw new Error("send failed");

      if (successNumber && phone) successNumber.textContent = phone.value.trim();
      form.hidden = true;
      if (success) success.hidden = false;
    } catch {
      submit.disabled = false;
      submit.textContent = submitLabel;
      if (alertBox) alertBox.hidden = false;
    }
  });
}
