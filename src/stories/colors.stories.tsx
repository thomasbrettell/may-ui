import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { FC } from 'react';

const Box = styled.div`
  border: 1px solid
    ${(p) => {
      if (p.color === '#FFF') {
        return '#F2F3F5';
      }
      return p.color;
    }};
  border-radius: 4px;
  overflow: hidden;

  p {
    text-align: center;
  }

  & + & {
    margin-left: 20px;
  }
`;

const ColorPreview = styled.div`
  height: 80px;
  width: 120px;
  background-color: ${(p) => p.color};
`;

const ColorBox: FC<{ hex: string }> = ({ hex, children }) => {
  return (
    <Box color={hex}>
      <ColorPreview color={hex} />
      <p>{children}</p>
    </Box>
  );
};

const AllColors = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      {Object.keys(theme.colors).map((colorGroup) => {
        console.log(theme.colors[colorGroup]);
        return (
          <div key={colorGroup} style={{ marginBottom: '50px' }}>
            <strong style={{ marginBottom: '10px', display: 'block' }}>{colorGroup[0].toUpperCase() + colorGroup.slice(1)}</strong>
            <div style={{ display: 'flex' }}>
              {Object.keys(theme.colors[colorGroup]).map((color) => (
                <ColorBox hex={theme.colors[colorGroup][color]}>
                  <strong>{color}</strong>
                  <br />
                  {theme.colors[colorGroup][color]}
                </ColorBox>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default {
  title: 'Colors/All',
  component: AllColors,
} as ComponentMeta<typeof AllColors>;

const Template: ComponentStory<typeof AllColors> = (args) => <AllColors />;

export const All = Template.bind({});
All.args = {};
