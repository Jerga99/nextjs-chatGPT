
import { withNextSession } from "@/lib/session";

export default withNextSession(userRoute);

function userRoute(req, res) {
  if (req.session.user) {
    return res.status(200).json(req.session.user);
  } else {
    return res.status(200).json(null);
  }
}
