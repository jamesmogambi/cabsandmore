import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Separator } from "../ui/separator";

const AddItemCartModal = ({ children, item }) => {
  const { name, price } = item;
  return (
    <AlertDialog className="">
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>

      <AlertDialogContent className="bg-white top-[20%] translate-y-[-20%] gap-0 p-0 border-none rounded-2xl  ">
        <AlertDialogHeader className={""}>
          <div className="py-4 pr-3 px-8">
            <div className="flex ">
              <div className=" flex-1 flex justify-between  border-red-300">
                <h4 className="text-[24px]">{name}</h4>
                <span className="text-[24px]">Ksh {price}</span>
              </div>
              <div className=" flex justify-end items-start w-1/4 border-fuchsia-600">
                <AlertDialogCancel className="p-0 h-5 border-none">
                  <X />
                </AlertDialogCancel>
              </div>
            </div>
            {/* display weight */}
            <div className="text-lg mt-2.5">500 Gm</div>
          </div>
        </AlertDialogHeader>
        <Separator className="bg-neutral-200 h-[0.2px]" />
        <div className="py-4 px-7">
          <AlertDialogDescription className="text-lg">
            Customisation not available.
          </AlertDialogDescription>
        </div>
        <Separator className="bg-neutral-200" />

        <AlertDialogFooter className={"border-blue-800  p-5"}>
          <Button className="bg-lightgreen rounded-[5px] hover:bg-lightgreen/80 py-6 w-full text-white text-lg">
            Add Item : Ksh {price}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddItemCartModal;
