
async function getPost(query, page) {
    try {
      
        const response = await fetch(`https://myfakeapi.com/api/cars?${query}&limit=10&page=${page}`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const postData = await response.json();

        if (postData && Array.isArray(postData.cars)) {
           
            return postData.cars; 
        } else {
            console.error("Invalid data format:", postData);
            return [];
        }
    } catch (error) {
        console.error("Error fetching cars:", error);
        return [];
    }
}

const getCars = async (searchParams, page) => {
    const query = new URLSearchParams(searchParams).toString();
    try {
        let posts = await getPost(query, page);
        return posts;
    } catch (error) {
        console.error("Error fetching cars:", error);
        return [];
    }
};

export default getCars;


export const getCarDetails = async (id) => {
    try {
        const response = await fetch(`https://myfakeapi.com/api/cars/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch car details');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching car details:', error);
        return null;
    }
};
