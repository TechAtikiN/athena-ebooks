// default imports
import Categories from '@/components/home/Categories';
import BooksListing from '@/components/home/BooksListing';

export default async function HomePage() {
  return (
    <div className='mx-4 overflow-x-hidden'>
      <h2 className='text-stone-700 text-3xl my-10 font-semibold text-center font-serif'>E-Books Ready for Instant Access📚</h2>

      <Categories />
      <hr className='my-5' />
      <BooksListing />
    </div>
  )
}
