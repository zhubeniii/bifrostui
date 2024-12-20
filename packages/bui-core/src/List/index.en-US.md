---
group: Data Display
name: List component
---

# List component

A list is a continuous set of text or images composed of items from the main and supplementary operations, commonly used for data display.

## Code demonstration

### Basic usage

The most basic list display, which can be used to carry text, images, paragraphs, etc.

```tsx
import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack
      style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px 10px' }}
    >
      <Stack style={{ width: '350px' }}>
        <List style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary={<div>回收站</div>} />
          </ListItem>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent
              primary={<div>设置</div>}
              secondary={<div>音量设置</div>}
            />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
```

The list component provides the 'ListItem' component to host list sub items.
The ListItem component is divided into four areas: ListItem Header, ListItem Content, ListItem Extra, and ListItem Footer.

```tsx
import {
  List,
  ListItem,
  ListItemContent,
  ListItemExtra,
  ListItemFooter,
  ListItemHeader,
  Stack,
  Switch,
} from '@bifrostui/react';
import { PhoneFilledIcon } from '@bifrostui/icons';
import React, { useState } from 'react';

export default () => {
  const [check, setCheck] = useState(false);
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        <List style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemHeader>
              <PhoneFilledIcon />
            </ListItemHeader>
            <ListItemContent primary={<div>飞行模式</div>} />
            <ListItemFooter>{check ? '已开启飞行模式' : ''}</ListItemFooter>
            <ListItemExtra
              onClick={(e) => {
                setCheck(!check);
              }}
            >
              <Switch color="primary" checked={check} />
            </ListItemExtra>
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
```

### Clickable status

The list component provides the 'disabled' attribute to control the clickable state of the list.
You can pass' disabled 'through the' ListItem 'component to individually control sub items from clicking.

```tsx
import {
  Alert,
  List,
  ListItem,
  ListItemContent,
  Stack,
} from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        {isOpen && <Alert>点击清除回收站成功</Alert>}
        <List style={{ width: '100%' }}>
          <ListItem
            disabled
            onClick={(e) => {
              setOpen(true);
              setTimeout(() => {
                setOpen(false);
              }, 1000);
            }}
          >
            <ListItemContent
              primary={
                <div
                  onClick={() => {
                    setOpen(true);
                    setTimeout(() => {
                      setOpen(false);
                    }, 1000);
                  }}
                >
                  回收站
                </div>
              }
            />
          </ListItem>
          <ListItem
            onClick={(e) => {
              setOpen(true);
              setTimeout(() => {
                setOpen(false);
              }, 1000);
            }}
          >
            <ListItemContent
              primary={<div>设置</div>}
              secondary={<div>清除回收站</div>}
            />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
```

### Set the header of the list

The list component can set the list header through header and subheader .

```tsx
import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        <List
          header={<div>系统</div>}
          subheader={<div>系统设置</div>}
          style={{ width: '100%' }}
        >
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary={<div>主题设置</div>} />
          </ListItem>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary={<div>音量设置</div>} />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
```

### Set the left operation area of the list sub items

The list component provides the 'ListItemHeader' sub component, which is used to customize the header operation area of list items and is commonly used to customize the header icons of list items.

```tsx
import React from 'react';
import {
  List,
  ListItem,
  ListItemContent,
  ListItemHeader,
  Stack,
} from '@bifrostui/react';
import { LocationFilledIcon, PhoneFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        <List style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemHeader>
              <PhoneFilledIcon />
            </ListItemHeader>
            <ListItemContent>电话</ListItemContent>
          </ListItem>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemHeader>
              <LocationFilledIcon />
            </ListItemHeader>
            <ListItemContent>住址</ListItemContent>
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
```

### Set the content area for sub items in the list

The list component provides a 'ListItemContent' sub component for customizing the content area of list sub items.
You can set the main content area and sub content area of the list sub items through the 'primary' and 'secondary' attributes.

```tsx
import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        <List style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary="设置" secondary="系统设置" />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
```

### Set the tail area of the list sub items

The list component provides a 'ListItemFooter' sub component for customizing the tail area of list items.

```tsx
import {
  Avatar,
  List,
  ListItem,
  ListItemContent,
  ListItemFooter,
  Stack,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        <List style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent>头像</ListItemContent>
            <ListItemFooter>
              <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
            </ListItemFooter>
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
```

### Set the operation area on the right side of the list sub items

The list component provides a 'ListItemExtra' sub component for customizing the operation area on the right side of list items.
The ListItemExtra sub component can be used to configure switches and to individually control list sub items.

```tsx
import {
  List,
  ListItem,
  ListItemContent,
  ListItemExtra,
  Stack,
  Switch,
} from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [check, setCheck] = useState(false);
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        <List style={{ width: '100%' }}>
          <ListItem>
            <ListItemContent
              primary={<div>在优酷展示想看记录</div>}
              secondary={<div>影片可在线播放时会通知提醒你</div>}
            />
            <ListItemExtra
              onClick={(e) => {
                setCheck(!check);
              }}
            >
              <Switch color="primary" checked={check} />
            </ListItemExtra>
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
```

### Dividing line

The default sub item of the list component has a dividing line before it, and the dividing line component attribute is transparently passed through by providing the 'dividerDrop' attribute.
You can also hide the dividing line through 'hideDivider'.

```tsx
import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        <List style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent
              primary="蓝牙和设备连接"
              secondary="NFC、投射屏幕、触碰付款"
            />
          </ListItem>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary="显示" secondary="状态栏、息屏显示" />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
```

```tsx
import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        <List hideDivider style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent
              primary="蓝牙和设备连接"
              secondary="NFC、投射屏幕、触碰付款"
            />
          </ListItem>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary="显示" secondary="状态栏、息屏显示" />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
```

### Set size

The list component provides three sizes: small, medium, and large. You can customize these three sizes through the 'size' attribute.

```tsx
import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack
      style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}
      spacing="20px"
    >
      <Stack style={{ width: '350px' }}>
        <div> 默认大小（medium）:</div>
        <List style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary={<div>系统</div>} />
          </ListItem>
        </List>
        <div>小一号（small）：</div>
        <List size="small" style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary={<div>系统</div>} />
          </ListItem>
        </List>
        <div>大一号（large）：</div>
        <List size="large" style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary={<div>系统</div>} />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};
```

### API

#### ListProps

| attribute   | explain                               | type                       | Default value |
| ----------- | ------------------------------------- | -------------------------- | ------------- |
| header      | List header content                   | ReactNode                  | -             |
| subheader   | List subheading content               | ReactNode                  | -             |
| hideDivider | Do you want to hide the dividing line | boolean                    | false         |
| size        | List size                             | `small`｜`medium`｜`large` | `medium`      |
| component   | List node label                       | React.ElementType          | -             |

#### ListItemProps

| attribute   | explain                                               | type                | Default value |
| ----------- | ----------------------------------------------------- | ------------------- | ------------- |
| endIcon     | Operation icon on the right side of the list sub item | ReactNode ｜boolean | -             |
| disabled    | Is the list clickable                                 | boolean             | false         |
| hideDivider | Do you want to hide the dividing line                 | boolean             | false         |
| component   | Root node label                                       | React.ElementType   | -             |

#### List

| attribute | explain           | type              | Default value |
| --------- | ----------------- | ----------------- | ------------- |
| primary   | primary coverage  | ReactNode         | -             |
| secondary | Secondary content | ReactNode         | -             |
| component | Root node label   | React.ElementType | -             |

#### ListItemHeaderProps、ListItemFooterProps、ListItemExtraProps

| attribute | explain         | type              | Default value |
| --------- | --------------- | ----------------- | ------------- |
| component | Root node label | React.ElementType | -             |

### Style variables

| attribute             | explain                         | Default value | global variable                |
| --------------------- | ------------------------------- | ------------- | ------------------------------ |
| --small-item-padding  | Inner margin of small sub items | 5px 12px      | --bui-list-small-item-padding  |
| --medium-item-padding | Median sub item margin          | 18px 12px     | --bui-list-medium-item-padding |
| --large-item-padding  | Large sub item margin           | 20px 12px     | --bui-list-large-item-padding  |
