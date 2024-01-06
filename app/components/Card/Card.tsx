import { Like } from '../Like/Like';
import styles from "./Card.module.css";
import { CardProps } from './Card.props';
import ArrowIcon from "../../../public/arrow.svg";
import CardIcon from '../../../public/mini.svg';

export const Card = ({ title, paragraph, createDate, count, time, tag }: CardProps) => {
	return (
		<div className={styles.container}>
			<div>
				<CardIcon className={styles.image}/>
			</div>
			<div className={styles.info}>
				<span className={styles.tag}>{tag}</span>
				<span className={styles.dot}>•</span>
				<span className={styles.createDate}>{createDate}</span>
				<Like className={styles.like} count={count}></Like>
			</div>
			<h1 className={styles.title}>{title}</h1>
			<div className={styles.paragraph}>{paragraph}</div>
			<div className={styles.footer}>
				<div className={styles.time}>{time}</div>
				<button className={styles.read}>
					Читать
					<ArrowIcon className={styles.arrow}></ArrowIcon>
				</button>
			</div>
		</div>
	)
}