export async function generateMetadata({ params }) {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/users/${id}`);
  const { firstName, lastName } = await response.json();
  return {
    title: `${firstName} ${lastName}`,
  };
}

const SingleUserPage = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/users/${id}`);
  const { firstName, lastName, age, email, birthDate, image, username } =
    await response.json();

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h3 className='p-2 text-red-700 font-bold'>
        {firstName} {lastName}
      </h3>
      <p className='m-2'>{email}</p>
      <img src={image} alt={`image of ${username}`} className='p-4' />
      <p className='p-3'>{age}</p>
      <p className='p-3'>{birthDate}</p>
    </div>
  );
};

export default SingleUserPage;
