import { useContext } from 'react';

import { GlobalContext } from '../../Context';
import { onImageLoadError } from '../../Utils';

import { XMarkIcon } from '@heroicons/react/24/solid';

const ProductDetail = () => {
  const {
    isProductDetailOpen,
    closeProductDetail,
    itemToShow,
    productDetailWasClickedRef,
    addProductToCart,
  } = useContext(GlobalContext);

  const { title, description, category, price, pictureUrl } = itemToShow;

  const updateProductDetailWasClickedRef = wasClicked => {
    productDetailWasClickedRef.current = wasClicked;
  };

  const onClickAside = () => updateProductDetailWasClickedRef(true);

  const onClickButton = () => addProductToCart(itemToShow);

  return (
    <aside
      className={`${
        isProductDetailOpen ? 'right-[0rem]' : '-right-[26rem]'
      } w-screen max-w-[26rem] h-aside mt-navbar px-6 py-4 flex flex-col items-center gap-4 fixed top-0 border-solid border-8 border-black outline outline-4 outline-white -outline-offset-[6px] rounded-lg bg-zinc-900 overflow-y-scroll overscroll-contain no-scrollbar transition-all ease-in-out duration-500`}
      onClick={onClickAside}
    >
      <div className='flex justify-between items-center w-full'>
        <h2 className='font-medium text-xl text-white'>Details</h2>

        <XMarkIcon
          className='w-9 h-9 p-1 text-white border-2 border-transparent rounded-full hover:border-white cursor-pointer transition-all duration-200'
          onClick={closeProductDetail}
        />
      </div>

      <figure className='relative w-full'>
        <img
          className='w-full h-full text-white border-4 border-solid border-card-color rounded-5xl object-cover'
          src={pictureUrl}
          alt={description}
          onError={onImageLoadError}
        />

        <span className='absolute bottom-0 left-0 ml-6 mb-5 px-2 py-0.5 rounded-lg text-zinc-950 text-sm bg-white/60'>
          {category}
        </span>
      </figure>

      <p className='flex flex-col justify-between items-center gap-3 text-center'>
        <span className='text-2xl font-bold text-card-color'>{title}</span>
        <span className='text-xl font-bold text-white'>{price}</span>
        <span className='text-justify text-white'>{description}</span>
      </p>

      <div className='flex-grow flex items-end w-full'>
        <button
          className='w-full my-2 p-3 bg-zinc-950 text-card-color font-bold rounded-3xl border-2 border-card-color border-solid hover:bg-card-color hover:text-zinc-950 transition-all duration-200'
          onClick={onClickButton}
        >
          Add to Cart
        </button>
      </div>
    </aside>
  );
};

export { ProductDetail };
