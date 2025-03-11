import Link from 'next/link';
import { BreadcrumbSchema } from './SchemaMarkup';

const Breadcrumbs = ({ items }) => {
  // Make sure we have items to display
  if (!items || items.length === 0) return null;

  return (
    <>
      <BreadcrumbSchema items={items} />
      <nav aria-label="Breadcrumb" className="mb-4 px-2 lg:px-0">
        <ol className="flex flex-wrap items-center space-x-1 text-sm text-gray-300">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            
            return (
              <li key={item.url} className="flex items-center">
                {index > 0 && <span className="mx-2 text-gray-400">/</span>}
                {isLast ? (
                  <span className="font-medium text-white">{item.name}</span>
                ) : (
                  <Link 
                    href={item.url} 
                    className="hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
