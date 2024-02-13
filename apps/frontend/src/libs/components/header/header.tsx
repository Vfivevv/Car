import { DEFAULT_USER_AVATAR } from "~/libs/constants/constants.js";
import { AppRoute } from "~/libs/enums/enums.js";
import { type UserAuthResponseDto } from "~/modules/users/users.js";

import { Button } from "../button/button.js";
import { Image } from "../image/image.js";
import styles from "./styles.module.css";

type Properties = {
	user: UserAuthResponseDto | null;
};

const Header: React.FC<Properties> = ({ user }: Properties) => {
	const hasUser = Boolean(user);

	return (
		<header className={styles["header"]}>
			{hasUser ? (
				<div className={styles["toolbar"]}>
					<Image
						alt="user-avatar"
						height="48"
						shape="circle"
						src={DEFAULT_USER_AVATAR}
						width="48"
					/>
				</div>
			) : (
				<Button
					color="primary"
					href={AppRoute.SIGN_IN}
					label="Sign in"
					size="small"
				/>
			)}
		</header>
	);
};

export { Header };