export const fetchData = async (URL, type)=> {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error(`Could not fetch ${type}`);
    }
    return await response.json();
  };