import styles from "./Like.module.css";
import { LikeProps } from './Like.props';
import cn from "classnames";
import LikeImage from '../../../public/like.svg';

export const Like = ({ count }: LikeProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.count}>{count}</div>
			<LikeImage className={styles.image}></LikeImage>
		</div>
	)
}