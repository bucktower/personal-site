import { Badge, Card } from "react-bootstrap";

export function WorkDetailItem({ color, item }: any) {
  console.log(item);
  const techTags = item.fields.techUsed.split(",");
  return (
    <Card style={{ width: "14rem" }}>
      <Card.Img
        style={{ width: "100%", height: 200, objectFit: "cover" }}
        variant="top"
        src={item.fields.thumbnail.fields.file.url}
      />
      <Card.Body>
        <Card.Title>{item.fields.title}</Card.Title>
        <Card.Text>{item.fields.description}</Card.Text>
        <div style={{ display: "flex" }}>
          {techTags.map((entry) => {
            return (
              <Badge
                style={{
                  marginRight: 5,
                  backgroundColor: `#${color}`,
                  color: "white",
                }}
              >
                {entry}
              </Badge>
            );
          })}
        </div>
      </Card.Body>
    </Card>
  );
}
