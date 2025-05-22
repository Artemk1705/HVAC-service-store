export async function fetchFilteredEquipmentFromAPI(
  categories,
  power,
  typeFilter
) {
  try {
    const responses = await Promise.all(
      categories.map((category) => {
        let url = `http://localhost:8000/equip?category=${category}&power=${power}`;
        if (typeFilter) {
          url += `&type=${encodeURIComponent(typeFilter)}`;
        }
        return fetch(url).then((res) => res.json());
      })
    );

    return responses.flat();
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
    return [];
  }
}

export async function submitEquipForm(formData) {
  try {
    const response = await fetch("http://localhost:8000/equipForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка отправки формы", error);
    return { success: false };
  }
}

export async function fetchEquipment() {
  try {
    const response = await fetch("http://localhost:8000/equip");

    if (!response.ok) {
      console.warn("⚠️ Сервер вернул ошибку, но продолжаем с пустым массивом.");
      return [];
    }

    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Ошибка загрузки оборудования:", error);
    return [];
  }
}
