import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menuItems from "@/data/menu";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";


const SideMenu = () => {
  const pathname = usePathname();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.nav
      className="bg-base-300 w-64 h-screen fixed left-0 top-0 overflow-y-auto transition-all duration-300 ease-in-out"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="p-6">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <motion.li key={index} variants={itemVariants}>
              <Link
                href={item.link}
                className={`flex items-center p-3 rounded-lg transition-all duration-200 ${
                  pathname === item.link
                    ? "bg-primary text-primary-content shadow-md"
                    : "text-base-content hover:bg-base-300 dark:hover:bg-base-200"
                }`}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default SideMenu;
