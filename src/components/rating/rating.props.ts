export interface RatingProps extends React.ComponentPropsWithoutRef<'div'> {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
}
