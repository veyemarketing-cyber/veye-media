const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!validate()) return;

  setIsSubmitting(true);

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: formData.fullName,
        organization: formData.organization,
        email: formData.email,
        operationalScale: formData.operationalScale,
        growthBarrier: formData.growthBarrier,
        mandate: formData.mandate,
        source: 'StartConversation',
        page: window.location.pathname,
      }),
    });

    // Attempt to read JSON, but don't fail if empty
    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      const message =
        data?.error ||
        data?.message ||
        `Submission failed (HTTP ${res.status}). Please try again.`;

      setErrors((prev) => ({
        ...prev,
        mandate: message,
      }));

      setIsSubmitting(false);
      return;
    }

    setIsS
