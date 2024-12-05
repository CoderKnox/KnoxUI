import Link from 'next/link';

const Sidebar = () => {
  const components = [
    { name: 'Button', path: '/components/button' },
  ];

  return (
    <aside className="bg-base-200 w-64 h-[calc(100vh_-_44px)] p-4 sticky top-11">
      <h2 className="text-lg font-semibold mb-4">Components</h2>
      <nav>
        <ul className="space-y-2">
          {components.map((component) => (
            <li key={component.name}>
              <Link
                href={component.path}
                className="block p-2 rounded hover:bg-base-100 transition-colors duration-200"
              >
                {component.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

