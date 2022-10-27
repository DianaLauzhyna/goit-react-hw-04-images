export async function api(query, page) {
  const KEY = '30836512-07b4cd3b9ce810d91e506cec6';
  const searchParams = new URLSearchParams({
    key: KEY,
    q: query,
    page,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 16,
  });

  const END_POINT = `https://pixabay.com/api/?${searchParams}`;
  const response = await fetch(END_POINT);
  const data = await response.json();
  return data;
}
