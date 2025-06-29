"use client";
import React, { useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils"; // oppure rimuovi se non usi tailwind-merge

const navItems = [
  { label: "Home", path: "/" },
  { label: "Come Funziona", path: "/come-funziona" },
  { label: "Vivere in Tunisia", path: "/vivere-in-tunisia" },
  { label: "Residenze", path: "/residenze" },
  { label: "Servizi Medici", path: "/servizi-medici-benessere" },
  { label: "Contatti", path: "/contatti" },
  { label: "FAQ", path: "/faq" },
];

const ResizableNavbar = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref });
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-0 z-50 w-full")}
    >
      {/* Desktop */}
      <motion.div
        animate={{
          backdropFilter: visible ? "blur(10px)" : "none",
          boxShadow: visible
            ? "0 0 24px rgba(34,42,53,0.06), 0 1px 1px rgba(0,0,0,0.05), 0 0 0 1px rgba(34,42,53,0.04), 0 0 4px rgba(34,42,53,0.08), 0 16px 68px rgba(47,48,55,0.05), 0 1px 0 rgba(255,255,255,0.1) inset"
            : "none",
          y: visible ? 20 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 50 }}
        className="hidden lg:flex mx-auto max-w-7xl items-center justify-between rounded-full px-4 py-2 dark:bg-transparent bg-white/80 dark:bg-neutral-950/80"
      >
        <NavbarLogo />
        <NavItems
          items={navItems}
          activePath={location.pathname}
          onItemClick={(href) => navigate(href)}
        />
      </motion.div>

      {/* Mobile */}
      <motion.div
        animate={{
          backdropFilter: visible ? "blur(10px)" : "none",
          boxShadow: visible
            ? "0 0 24px rgba(34,42,53,0.06), 0 1px 1px rgba(0,0,0,0.05), 0 0 0 1px rgba(34,42,53,0.04), 0 0 4px rgba(34,42,53,0.08), 0 16px 68px rgba(47,48,55,0.05), 0 1px 0 rgba(255,255,255,0.1) inset"
            : "none",
          borderRadius: visible ? "4px" : "2rem",
          y: visible ? 20 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 50 }}
        className="flex lg:hidden max-w-[calc(100vw-2rem)] mx-auto flex-col px-4 py-2"
      >
        <div className="flex items-center justify-between">
          <NavbarLogo />
          <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => {
                navigate(item.path);
                setIsOpen(false);
              }}
              className={cn(
                "text-left w-full text-sm px-2 py-1 rounded hover:bg-muted",
                location.pathname === item.path && "font-bold text-foreground"
              )}
            >
              {item.label}
            </button>

          ))}
        </MobileNavMenu>
      </motion.div>
    </motion.div>
  );
};

const NavbarLogo = () => (
  <a
    href="/"
    className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
  >
    <img
      src="/images/house_building.png"
      alt="logo"
      width={30}
      height={30}
    />
    <span className="font-medium text-black dark:text-white">Vivere Sereni</span>
  </a>
);

const NavItems = ({ items, onItemClick, activePath }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className="relative flex items-center space-x-4 text-sm font-medium text-zinc-600"
    >
      {items.map((item, idx) => (
        <a
          key={item.path}
          href={item.path}
          onClick={(e) => {
            e.preventDefault();
            onItemClick(item.path);
          }}
          onMouseEnter={() => setHovered(idx)}
          className={cn(
            "relative px-4 py-2 transition-colors rounded-full",
            activePath === item.path ? "font-semibold text-black" : "",
          )}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
            />
          )}
          <span className="relative z-10">{item.label}</span>
        </a>
      ))}
    </motion.div>
  );
};

const MobileNavToggle = ({ isOpen, onClick }) =>
  isOpen ? (
    <IconX className="text-black dark:text-white" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-black dark:text-white" onClick={onClick} />
  );

const MobileNavMenu = ({ isOpen, onClose, children }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: '0%' }}
        exit={{ x: '100%' }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 right-0 h-screen w-[80vw] max-w-xs z-[9999] bg-white dark:bg-neutral-900 p-6 shadow-lg flex flex-col gap-4"
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);


export default ResizableNavbar;
