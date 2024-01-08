'use client';
import styles from "./PostLike.module.css";
import cn from "classnames";
import LikeIcon from '../../../public/PostLike.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const PostLike = () => {
	const [liked, setLiked] = useState<boolean>(false);

	useEffect(() => {
		patchPost();
	}, [liked]);

	function onClick() {
		if (liked) {
			setLiked(false);
			return;
		}
		setLiked(true);
	}

	const patchPost = async () => {
		const options = {
			method: 'PATCH',
			url: 'https://jsonplaceholder.typicode.com/posts/1'
		};
		try {
			const response = await axios.request(options);
			console.log(response);
			
		} catch (error) {
			console.error(error);
		}
	}


	return (
		<div className={cn(styles.container, {
			[styles.notActiveContainer] : liked
		})}>
			<LikeIcon 
				className={cn(styles.image, {
					[styles.active] : liked,
					[styles.notActive] : !liked
				})}
				onClick={onClick}
			>

			</LikeIcon>
		</div>
	)
}