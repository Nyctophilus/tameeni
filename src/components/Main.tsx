import {
  isAdminError,
  isChat,
  isNewMessage,
  loading,
  message,
  permissions,
  socket,
} from "@/context/signals";
import { ReactNode, useEffect, useState } from "react";
// import { IoMdChatbubbles } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Chat from "./Chat";
import { Toaster } from "@/components/ui/toaster";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

function Main({ children }: { children: ReactNode }) {
  const [chat, setChat] = useState(isChat.value);
  const navigate = useNavigate();
  useEffect(() => {
    socket.value.on(
      "admin-response",
      ({ state, next }: { state: boolean; next: string }) => {
        loading.value = false;
        permissions.value = [...permissions.value, next];
        if (state) {
          navigate("/" + next);
        } else {
          isAdminError.value = true;
          message.value =
            "الرجاء التاكد من المعلومات الخاصة بك والمحاولة مرة اخرى";
        }
      }
    );
  }, []);

  //   <Dialog open={isChat.value} onOpenChange={() => (isChat.value = false)}>
  //   <DialogContent className="h-[500px]">
  //     <Chat />
  //   </DialogContent>
  // </Dialog>

  // <span className="absolute left-1/2 translate-x-[-50%] top-[65%] w-max lg:top-[60%] max-w-[400px] text-sm font-medium p-2 text-red-500">
  // {message.value}
  //  </span>

  const { toast } = useToast();
  useEffect(() => {
    if (message.value)
      toast({
        description: message.value,
        action: <ToastAction altText="Goto toast undo">إزالة</ToastAction>,
      });
  }, [message.value]);

  return (
    <>
      <Toaster />

      {loading.value && (
        <div className="fixed z-[99999] cursor-wait left-0 top-0 w-full h-full bg-white bg-opacity-80 flex justify-center items-center flex-col gap-4">
          <div className="loader"></div>
          <span className="text-xs font-medium">
            يرجى الانتظار جاري التأكد من صحه البيانات المدخلة
          </span>
        </div>
      )}

      {children}

      {chat && (
        <div className="h-[500px] lg:max-w-[400px] w-[82dvw] shadow-xl p-3 bg-white border fixed bottom-32 right-10 lg:right-20 border-gray-300  rounded-xl z-[999]">
          <h2 className="absolute text-xl font-bold left-1/2 -translate-x-1/2 text-main">
            خدمة العملاء
          </h2>

          <Chat />
        </div>
      )}
      <div
        className={`z-[99999] fixed hover:scale-95 transition-all right-10 bottom-10 p-2 text-3xl aspect-square rounded-full cursor-pointer grid place-items-center text-white`}
        onClick={() => setChat(!chat)}
      >
        {/* <IoMdChatbubbles /> */}
        <img
          src="/assets/images/chat-icon-web-ar.svg"
          alt="chat icon"
          className="w-16 scale-150"
        />
        {isNewMessage.value > 0 && (
          <div className="absolute text-[10px] font-bold -top-1 right-0 w-4 h-4  rounded-full flex justify-center items-center text-white bg-orange-500">
            {isNewMessage.value}
          </div>
        )}
      </div>
    </>
  );
}

export default Main;
