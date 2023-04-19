import { useState } from 'react';
import { Button, Paragraph, Rating, Tag, Title } from '@/components';
import { withLayout } from '@/layout/layout';

function Home() {
  const [rating, setRating] = useState(4);
  return (
    <>
      <Title tag="h1">kek</Title>
      <Button appearance="primary" arrow="right">
        kek
      </Button>
      <Button appearance="ghost" arrow="right">
        kek
      </Button>
      <Paragraph size="s">Small</Paragraph>
      <Paragraph size="m">Medium</Paragraph>
      <Paragraph size="l">Large</Paragraph>
      <Tag size="s">Small</Tag>
      <Tag size="s" color="red">
        Small Red
      </Tag>
      <Tag size="m" color="green">
        Medium Green
      </Tag>
      <Tag size="m" color="ghost">
        Medium Ghost
      </Tag>
      <Tag size="m" color="primary">
        Medium Primary
      </Tag>
      <Tag size="m" color="gray">
        Medium Gray
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);
