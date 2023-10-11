import { useForm } from "react-hook-form";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import { clsx } from "clsx";

const SearchBar = () => {

    const { register, handleSubmit, reset } = useForm();
    const [isOpen, setIsOpen] = useState(false);


return ( <form className="flex items-center flex-grow">
<div className="relative">
  <button
    className="inline-flex items-center w-full h-12 px-4 py-3 bg-gray-200 border-none rounded-l-md focus:outline-none"
    onClick={() => setIsOpen(!isOpen)}
  >
    <span className="text-sm leading-none ">All Categories</span>
    <ChevronDownIcon className="w-4 h-4 ml-2 text-gray-500" />
  </button>
  <div
    className={clsx({
      "z-10 absolute flex flex-col w-40 mt-1 bg-white rounded-md shadow-lg": true,
      "border-gray border rounded-md": isOpen,
    })}
  >
    {isOpen &&
      categoryOptions
        .sort(dynamicSort("name"))
        .map((category, index) => {
          return (
            <a
              className={
                "flex items-center h-8 px-3 text-sm hover:bg-gray-200 hover:"
              }
              href="#"
              key={category.name}
            >
              {category.label}
            </a>
          );
        })}
  </div>
</div>
  <input
    type="text"
    className="h-12 p-3 text-lg font-light border-2 max-w-1/2 w-80 border-gray focus:outline-none"
    placeholder="What are you looking for?"
  />
<div>
  <button className="w-full h-12 p-3 text-white bg-primary rounded-r-md focus:outline-none">
    <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
  </button>
</div>
</form>)
}