/* eslint-disable react/no-array-index-key */
/* eslint-disable no-use-before-define */
import { useEffect, useState } from 'react';
import cn from 'classnames';
import { RatingProps } from '@/components/rating/rating.props';
import StarIcon from '@/assets/rating/star.svg';
import styles from './rating.module.css';

export const Rating: React.FC<RatingProps> = ({ isEditable = false, rating, setRating, ...props }) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events,jsx-a11y/no-static-element-interactions
        <span
          key={i}
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseOver={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i + 1)}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: React.KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
          />
        </span>
      );
    });

    setRatingArray(updatedArray);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  const handleSpace = (i: number, e: React.KeyboardEvent<SVGElement>) => {
    if (e.code !== 'Space' || !setRating) {
      return;
    }

    setRating(i);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
