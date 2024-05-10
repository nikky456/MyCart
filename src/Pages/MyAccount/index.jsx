import { Layout } from '../../Components/Layout';

function MyAccount() {
  return (
    <Layout>
      <main className='w-full flex flex-col items-center'>
        <h1 className='mb-6 text-xl font-medium text-center text-white'>My Account</h1>

        <table className='w-full max-w-xl table-auto border-collapse border border-white text-white'>
          <tbody>
            <tr>
              <td className='border border-white p-2'>Username</td>
              <td className='border border-white p-2'>Nikky</td>
            </tr>
            <tr>
              <td className='border border-white p-2'>First name</td>
              <td className='border border-white p-2'>Nikky</td>
            </tr>
            <tr>
              <td className='border border-white p-2'>Last name</td>
              <td className='border border-white p-2'>Jha</td>
            </tr>
            <tr>
              <td className='border border-white p-2'>Email</td>
              <td className='border border-white p-2 break-all'>jhanikky.876@gmail.com</td>
            </tr>
            <tr>
              <td className='border border-white p-2'>Mobile</td>
              <td className='border border-white p-2 break-all'>7982985900</td>
            </tr>
          </tbody>
        </table>
      </main>
    </Layout>
  );
}

export { MyAccount };
