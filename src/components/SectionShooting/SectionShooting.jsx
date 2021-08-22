import React from "react";

import { Stage, Layer, Rect, Group, Text, Star } from "react-konva";

export default function SectionShooting() {
  function generateRectSection() {
    let xPos = [];
    let yPos = [];
    let positionRect = [];
    let oldPosY = [36];
    let fill = ["#D2A283"];

    let width = 240,
      height = 476;

    for (let i = 66; xPos.length !== 37; i += 58) {
      xPos.push(i);
      if (i >= width - 66) {
        i = 66;
        xPos.push(i);
      } else if (yPos.length === 37) {
        i = 66;
      }
    }

    for (let i = 36; yPos.length !== 37; i += 36) {
      yPos.push(i);
      if (i >= height - 36) {
        i = 36;
        yPos.push(i);
      } else if (yPos.length === 37) {
        i = 36;
      }
    }

    for (let i = 0; i <= 36; i++) {
      fill.splice(0, 1, "#D2A283");
      if (i % 3 === 0 && i !== 0) {
        oldPosY.splice(0, 1, oldPosY[0] + 36.62);
      }

      if (i % 2 === 0) {
        fill.splice(0, 1, "#303649");
      }

      positionRect.push({
        id: (i + 1).toString(),
        x: xPos.shift(i),
        y: oldPosY[0],
        fill: fill[0],
        fillText: fill[0] === "#D2A283" ? "#303649" : "#D2A283",
      });
    }
    return positionRect;
  }

  const handleClickRect = (e) => {
    const text = e.target.text();

    if (typeof text === typeof Number()) {
      console.log("ID: " + Number(text));
    }

    if (typeof text === typeof String()) {
      console.log("ID: " + text);
    }
  };

  const section = [
    { id: "0", x: 66, y: 0, width: 174, height: 36, fill: "#C4D0EE" },
    ...generateRectSection(),
  ];

  console.log(section);

  return (
    <Stage x={1} width={242} height={476}>
      <Layer>
        {section.map((rect) => (
          <Group
            key={rect.id}
            id={rect.id}
            x={rect.x}
            y={rect.y}
            onClick={handleClickRect}
          >
            <Rect
              id={rect.id}
              fill={rect?.fill || "green"}
              stroke={"white"}
              strokeWidth={1}
              width={rect?.width || 58.05}
              height={rect?.height || 36.62}
            />
            <Text
              fontSize={14}
              fontStyle={"bold"}
              text={rect.id}
              fill={rect.fillText}
              align={"center"}
              verticalAlign={"middle"}
              width={rect?.width || 58.05}
              height={rect?.height || 36.62}
            />
          </Group>
        ))}
        {/* 1 - 18 */}
        <Group x={0} y={36} onClick={handleClickRect}>
          <Rect
            fill={"rgba(0, 0, 0, 0.0)"}
            stroke={"white"}
            strokeWidth={1}
            width={33.27}
            height={73.23}
          />
          <Text
            fontSize={14}
            fontStyle={"bold"}
            text={"1 - 18"}
            fill={"#D2A283"}
            rotation={90}
            offsetY={33.27}
            align={"center"}
            verticalAlign={"middle"}
            width={73.23}
            height={33.27}
          />
        </Group>

        {/* Even */}
        <Group x={0} y={109.24000000000001} onClick={handleClickRect}>
          <Rect
            fill={"rgba(0, 0, 0, 0.0)"}
            stroke={"white"}
            strokeWidth={1}
            width={33.27}
            height={73.23}
          />
          <Text
            fontSize={14}
            fontStyle={"bold"}
            text={"Even"}
            fill={"#D2A283"}
            rotation={90}
            offsetY={33.27}
            align={"center"}
            verticalAlign={"middle"}
            width={73.23}
            height={33.27}
          />
        </Group>

        {/* 1st 12 */}
        <Group x={33} y={36} onClick={handleClickRect}>
          <Rect
            fill={"rgba(0, 0, 0, 0.0)"}
            stroke={"white"}
            strokeWidth={1}
            width={33.27}
            height={146.46}
          />
          <Text
            fontSize={14}
            fontStyle={"bold"}
            text={"1st 12"}
            fill={"#D2A283"}
            rotation={90}
            offsetY={33.27}
            align={"center"}
            verticalAlign={"middle"}
            width={146.46}
            height={33.27}
          />
        </Group>

        {/* LIGHT ORANGE */}
        <Group x={0} y={182.48000000000002} onClick={handleClickRect}>
          <Rect
            fill={"rgba(0, 0, 0, 0.0)"}
            stroke={"white"}
            strokeWidth={1}
            width={33.27}
            height={73.23}
          />
          <Star
            x={16}
            y={36}
            numPoints={2}
            innerRadius={10}
            outerRadius={25}
            stroke={"#C4D0EE"}
            strokeWidth={1}
            fill="#D2A283"
          />
          <Text
            fontSize={14}
            opacity={0}
            fontStyle={"bold"}
            text={"LIGHT ORANGE"}
            fill={"#C4D0EE"}
            rotation={90}
            offsetY={33.27}
            align={"center"}
            verticalAlign={"middle"}
            width={73.23}
            height={33.27}
          />
        </Group>

        {/* BLACK BLUE */}
        <Group x={0} y={255.72000000000003} onClick={handleClickRect}>
          <Rect
            fill={"rgba(0, 0, 0, 0.0)"}
            stroke={"white"}
            strokeWidth={1}
            width={33.27}
            height={73.23}
          />
          <Star
            x={16}
            y={36}
            numPoints={2}
            innerRadius={10}
            outerRadius={25}
            stroke={"#D2A283"}
            strokeWidth={1}
            fill="#30364A"
          />
          <Text
            fontSize={14}
            opacity={0}
            fontStyle={"bold"}
            text={"BLACK BLUE"}
            fill={"#C4D0EE"}
            rotation={90}
            offsetY={33.27}
            align={"center"}
            verticalAlign={"middle"}
            width={73.23}
            height={33.27}
          />
        </Group>

        {/* 2nd 12 */}
        <Group x={33} y={182.48000000000002} onClick={handleClickRect}>
          <Rect
            fill={"rgba(0, 0, 0, 0.0)"}
            stroke={"white"}
            strokeWidth={1}
            width={33.27}
            height={146.46}
          />
          <Text
            fontSize={14}
            fontStyle={"bold"}
            text={"2nd 12"}
            fill={"#D2A283"}
            rotation={90}
            offsetY={33.27}
            align={"center"}
            verticalAlign={"middle"}
            width={146.46}
            height={33.27}
          />
        </Group>

        {/* Odd */}
        <Group x={0} y={328.96000000000004} onClick={handleClickRect}>
          <Rect
            fill={"rgba(0, 0, 0, 0.0)"}
            stroke={"white"}
            strokeWidth={1}
            width={33.27}
            height={73.23}
          />
          <Text
            fontSize={14}
            fontStyle={"bold"}
            text={"Odd"}
            fill={"#D2A283"}
            rotation={90}
            offsetY={33.27}
            align={"center"}
            verticalAlign={"middle"}
            width={73.23}
            height={33.27}
          />
        </Group>

        {/* 19 - 36 */}
        <Group x={0} y={402.20000000000005} onClick={handleClickRect}>
          <Rect
            fill={"rgba(0, 0, 0, 0.0)"}
            stroke={"white"}
            strokeWidth={1}
            width={33.27}
            height={73.23}
          />
          <Text
            fontSize={14}
            fontStyle={"bold"}
            text={"19 - 36"}
            fill={"#D2A283"}
            rotation={90}
            offsetY={33.27}
            align={"center"}
            verticalAlign={"middle"}
            width={73.23}
            height={33.27}
          />
        </Group>

        {/* 3rd 12 */}
        <Group x={33} y={328.96000000000004} onClick={handleClickRect}>
          <Rect
            fill={"rgba(0, 0, 0, 0.0)"}
            stroke={"white"}
            strokeWidth={1}
            width={33.27}
            height={146.46}
          />
          <Text
            fontSize={14}
            fontStyle={"bold"}
            text={"3rd 12"}
            fill={"#D2A283"}
            rotation={90}
            offsetY={33.27}
            align={"center"}
            verticalAlign={"middle"}
            width={146.46}
            height={33.27}
          />
        </Group>
      </Layer>
    </Stage>
  );
}
