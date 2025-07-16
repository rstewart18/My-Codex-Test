// src/components/CardCollapseElement.jsx

import { useEffect, useState } from "react";
import {
  ChevronDown,
  CircleDollarSign,
  Pencil,
  Plus,
  Trash2,
  Upload,
} from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import DropdownMenu from "@/components/Dropdown/DropdownMenu";
import ModalConfirm from "../Modal/ModalConfirm";
import ModalSubmitCategory from "../Modal/ModalSubmitCategory";
import ModalMassUpload from "../Modal/ModalMassUpload";
import ModalAddElement from "../Modal/ModalAddElement";
import ModalAccessories from "../Modal/ModalAccessories";

const CardCollapseElement = ({
  title = "More Info",
  items,
  total = 0,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [element, setElement] = useState([]);

  useEffect(() => {
    setElement(items);
  }, [items]);

  // Handle Accessories
  const [isAccessories, setIsAccessories] = useState(false);

  // Handle Mass Upload
  const [isMassUpload, setIsMassUpload] = useState(false);

  // Handle Add
  const [isAddOpen, setIsAddOpen] = useState(false);

  // Handle Edit
  const [isEditOpen, setIsEditOpen] = useState(false);

  // Handle Delete
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [targetDeleteId, setTargetDeleteId] = useState(null);

  const handleDelete = (id) => {
    setTargetDeleteId(id);
    setIsDeleteOpen(true);
  };

  const confirmDelete = () => {
    console.log(targetDeleteId);
  };

  return (
    <>
      <div className="bg-white border border-neutral-400 rounded-lg">
        <div className={`flex items-center justify-between p-3`}>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center size-8 bg-white border border-neutral-400 hover:bg-primary-200 focus:border-primary-300 hover:bg-opacity-5 rounded-lg"
            >
              <ChevronDown
                className={`transition-transform duration-300 size-4 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <div className="flex items-center gap-2">
              <div className="size-8 bg-gray-300 rounded-lg "></div>
              <p className="text-base">{title}</p>
              <span
                className={`bg-primary-100 text-xs text-primary-200 px-2 py-0.5 rounded-full `}
              >
                {total} Items
              </span>
            </div>
          </div>
          <DropdownMenu
            menu={[
              {
                id: uuidv4(),
                name: "Accessories",
                icon: CircleDollarSign,
                onClick: () => setIsAccessories(true),
              },
              {
                id: uuidv4(),
                name: "Mass Upload",
                icon: Upload,
                onClick: () => setIsMassUpload(true),
              },
              {
                id: uuidv4(),
                name: "Add Element",
                icon: Plus,
                onClick: () => setIsAddOpen(true),
              },
              {
                id: uuidv4(),
                name: "Edit",
                icon: Pencil,
                onClick: () => setIsEditOpen(true),
              },
              {
                id: uuidv4(),
                name: "Delete",
                icon: Trash2,
                isRed: true,
                onClick: () => handleDelete(element.id),
              },
            ]}
          />
        </div>

        <div
          className={`transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-[1500px] border-t border-neutral-400 "
              : "max-h-0 overflow-hidden "
          }`}
        >
          {children}
        </div>
      </div>

      <ModalConfirm
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={confirmDelete}
        title={`Do you want to delete this Category?`}
        message="This category will be permanently deleted. You will not be able to recover it."
      />

      <ModalSubmitCategory
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        data={element}
      />

      <ModalAccessories
        isOpen={isAccessories}
        onClose={() => setIsAccessories(false)}
      />

      <ModalAddElement isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} />

      <ModalMassUpload
        isOpen={isMassUpload}
        onClose={() => setIsMassUpload(false)}
      />
    </>
  );
};

export default CardCollapseElement;
