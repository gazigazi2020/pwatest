import React from "react";
import { Card, CardHeader, CardContent, Link, Button } from "framework7-react";
import { useSelector } from "react-redux";

export default ({ menu }) => {
  const { price, description, imgSrc, name, id } = menu;
  const { lang } = useSelector((state) => state.root);
  return (
    <Link href={`/menu/${id}`}>
      <Card className="demo-card-header-pic" style={styles.card}>
        <CardHeader className="no-border" valign="bottom" style={styles.header}>
          <img src={imgSrc} style={styles.image}></img>
        </CardHeader>
        <CardContent style={styles.content} padding={false}>
          <h3 style={styles.name}>{name[lang]}</h3>
          <div style={styles.description}>{description[lang]}</div>
          <span style={styles.price}>￥{price}</span>
        </CardContent>
      </Card>
    </Link>
  );
};

const styles = {
  card: {
    margin: "10px 5px",
  },
  header: {
    height: 200,
    color: "white",
    padding: 0,
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  content: {
    display: "grid",
    gridTemplateRows: "50px 50px auto",
    color: "black",
  },
  name: {
    color: "white",
    backgroundColor: "#31425E",
    margin: 0,
    marginBottom: 5,
    fontSize: "1.2em",
    padding: "10px",
  },
  description: {
    marginLeft: 20,
    marginRight: 20,
    display: "flex",
    alignItems: "center",
  },
  price: {
    display: "block",
    fontWeight: "bold",
    fontSize: "1.5em",
    alainSelf: "end",
    marginLeft: 20,
    marginBottom: 10,
  },
};
