import SignInModal from "../app/presentation/shared/signin";
import SignUpModal from "../app/presentation/shared/signup";

import { closeAuthModal, switchAuthview } from "../../utils/authModalSlice";
import { useDispatch, useSelector } from "react-redux";

export default function AuthModal() {
  const dispatch = useDispatch();
  const authModal = useSelector((state: any) => state.authModal);
  const { isOpen, view } = authModal;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        {view === "signin" && (
          <SignInModal
            switchToSignUp={() => dispatch(switchAuthview("signup"))}
          />
        )}
        {view === "signup" && (
          <SignUpModal
            switchToSignIn={() => dispatch(switchAuthview("signin"))}
          />
        )}
      </div>
    </div>
  );
}
