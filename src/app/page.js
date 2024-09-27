import getCars from './post/page';
import ClientComponent from './components/ClientComponent'; // Client Component

// This is a server component by default, so data fetching is allowed here.
export default async function Home() {
  const searchParams = { make: '', model: '', year: '' };
  const page = 1;

  // Fetch car data on the server side
  const cars = await getCars(searchParams, page);

  return (
    <>
      <h1>List of Cars</h1>
      <ClientComponent cars={cars} />
    </>
  );
}
