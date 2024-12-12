"use strict";(self.webpackChunk_bifrostui_monorepo=self.webpackChunk_bifrostui_monorepo||[]).push([[1825],{63619:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return I}});var M=e(90228),c=e.n(M),A=e(48305),p=e.n(A),y=e(87999),x=e.n(y),u=e(75271),I={"packages-bui-core-src-action-sheet-demo-en-us-0":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d,s;return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=h.sent,a=o.default,r=o.useState,h.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=h.sent,l=t.ActionSheet,n=t.ActionSheetItem,d=t.Button,s=t.Stack,h.abrupt("return",{default:function(){var g=r(!1),b=p()(g,2),E=b[0],P=b[1],C=function(){P(!0)},O=function(){P(!1)};return a.createElement(s,null,a.createElement(d,{onClick:C},"\u57FA\u7840\u4F7F\u7528"),a.createElement(l,{onClose:O,open:E},a.createElement(n,null,"\u590D\u5236"),a.createElement(n,null,"\u4FEE\u6539"),a.createElement(n,null,"\u5220\u9664")))}});case 13:case"end":return h.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-action-sheet-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { ActionSheet, ActionSheetItem, Button, Stack } from '@bifrostui/react';

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const openActionSheet = () => {
    setIsOpen(true);
  };
  const closeActionSheet = () => {
    setIsOpen(false);
  };

  return (
    <Stack>
      <Button onClick={openActionSheet}>\u57FA\u7840\u4F7F\u7528</Button>
      <ActionSheet onClose={closeActionSheet} open={isOpen}>
        <ActionSheetItem>\u590D\u5236</ActionSheetItem>
        <ActionSheetItem>\u4FEE\u6539</ActionSheetItem>
        <ActionSheetItem>\u5220\u9664</ActionSheetItem>
      </ActionSheet>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-action-sheet-demo-en-us-1":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d,s;return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=h.sent,a=o.default,r=o.useState,h.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=h.sent,l=t.ActionSheet,n=t.ActionSheetItem,d=t.Button,s=t.Stack,h.abrupt("return",{default:function(){var g=r(!1),b=p()(g,2),E=b[0],P=b[1],C=function(){P(!0)},O=function(){P(!1)};return a.createElement(s,null,a.createElement(d,{onClick:C},"\u53D6\u6D88\u6309\u94AE"),a.createElement(l,{onClose:O,cancelText:"\u53D6\u6D88",open:E},a.createElement(n,null,"\u590D\u5236"),a.createElement(n,null,"\u4FEE\u6539")))}});case 13:case"end":return h.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-action-sheet-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { ActionSheet, ActionSheetItem, Button, Stack } from '@bifrostui/react';

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const openActionSheet = () => {
    setIsOpen(true);
  };
  const closeActionSheet = () => {
    setIsOpen(false);
  };

  return (
    <Stack>
      <Button onClick={openActionSheet}>\u53D6\u6D88\u6309\u94AE</Button>
      <ActionSheet onClose={closeActionSheet} cancelText="\u53D6\u6D88" open={isOpen}>
        <ActionSheetItem>\u590D\u5236</ActionSheetItem>
        <ActionSheetItem>\u4FEE\u6539</ActionSheetItem>
      </ActionSheet>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-action-sheet-demo-en-us-2":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d,s;return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=h.sent,a=o.default,r=o.useState,h.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=h.sent,l=t.ActionSheet,n=t.ActionSheetItem,d=t.Button,s=t.Stack,h.abrupt("return",{default:function(){var g=r(!1),b=p()(g,2),E=b[0],P=b[1],C=function(){P(!0)},O=function(){P(!1)};return a.createElement(s,null,a.createElement(d,{onClick:C},"\u989D\u5916\u7684\u63CF\u8FF0"),a.createElement(l,{extra:"\u8BF7\u9009\u62E9\u4F60\u8981\u8FDB\u884C\u7684\u64CD\u4F5C",onClose:O,cancelText:"\u53D6\u6D88",open:E},a.createElement(n,null,"\u590D\u5236"),a.createElement(n,null,"\u4FEE\u6539")))}});case 13:case"end":return h.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-action-sheet-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { ActionSheet, ActionSheetItem, Button, Stack } from '@bifrostui/react';
export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const openActionSheet = () => {
    setIsOpen(true);
  };
  const closeActionSheet = () => {
    setIsOpen(false);
  };

  return (
    <Stack>
      <Button onClick={openActionSheet}>\u989D\u5916\u7684\u63CF\u8FF0</Button>
      <ActionSheet
        extra="\u8BF7\u9009\u62E9\u4F60\u8981\u8FDB\u884C\u7684\u64CD\u4F5C"
        onClose={closeActionSheet}
        cancelText="\u53D6\u6D88"
        open={isOpen}
      >
        <ActionSheetItem>\u590D\u5236</ActionSheetItem>
        <ActionSheetItem>\u4FEE\u6539</ActionSheetItem>
      </ActionSheet>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-action-sheet-demo-en-us-3":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d,s;return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=h.sent,a=o.default,r=o.useState,h.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=h.sent,l=t.ActionSheet,n=t.ActionSheetItem,d=t.Button,s=t.Stack,h.abrupt("return",{default:function(){var g=r(!1),b=p()(g,2),E=b[0],P=b[1],C=function(){P(!0)},O=function(){P(!1)};return a.createElement(s,null,a.createElement(d,{onClick:C},"\u7981\u7528\u548C\u5371\u9669\u6309\u94AE"),a.createElement(l,{onClose:O,extra:"\u8BF7\u9009\u62E9\u4F60\u8981\u8FDB\u884C\u7684\u64CD\u4F5C",open:E,cancelText:"\u53D6\u6D88"},a.createElement(n,null,"\u590D\u5236"),a.createElement(n,{disabled:!0},"\u4FEE\u6539"),a.createElement(n,{color:"danger"},"\u5220\u9664")))}});case 13:case"end":return h.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-action-sheet-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { ActionSheet, ActionSheetItem, Button, Stack } from '@bifrostui/react';
export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const openActionSheet = () => {
    setIsOpen(true);
  };
  const closeActionSheet = () => {
    setIsOpen(false);
  };
  return (
    <Stack>
      <Button onClick={openActionSheet}>\u7981\u7528\u548C\u5371\u9669\u6309\u94AE</Button>
      <ActionSheet
        onClose={closeActionSheet}
        extra="\u8BF7\u9009\u62E9\u4F60\u8981\u8FDB\u884C\u7684\u64CD\u4F5C"
        open={isOpen}
        cancelText="\u53D6\u6D88"
      >
        <ActionSheetItem>\u590D\u5236</ActionSheetItem>
        <ActionSheetItem disabled>\u4FEE\u6539</ActionSheetItem>
        <ActionSheetItem color="danger">\u5220\u9664</ActionSheetItem>
      </ActionSheet>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-action-sheet-demo-en-us-4":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d,s;return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=h.sent,a=o.default,r=o.useState,h.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=h.sent,l=t.ActionSheet,n=t.ActionSheetItem,d=t.Button,s=t.Stack,h.abrupt("return",{default:function(){var g=r(!1),b=p()(g,2),E=b[0],P=b[1],C=function(){P(!0)},O=function(){P(!1)};return a.createElement(s,null,a.createElement(d,{onClick:C},"\u9009\u9879\u63CF\u8FF0\u4FE1\u606F"),a.createElement(l,{onClose:O,open:E},a.createElement(n,null,"\u590D\u5236"),a.createElement(n,{disabled:!0},"\u4FEE\u6539"),a.createElement(n,{color:"danger",description:"\u5220\u9664\u540E\u6570\u636E\u4E0D\u53EF\u6062\u590D"},"\u5220\u9664")))}});case 13:case"end":return h.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-action-sheet-demo-en-us-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { ActionSheet, ActionSheetItem, Button, Stack } from '@bifrostui/react';
export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const openActionSheet = () => {
    setIsOpen(true);
  };
  const closeActionSheet = () => {
    setIsOpen(false);
  };
  return (
    <Stack>
      <Button onClick={openActionSheet}>\u9009\u9879\u63CF\u8FF0\u4FE1\u606F</Button>
      <ActionSheet onClose={closeActionSheet} open={isOpen}>
        <ActionSheetItem>\u590D\u5236</ActionSheetItem>
        <ActionSheetItem disabled>\u4FEE\u6539</ActionSheetItem>
        <ActionSheetItem color="danger" description="\u5220\u9664\u540E\u6570\u636E\u4E0D\u53EF\u6062\u590D">
          \u5220\u9664
        </ActionSheetItem>
      </ActionSheet>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}}}},46374:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return I}});var M=e(48305),c=e.n(M),A=e(90228),p=e.n(A),y=e(87999),x=e.n(y),u=e(75271),I={"packages-bui-core-src-alert-demo-en-us-0":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l;return p()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=d.sent,a=o.Alert,r=o.Stack,d.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=d.sent,l=t.default,d.abrupt("return",{default:function(){return l.createElement(r,{alignItems:"stretch",style:{maxWidth:350,margin:"0 auto"}},l.createElement(a,null,"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"))}});case 10:case"end":return d.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-alert-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Alert, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack alignItems="stretch" style={{ maxWidth: 350, margin: '0 auto' }}>
      <Alert>\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E</Alert>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-alert-demo-en-us-1":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=m.sent,a=o.Alert,r=o.Stack,m.next=7,e.e(9975).then(e.bind(e,29975));case 7:return t=m.sent,l=t.HelpCircleOutlinedIcon,m.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return n=m.sent,d=n.default,m.abrupt("return",{default:function(){return d.createElement(r,{alignItems:"stretch",style:{maxWidth:350,margin:"0 auto"},spacing:"10px"},d.createElement(a,null,"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),d.createElement(a,{icon:d.createElement(l,null)},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),d.createElement(a,{icon:!1},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"))}});case 14:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-alert-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Alert, Stack } from '@bifrostui/react';
import { HelpCircleOutlinedIcon } from '@bifrostui/icons';
import React from 'react';

export default () => {
  return (
    <Stack
      alignItems="stretch"
      style={{ maxWidth: 350, margin: '0 auto' }}
      spacing="10px"
    >
      <Alert>\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E</Alert>
      <Alert icon={<HelpCircleOutlinedIcon />}>
        \u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E
      </Alert>
      <Alert icon={false}>\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E</Alert>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-alert-demo-en-us-2":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=m.sent,a=o.Alert,r=o.Stack,m.next=7,e.e(9975).then(e.bind(e,29975));case 7:return t=m.sent,l=t.HelpCircleOutlinedIcon,m.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return n=m.sent,d=n.default,m.abrupt("return",{default:function(){return d.createElement(r,{alignItems:"stretch",style:{maxWidth:350,margin:"0 auto"},spacing:"10px"},d.createElement(a,{icon:!1,marquee:!0},"\u3010\u5F00\u59CB\u3011\u9996\u90E8\u6D77\u5916\u7EF4\u548C\u9898\u6750\u5546\u4E1A\u5927\u7247\u9AD8\u71C3\u6765\u88AD\uFF0C\u805A\u7126\u4E2D\u56FD\u7EF4\u548C\u8B66\u5BDF\u9C9C\u4E3A\u4EBA\u77E5\u7684\u751F\u6B7B\u65F6\u523B\uFF01\u3010\u7ED3\u675F\u3011"),d.createElement(a,{marquee:!0,icon:d.createElement(l,null)},"\u3010\u5F00\u59CB\u3011\u9996\u90E8\u6D77\u5916\u7EF4\u548C\u9898\u6750\u5546\u4E1A\u5927\u7247\u9AD8\u71C3\u6765\u88AD\uFF0C\u805A\u7126\u4E2D\u56FD\u7EF4\u548C\u8B66\u5BDF\u9C9C\u4E3A\u4EBA\u77E5\u7684\u751F\u6B7B\u65F6\u523B\uFF01\u3010\u7ED3\u675F\u3011"))}});case 14:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-alert-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Alert, Stack } from '@bifrostui/react';
import { HelpCircleOutlinedIcon } from '@bifrostui/icons';
import React from 'react';

export default () => {
  return (
    <Stack
      alignItems="stretch"
      style={{ maxWidth: 350, margin: '0 auto' }}
      spacing="10px"
    >
      <Alert icon={false} marquee>
        \u3010\u5F00\u59CB\u3011\u9996\u90E8\u6D77\u5916\u7EF4\u548C\u9898\u6750\u5546\u4E1A\u5927\u7247\u9AD8\u71C3\u6765\u88AD\uFF0C\u805A\u7126\u4E2D\u56FD\u7EF4\u548C\u8B66\u5BDF\u9C9C\u4E3A\u4EBA\u77E5\u7684\u751F\u6B7B\u65F6\u523B\uFF01\u3010\u7ED3\u675F\u3011
      </Alert>
      <Alert marquee icon={<HelpCircleOutlinedIcon />}>
        \u3010\u5F00\u59CB\u3011\u9996\u90E8\u6D77\u5916\u7EF4\u548C\u9898\u6750\u5546\u4E1A\u5927\u7247\u9AD8\u71C3\u6765\u88AD\uFF0C\u805A\u7126\u4E2D\u56FD\u7EF4\u548C\u8B66\u5BDF\u9C9C\u4E3A\u4EBA\u77E5\u7684\u751F\u6B7B\u65F6\u523B\uFF01\u3010\u7ED3\u675F\u3011
      </Alert>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-alert-demo-en-us-3":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l;return p()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=d.sent,a=o.Alert,r=o.Stack,d.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=d.sent,l=t.default,d.abrupt("return",{default:function(){return l.createElement(r,{alignItems:"stretch",style:{maxWidth:350,margin:"0 auto"},spacing:"10px"},l.createElement(a,null,"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),l.createElement(a,{color:"warning"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),l.createElement(a,{color:"success"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),l.createElement(a,{color:"danger"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),l.createElement(a,{color:"info"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"))}});case 10:case"end":return d.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-alert-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Alert, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack
      alignItems="stretch"
      style={{ maxWidth: 350, margin: '0 auto' }}
      spacing="10px"
    >
      <Alert>\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E</Alert>
      <Alert color="warning">\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E</Alert>
      <Alert color="success">\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E</Alert>
      <Alert color="danger">\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E</Alert>
      <Alert color="info">\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E</Alert>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-alert-demo-en-us-4":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l;return p()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=d.sent,a=o.Alert,r=o.Stack,d.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=d.sent,l=t.default,d.abrupt("return",{default:function(){return l.createElement(r,{alignItems:"stretch",style:{maxWidth:350,margin:"0 auto"},spacing:"10px"},l.createElement(a,{variant:"standard"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),l.createElement(a,{variant:"standard",color:"warning"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),l.createElement(a,{variant:"standard",color:"danger"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),l.createElement(a,{variant:"standard",color:"info"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),l.createElement(a,{variant:"standard",color:"success"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"))}});case 10:case"end":return d.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-alert-demo-en-us-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Alert, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack
      alignItems="stretch"
      style={{ maxWidth: 350, margin: '0 auto' }}
      spacing="10px"
    >
      <Alert variant="standard">\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E</Alert>
      <Alert variant="standard" color="warning">
        \u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E
      </Alert>

      <Alert variant="standard" color="danger">
        \u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E
      </Alert>
      <Alert variant="standard" color="info">
        \u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E
      </Alert>
      <Alert variant="standard" color="success">
        \u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E
      </Alert>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-alert-demo-en-us-5":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l;return p()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=d.sent,a=o.Alert,r=o.Stack,d.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=d.sent,l=t.default,d.abrupt("return",{default:function(){return l.createElement(r,{alignItems:"stretch",style:{maxWidth:350,margin:"0 auto"},spacing:"10px"},l.createElement(a,{variant:"outlined"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),l.createElement(a,{variant:"outlined",color:"warning"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),l.createElement(a,{variant:"outlined",color:"danger"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),l.createElement(a,{variant:"outlined",color:"info"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),l.createElement(a,{variant:"outlined",color:"success"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"))}});case 10:case"end":return d.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-alert-demo-en-us-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Alert, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack
      alignItems="stretch"
      style={{ maxWidth: 350, margin: '0 auto' }}
      spacing="10px"
    >
      <Alert variant="outlined">\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E</Alert>
      <Alert variant="outlined" color="warning">
        \u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E
      </Alert>
      <Alert variant="outlined" color="danger">
        \u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E
      </Alert>
      <Alert variant="outlined" color="info">
        \u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E
      </Alert>
      <Alert variant="outlined" color="success">
        \u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E
      </Alert>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-alert-demo-en-us-6":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=s.sent,a=o.Alert,r=o.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(!1),f=c()(h,2),g=f[0],b=f[1],E=n(!1),P=c()(E,2),C=P[0],O=P[1];return l.createElement(r,{alignItems:"stretch",style:{maxWidth:350,margin:"0 auto"},spacing:"10px"},l.createElement(a,{color:"warning"},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),!g&&l.createElement(a,{color:"success",onClose:function(){b(!0)}},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"),!C&&l.createElement(a,{action:l.createElement("div",null,"close"),onClose:function(){O(!0)}},"\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E"))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-alert-demo-en-us-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Alert, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [closeOne, setCloseOne] = useState(false);
  const [closeTwo, setCloseTwo] = useState(false);
  return (
    <Stack
      alignItems="stretch"
      style={{ maxWidth: 350, margin: '0 auto' }}
      spacing="10px"
    >
      <Alert color="warning">\u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E</Alert>
      {!closeOne && (
        <Alert
          color="success"
          onClose={() => {
            setCloseOne(true);
          }}
        >
          \u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E
        </Alert>
      )}
      {!closeTwo && (
        <Alert
          action={<div>close</div>}
          onClose={() => {
            setCloseTwo(true);
          }}
        >
          \u5F00\u7968\u63D0\u91922020.0802\u4E0B\u534814:00\u5F00\u552E
        </Alert>
      )}
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}}}},66663:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return x}});var M=e(90228),c=e.n(M),A=e(87999),p=e.n(A),y=e(75271),x={"packages-bui-core-src-avatar-demo-en-us-0":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=l.sent,i=I.Avatar,o=I.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,r=a.default,l.abrupt("return",{default:function(){return r.createElement(o,null,r.createElement(i,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-avatar-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-avatar-demo-en-us-1":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=l.sent,i=I.Avatar,o=I.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,r=a.default,l.abrupt("return",{default:function(){return r.createElement(o,{direction:"row",spacing:"10px"},r.createElement(i,null,"UC"),r.createElement(i,null,"UFCEAEF"))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-avatar-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Avatar>UC</Avatar>
      <Avatar>UFCEAEF</Avatar>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-avatar-demo-en-us-2":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t,l;return c()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=d.sent,i=I.default,d.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=d.sent,a=o.Avatar,r=o.Stack,d.next=11,e.e(9975).then(e.bind(e,29975));case 11:return t=d.sent,l=t.VipFilledIcon,d.abrupt("return",{default:function(){return i.createElement(r,{direction:"row",spacing:"10px"},i.createElement(a,null,i.createElement(l,null)))}});case 14:case"end":return d.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-avatar-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Avatar, Stack } from '@bifrostui/react';
import { VipFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Avatar>
        <VipFilledIcon />
      </Avatar>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-avatar-demo-en-us-3":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=l.sent,i=I.Avatar,o=I.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,r=a.default,l.abrupt("return",{default:function(){return r.createElement(o,{direction:"row",spacing:"10px"},r.createElement(i,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),r.createElement(i,{variant:"square",src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-avatar-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
      <Avatar
        variant="square"
        src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-avatar-demo-en-us-4":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=l.sent,i=I.Avatar,o=I.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,r=a.default,l.abrupt("return",{default:function(){return r.createElement(o,{direction:"row",spacing:"10px"},r.createElement(i,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png",size:"xsmall"}),r.createElement(i,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png",size:"small"}),r.createElement(i,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png",size:"medium"}),r.createElement(i,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png",size:"large"}))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-avatar-demo-en-us-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Avatar
        src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"
        size="xsmall"
      />
      <Avatar
        src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"
        size="small"
      />
      <Avatar
        src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"
        size="medium"
      />
      <Avatar
        src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"
        size="large"
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-avatar-demo-en-us-5":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=n.sent,i=I.Avatar,o=I.AvatarGroup,a=I.Stack,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){return t.createElement(a,null,t.createElement(o,null,t.createElement(i,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(i,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(i,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(i,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"})))}});case 11:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-avatar-demo-en-us-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, AvatarGroup, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <AvatarGroup>
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
      </AvatarGroup>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-avatar-demo-en-us-6":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=n.sent,i=I.Avatar,o=I.AvatarGroup,a=I.Stack,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){return t.createElement(a,{direction:"column",spacing:"10px"},t.createElement(o,null,t.createElement(i,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(i,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(i,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(i,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"})),t.createElement(o,{variant:"square"},t.createElement(i,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(i,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(i,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(i,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"})))}});case 11:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-avatar-demo-en-us-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, AvatarGroup, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="column" spacing="10px">
      <AvatarGroup>
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
      </AvatarGroup>
      <AvatarGroup variant="square">
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
      </AvatarGroup>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-avatar-demo-en-us-7":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=n.sent,i=I.Avatar,o=I.AvatarGroup,a=I.Stack,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){return t.createElement(a,null,t.createElement(o,{maxCount:"2"},t.createElement(i,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(i,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(i,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(i,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"})))}});case 11:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-avatar-demo-en-us-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, AvatarGroup, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <AvatarGroup maxCount="2">
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
      </AvatarGroup>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-avatar-demo-en-us-8":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=n.sent,i=I.Avatar,o=I.AvatarGroup,a=I.Stack,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){return t.createElement(a,{direction:"column",spacing:"10px"},t.createElement(o,null,t.createElement(i,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(i,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(i,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(i,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"})),t.createElement(o,{orientation:"left"},t.createElement(i,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(i,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(i,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(i,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"})))}});case 11:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-avatar-demo-en-us-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, AvatarGroup, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="column" spacing="10px">
      <AvatarGroup>
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
      </AvatarGroup>
      <AvatarGroup orientation="left">
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
      </AvatarGroup>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-avatar-demo-en-us-9":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=n.sent,i=I.Avatar,o=I.AvatarGroup,a=I.Stack,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){return t.createElement(a,null,t.createElement(o,{maxCount:"2",spacing:"10px"},t.createElement(i,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(i,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(i,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}),t.createElement(i,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"})))}});case 11:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-avatar-demo-en-us-9",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, AvatarGroup, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <AvatarGroup maxCount="2" spacing="10px">
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
        <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
      </AvatarGroup>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}}}},55299:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return I}});var M=e(90228),c=e.n(M),A=e(48305),p=e.n(A),y=e(87999),x=e.n(y),u=e(75271),I={"packages-bui-core-src-backdrop-demo-en-us-0":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=m.sent,a=o.default,r=o.useState,m.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=m.sent,l=t.Backdrop,n=t.Button,d=t.Stack,m.abrupt("return",{default:function(){var f=r(!1),g=p()(f,2),b=g[0],E=g[1],P=function(){E(!1)};return a.createElement(d,null,a.createElement(n,{onClick:function(){E(!0)}},"\u6253\u5F00\u5F39\u7A97\u80CC\u666F"),a.createElement(l,{open:b,onClick:P,style:{zIndex:"var(--bui-z-index-modal-backdrop)"}}))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-backdrop-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Backdrop, Button, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        \u6253\u5F00\u5F39\u7A97\u80CC\u666F
      </Button>
      <Backdrop
        open={open}
        onClick={handleClick}
        style={{ zIndex: 'var(--bui-z-index-modal-backdrop)' }}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-backdrop-demo-en-us-1":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=m.sent,a=o.default,r=o.useState,m.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=m.sent,l=t.Backdrop,n=t.Button,d=t.Stack,m.abrupt("return",{default:function(){var f=r(!1),g=p()(f,2),b=g[0],E=g[1],P=function(){E(!1)};return a.createElement(d,null,a.createElement(n,{onClick:function(){E(!0)}},b?"\u5F39\u7A97\u80CC\u666F\u5DF2\u6253\u5F00\uFF08\u4E0D\u53EF\u89C1\uFF09\uFF0C\u70B9\u51FB\u4EFB\u610F\u90E8\u5206\u5173\u95ED":"\u6253\u5F00\u5F39\u7A97\u80CC\u666F"),a.createElement(l,{open:b,onClick:P,invisible:!0,style:{zIndex:"var(--bui-z-index-modal-backdrop)"}}))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-backdrop-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Backdrop, Button, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        {open ? '\u5F39\u7A97\u80CC\u666F\u5DF2\u6253\u5F00\uFF08\u4E0D\u53EF\u89C1\uFF09\uFF0C\u70B9\u51FB\u4EFB\u610F\u90E8\u5206\u5173\u95ED' : '\u6253\u5F00\u5F39\u7A97\u80CC\u666F'}
      </Button>
      <Backdrop
        open={open}
        onClick={handleClick}
        invisible={true}
        style={{ zIndex: 'var(--bui-z-index-modal-backdrop)' }}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-backdrop-demo-en-us-2":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=m.sent,a=o.default,r=o.useState,m.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=m.sent,l=t.Backdrop,n=t.Button,d=t.Stack,m.abrupt("return",{default:function(){var f=r(!1),g=p()(f,2),b=g[0],E=g[1],P=function(){E(!1)};return a.createElement(d,null,a.createElement(n,{onClick:function(){E(!0)}},"2s\u6DE1\u5165\u6DE1\u51FA\u52A8\u6548\u6548\u679C"),a.createElement(l,{open:b,transitionDuration:2e3,onClick:P,style:{zIndex:"var(--bui-z-index-modal-backdrop)"}}))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-backdrop-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Backdrop, Button, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(false);
  };

  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        2s\u6DE1\u5165\u6DE1\u51FA\u52A8\u6548\u6548\u679C
      </Button>
      <Backdrop
        open={open}
        transitionDuration={2000}
        onClick={handleClick}
        style={{ zIndex: 'var(--bui-z-index-modal-backdrop)' }}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}}}},42574:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return x}});var M=e(90228),c=e.n(M),A=e(87999),p=e.n(A),y=e(75271),x={"packages-bui-core-src-badge-demo-en-us-0":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=n.sent,i=I.Avatar,o=I.Badge,a=I.Stack,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){return t.createElement(a,{spacing:"20px",direction:"row"},t.createElement(o,{content:"12"},t.createElement(i,{src:"//perico.damai.cn/userheadphotos/927551/185510204.jpg"})))}});case 11:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-badge-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, Badge, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="20px" direction="row">
      <Badge content="12">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-badge-demo-en-us-1":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=l.sent,i=I.Badge,o=I.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,r=a.default,l.abrupt("return",{default:function(){return r.createElement(o,null,r.createElement(i,{content:"1",type:"standard"}))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-badge-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Badge, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Badge content="1" type="standard" />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-badge-demo-en-us-2":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=n.sent,i=I.Avatar,o=I.Badge,a=I.Stack,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){return t.createElement(a,{spacing:"10px",direction:"row"},t.createElement(o,{color:"primary",type:"dot"},t.createElement(i,{src:"//perico.damai.cn/userheadphotos/927551/185510204.jpg"})))}});case 11:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-badge-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, Badge, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="10px" direction="row">
      <Badge color="primary" type="dot">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-badge-demo-en-us-3":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=n.sent,i=I.Avatar,o=I.Badge,a=I.Stack,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){return t.createElement(a,{spacing:"10px",direction:"row"},t.createElement(o,{color:"primary",type:"bubble",content:"12"},t.createElement(i,{src:"//perico.damai.cn/userheadphotos/927551/185510204.jpg"})))}});case 11:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-badge-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, Badge, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="10px" direction="row">
      <Badge color="primary" type="bubble" content="12">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-badge-demo-en-us-4":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=n.sent,i=I.Avatar,o=I.Badge,a=I.Stack,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){return t.createElement(a,{spacing:"10px",direction:"row"},t.createElement(o,{color:"primary",variant:"contained",content:"12"},t.createElement(i,{src:"//perico.damai.cn/userheadphotos/927551/185510204.jpg"})),t.createElement(o,{color:"primary",type:"bubble",variant:"contained",content:"12"},t.createElement(i,{src:"//perico.damai.cn/userheadphotos/927551/185510204.jpg"})))}});case 11:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-badge-demo-en-us-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, Badge, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="10px" direction="row">
      <Badge color="primary" variant="contained" content="12">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
      <Badge color="primary" type="bubble" variant="contained" content="12">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-badge-demo-en-us-5":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=n.sent,i=I.Avatar,o=I.Badge,a=I.Stack,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){return t.createElement(a,{spacing:"20",direction:"row"},t.createElement(o,{color:"primary",variant:"outlined",content:"12"},t.createElement(i,{src:"//perico.damai.cn/userheadphotos/927551/185510204.jpg"})),t.createElement(o,{color:"primary",variant:"outlined",type:"bubble",content:"12"},t.createElement(i,{src:"//perico.damai.cn/userheadphotos/927551/185510204.jpg"})))}});case 11:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-badge-demo-en-us-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, Badge, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="20" direction="row">
      <Badge color="primary" variant="outlined" content="12">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
      <Badge color="primary" variant="outlined" type="bubble" content="12">
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-badge-demo-en-us-6":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=n.sent,i=I.Avatar,o=I.Badge,a=I.Stack,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){return t.createElement(a,null,t.createElement(o,{content:100,maxCount:99},t.createElement(i,{src:"//perico.damai.cn/userheadphotos/927551/185510204.jpg"})))}});case 11:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-badge-demo-en-us-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Avatar, Badge, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Badge content={100} maxCount={99}>
        <Avatar src="//perico.damai.cn/userheadphotos/927551/185510204.jpg" />
      </Badge>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-badge-demo-en-us-7":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t,l;return c()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=d.sent,i=I.default,d.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=d.sent,a=o.Badge,r=o.Stack,d.next=11,e.e(9975).then(e.bind(e,29975));case 11:return t=d.sent,l=t.PhoneFilledIcon,d.abrupt("return",{default:function(){return i.createElement(r,{spacing:"10px",direction:"row"},i.createElement(a,{color:"success",content:"5"},i.createElement(l,{color:"success",style:{fontSize:"38px"}})),i.createElement(a,{color:"warning",content:"5"},i.createElement(l,{color:"warning",style:{fontSize:"38px"}})),i.createElement(a,{color:"info",content:"5"},i.createElement(l,{color:"info",style:{fontSize:"38px"}})),i.createElement(a,{color:"primary",content:"5"},i.createElement(l,{color:"primary",style:{fontSize:"38px"}})),i.createElement(a,{color:"danger",content:"5"},i.createElement(l,{color:"danger",style:{fontSize:"38px"}})))}});case 14:case"end":return d.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-badge-demo-en-us-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Badge, Stack } from '@bifrostui/react';
import { PhoneFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack spacing="10px" direction="row">
      <Badge color="success" content="5">
        <PhoneFilledIcon color="success" style={{ fontSize: '38px' }} />
      </Badge>
      <Badge color="warning" content="5">
        <PhoneFilledIcon color="warning" style={{ fontSize: '38px' }} />
      </Badge>
      <Badge color="info" content="5">
        <PhoneFilledIcon color="info" style={{ fontSize: '38px' }} />
      </Badge>
      <Badge color="primary" content="5">
        <PhoneFilledIcon color="primary" style={{ fontSize: '38px' }} />
      </Badge>
      <Badge color="danger" content="5">
        <PhoneFilledIcon color="danger" style={{ fontSize: '38px' }} />
      </Badge>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-badge-demo-en-us-8":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t,l;return c()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=d.sent,i=I.default,d.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=d.sent,a=o.Badge,r=o.Stack,d.next=11,e.e(9975).then(e.bind(e,29975));case 11:return t=d.sent,l=t.PhoneFilledIcon,d.abrupt("return",{default:function(){return i.createElement(r,{spacing:"10px",direction:"row"},i.createElement(a,{color:"success",content:"5",variant:"outlined"},i.createElement(l,{color:"success",style:{fontSize:"38px"}})),i.createElement(a,{color:"warning",content:"5",variant:"outlined"},i.createElement(l,{color:"warning",style:{fontSize:"38px"}})),i.createElement(a,{color:"info",content:"5",variant:"outlined"},i.createElement(l,{color:"info",style:{fontSize:"38px"}})),i.createElement(a,{color:"primary",content:"5",variant:"outlined"},i.createElement(l,{color:"primary",style:{fontSize:"38px"}})),i.createElement(a,{color:"danger",content:"5",variant:"outlined"},i.createElement(l,{color:"danger",style:{fontSize:"38px"}})))}});case 14:case"end":return d.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-badge-demo-en-us-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Badge, Stack } from '@bifrostui/react';
import { PhoneFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack spacing="10px" direction="row">
      <Badge color="success" content="5" variant="outlined">
        <PhoneFilledIcon color="success" style={{ fontSize: '38px' }} />
      </Badge>
      <Badge color="warning" content="5" variant="outlined">
        <PhoneFilledIcon color="warning" style={{ fontSize: '38px' }} />
      </Badge>
      <Badge color="info" content="5" variant="outlined">
        <PhoneFilledIcon color="info" style={{ fontSize: '38px' }} />
      </Badge>
      <Badge color="primary" content="5" variant="outlined">
        <PhoneFilledIcon color="primary" style={{ fontSize: '38px' }} />
      </Badge>
      <Badge color="danger" content="5" variant="outlined">
        <PhoneFilledIcon color="danger" style={{ fontSize: '38px' }} />
      </Badge>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}}}},76728:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return x}});var M=e(90228),c=e.n(M),A=e(87999),p=e.n(A),y=e(75271),x={"breadcrumb-demo-en-us-0":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=t.sent,i=I.Breadcrumb,t.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return o=t.sent,a=o.default,t.abrupt("return",{default:function(){return a.createElement(i,{items:[{title:"\u9996\u9875",onClick:function(){window.location.href="https://bui.taopiaopiao.com/"}},{title:"\u7EC4\u4EF6",onClick:function(){window.location.href="https://bui.taopiaopiao.com/cores/button"}},{title:"\u9762\u5305\u5C51"}]})}});case 9:case"end":return t.stop()}},u)})))),asset:{type:"BLOCK",id:"breadcrumb-demo-en-us-0",refAtomIds:["Breadcrumb"],dependencies:{"index.tsx":{type:"FILE",value:`import { Breadcrumb } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Breadcrumb
      items={[
        {
          title: '\u9996\u9875',
          onClick: () => {
            window.location.href = 'https://bui.taopiaopiao.com/';
          },
        },
        {
          title: '\u7EC4\u4EF6',
          onClick: () => {
            window.location.href = 'https://bui.taopiaopiao.com/cores/button';
          },
        },
        {
          title: '\u9762\u5305\u5C51',
        },
      ]}
    />
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"breadcrumb-demo-en-us-1":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=l.sent,i=I.Breadcrumb,o=I.BreadcrumbItem,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,r=a.default,l.abrupt("return",{default:function(){var d=function(){window.location.href="https://bui.taopiaopiao.com/"},s=function(){window.location.href="https://bui.taopiaopiao.com/cores/button"};return r.createElement(i,null,r.createElement(o,{onClick:d},"\u9996\u9875"),r.createElement(o,{onClick:s},"\u7EC4\u4EF6"),r.createElement(o,null,"\u9762\u5305\u5C51"))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"breadcrumb-demo-en-us-1",refAtomIds:["Breadcrumb"],dependencies:{"index.tsx":{type:"FILE",value:`import { Breadcrumb, BreadcrumbItem } from '@bifrostui/react';
import React from 'react';

export default () => {
  const handleHomeClick = () => {
    window.location.href = 'https://bui.taopiaopiao.com/';
  };

  const handleCompClick = () => {
    window.location.href = 'https://bui.taopiaopiao.com/cores/button';
  };

  return (
    <Breadcrumb>
      <BreadcrumbItem onClick={handleHomeClick}>\u9996\u9875</BreadcrumbItem>
      <BreadcrumbItem onClick={handleCompClick}>\u7EC4\u4EF6</BreadcrumbItem>
      <BreadcrumbItem>\u9762\u5305\u5C51</BreadcrumbItem>
    </Breadcrumb>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"breadcrumb-demo-en-us-2":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=s.sent,i=I.Breadcrumb,o=I.BreadcrumbItem,s.next=7,e.e(9975).then(e.bind(e,29975));case 7:return a=s.sent,r=a.HomeIcon,t=a.ListOutlinedIcon,s.next=12,Promise.resolve().then(e.t.bind(e,75271,19));case 12:return l=s.sent,n=l.default,s.abrupt("return",{default:function(){var h=function(){window.location.href="https://bui.taopiaopiao.com/"},f=function(){window.location.href="https://bui.taopiaopiao.com/cores/button"};return n.createElement(i,null,n.createElement(o,{style:{display:"flex",alignItems:"center"},onClick:h},n.createElement("span",{style:{display:"flex",alignItems:"center"}},n.createElement(r,null))),n.createElement(o,{onClick:f},n.createElement("span",{style:{display:"flex",alignItems:"center"}},n.createElement(t,null),n.createElement("span",{style:{marginLeft:"4px"}},"\u7EC4\u4EF6"))),n.createElement(o,null,"\u9762\u5305\u5C51"))}});case 15:case"end":return s.stop()}},u)})))),asset:{type:"BLOCK",id:"breadcrumb-demo-en-us-2",refAtomIds:["Breadcrumb"],dependencies:{"index.tsx":{type:"FILE",value:`import { Breadcrumb, BreadcrumbItem } from '@bifrostui/react';
import { HomeIcon, ListOutlinedIcon } from '@bifrostui/icons';
import React from 'react';

export default () => {
  const handleHomeClick = () => {
    window.location.href = 'https://bui.taopiaopiao.com/';
  };

  const handleCompClick = () => {
    window.location.href = 'https://bui.taopiaopiao.com/cores/button';
  };

  return (
    <Breadcrumb>
      <BreadcrumbItem
        style={{ display: 'flex', alignItems: 'center' }}
        onClick={handleHomeClick}
      >
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <HomeIcon />
        </span>
      </BreadcrumbItem>
      <BreadcrumbItem onClick={handleCompClick}>
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <ListOutlinedIcon />
          <span style={{ marginLeft: '4px' }}>\u7EC4\u4EF6</span>
        </span>
      </BreadcrumbItem>
      <BreadcrumbItem>\u9762\u5305\u5C51</BreadcrumbItem>
    </Breadcrumb>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"breadcrumb-demo-en-us-3":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=t.sent,i=I.Breadcrumb,t.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return o=t.sent,a=o.default,t.abrupt("return",{default:function(){return a.createElement(i,{separator:">",items:[{title:"\u9996\u9875",onClick:function(){window.location.href="https://bui.taopiaopiao.com/"}},{title:"\u7EC4\u4EF6",onClick:function(){window.location.href="https://bui.taopiaopiao.com/cores/button"}},{title:"\u9762\u5305\u5C51"}]})}});case 9:case"end":return t.stop()}},u)})))),asset:{type:"BLOCK",id:"breadcrumb-demo-en-us-3",refAtomIds:["Breadcrumb"],dependencies:{"index.tsx":{type:"FILE",value:`import { Breadcrumb } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Breadcrumb
      separator=">"
      items={[
        {
          title: '\u9996\u9875',
          onClick: () => {
            window.location.href = 'https://bui.taopiaopiao.com/';
          },
        },
        {
          title: '\u7EC4\u4EF6',
          onClick: () => {
            window.location.href = 'https://bui.taopiaopiao.com/cores/button';
          },
        },
        {
          title: '\u9762\u5305\u5C51',
        },
      ]}
    />
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"breadcrumb-demo-en-us-4":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=t.sent,i=I.Breadcrumb,t.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return o=t.sent,a=o.default,t.abrupt("return",{default:function(){return a.createElement(i,{items:[{title:"\u9996\u9875",separator:":",onClick:function(){window.location.href="https://bui.taopiaopiao.com/"}},{title:"\u7EC4\u4EF6",onClick:function(){window.location.href="https://bui.taopiaopiao.com/cores/button"}},{title:"\u9762\u5305\u5C51"}]})}});case 9:case"end":return t.stop()}},u)})))),asset:{type:"BLOCK",id:"breadcrumb-demo-en-us-4",refAtomIds:["Breadcrumb"],dependencies:{"index.tsx":{type:"FILE",value:`import { Breadcrumb } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Breadcrumb
      items={[
        {
          title: '\u9996\u9875',
          separator: ':',
          onClick: () => {
            window.location.href = 'https://bui.taopiaopiao.com/';
          },
        },
        {
          title: '\u7EC4\u4EF6',
          onClick: () => {
            window.location.href = 'https://bui.taopiaopiao.com/cores/button';
          },
        },
        {
          title: '\u9762\u5305\u5C51',
        },
      ]}
    />
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}}}},13783:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return x}});var M=e(90228),c=e.n(M),A=e(87999),p=e.n(A),y=e(75271),x={"packages-bui-core-src-button-demo-en-us-0":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=l.sent,i=I.Button,o=I.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,r=a.default,l.abrupt("return",{default:function(){return r.createElement(o,{direction:"row",spacing:"8px",flexWrap:"wrap"},r.createElement(i,{color:"primary",variant:"text"},"\u6587\u5B57\u6309\u94AE"),r.createElement(i,{color:"primary"},"\u63CF\u8FB9\u6309\u94AE"),r.createElement(i,{color:"primary",variant:"contained"},"\u586B\u5145\u6309\u94AE"),r.createElement(i,{color:"primary",variant:"light"},"\u6D45\u4EAE\u6309\u94AE"))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-button-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="8px" flexWrap="wrap">
      <Button color="primary" variant="text">
        \u6587\u5B57\u6309\u94AE
      </Button>
      <Button color="primary">\u63CF\u8FB9\u6309\u94AE</Button>
      <Button color="primary" variant="contained">
        \u586B\u5145\u6309\u94AE
      </Button>
      <Button color="primary" variant="light">
        \u6D45\u4EAE\u6309\u94AE
      </Button>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-button-demo-en-us-1":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=l.sent,i=I.Button,o=I.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,r=a.default,l.abrupt("return",{default:function(){return r.createElement(o,{spacing:"8px"},r.createElement(o,{direction:"row",spacing:"8px"},r.createElement(i,{size:"small"},"\u5C0F\u53F7\u6309\u94AE"),r.createElement(i,{size:"medium"},"\u4E2D\u53F7\u6309\u94AE"),r.createElement(i,{size:"large"},"\u5927\u53F7\u6309\u94AE")),r.createElement(i,{size:"full"},"\u901A\u680F\u6309\u94AE"))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-button-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="8px">
      <Stack direction="row" spacing="8px">
        <Button size="small">\u5C0F\u53F7\u6309\u94AE</Button>
        <Button size="medium">\u4E2D\u53F7\u6309\u94AE</Button>
        <Button size="large">\u5927\u53F7\u6309\u94AE</Button>
      </Stack>
      <Button size="full">\u901A\u680F\u6309\u94AE</Button>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-button-demo-en-us-2":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=l.sent,i=I.Button,o=I.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,r=a.default,l.abrupt("return",{default:function(){return r.createElement(o,{direction:"row",spacing:"8px",flexWrap:"wrap"},r.createElement(i,{variant:"contained"},"\u53D6\u6D88"),r.createElement(i,{color:"primary",variant:"contained"},"\u8D2D\u7968"),r.createElement(i,{color:"success",variant:"contained"},"\u5F71\u57CE"),r.createElement(i,{color:"info",variant:"contained"},"\u7535\u5F71"),r.createElement(i,{color:"warning",variant:"contained"},"\u60F3\u770B"),r.createElement(i,{color:"danger",variant:"contained"},"\u7279\u60E0"),r.createElement(i,{color:"vip",variant:"contained"},"\u4F1A\u5458"))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-button-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="8px" flexWrap="wrap">
      <Button variant="contained">\u53D6\u6D88</Button>
      <Button color="primary" variant="contained">
        \u8D2D\u7968
      </Button>
      <Button color="success" variant="contained">
        \u5F71\u57CE
      </Button>
      <Button color="info" variant="contained">
        \u7535\u5F71
      </Button>
      <Button color="warning" variant="contained">
        \u60F3\u770B
      </Button>
      <Button color="danger" variant="contained">
        \u7279\u60E0
      </Button>
      <Button color="vip" variant="contained">
        \u4F1A\u5458
      </Button>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-button-demo-en-us-3":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=l.sent,i=I.Button,o=I.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,r=a.default,l.abrupt("return",{default:function(){return r.createElement(o,{direction:"row",spacing:"8px"},r.createElement(i,{variant:"text",disabled:!0},"\u6587\u5B57\u7981\u7528"),r.createElement(i,{disabled:!0},"\u63CF\u8FB9\u7981\u7528"),r.createElement(i,{variant:"contained",disabled:!0},"\u586B\u5145\u7981\u7528"))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-button-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="8px">
      <Button variant="text" disabled>
        \u6587\u5B57\u7981\u7528
      </Button>
      <Button disabled>\u63CF\u8FB9\u7981\u7528</Button>
      <Button variant="contained" disabled>
        \u586B\u5145\u7981\u7528
      </Button>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-button-demo-en-us-4":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=s.sent,i=I.default,s.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=s.sent,a=o.Button,r=o.Stack,s.next=11,e.e(9975).then(e.bind(e,29975));case 11:return t=s.sent,l=t.CalendarOutlinedIcon,n=t.HeartFilledIcon,s.abrupt("return",{default:function(){return i.createElement(r,{direction:"row",spacing:"8px"},i.createElement(a,{startIcon:i.createElement(n,{htmlColor:"linear-gradient(150deg, #FFFDFC 0%, #D5B198 100%)"})},"Heart"),i.createElement(a,{endIcon:i.createElement(l,null)},"Date"))}});case 15:case"end":return s.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-button-demo-en-us-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Button, Stack } from '@bifrostui/react';
import { CalendarOutlinedIcon, HeartFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row" spacing="8px">
      <Button
        startIcon={
          <HeartFilledIcon htmlColor="linear-gradient(150deg, #FFFDFC 0%, #D5B198 100%)" />
        }
      >
        Heart
      </Button>
      <Button endIcon={<CalendarOutlinedIcon />}>Date</Button>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}}}},37535:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return o}});var M=e(90228),c=e.n(M),A=e(48305),p=e.n(A),y=e(87999),x=e.n(y),u=e(75271),I=e(40129),i=e(45924),o={"packages-bui-core-src-calendar-demo-en-us-0":{component:u.memo(u.lazy(x()(c()().mark(function a(){var r,t,l,n,d,s,m,h;return c()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=g.sent,t=r.Calendar,l=r.Stack,g.next=7,Promise.resolve().then(e.bind(e,40129));case 7:return n=g.sent,d=n.default,g.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return s=g.sent,m=s.default,h=s.useState,g.abrupt("return",{default:function(){var E=h(d().toDate()),P=p()(E,2),C=P[0],O=P[1],T=function(L,D){console.log("date change:",D),O(D.value)};return m.createElement(l,null,m.createElement("div",{style:{width:"320px"}},m.createElement(t,{value:C,onChange:T})))}});case 15:case"end":return g.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <Calendar value={value} onChange={handleChange} />
      </div>
    </Stack>
  );
};`},dayjs:{type:"NPM",value:"1.11.13"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"dayjs/esm/index":I,react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var a=x()(c()().mark(function t(){var l,n=arguments;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}},"packages-bui-core-src-calendar-demo-en-us-1":{component:u.memo(u.lazy(x()(c()().mark(function a(){var r,t,l,n,d,s,m,h;return c()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=g.sent,t=r.Calendar,l=r.Stack,g.next=7,Promise.resolve().then(e.bind(e,40129));case 7:return n=g.sent,d=n.default,g.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return s=g.sent,m=s.default,h=s.useState,g.abrupt("return",{default:function(){var E=h(d().toDate()),P=p()(E,2),C=P[0],O=P[1];return m.createElement(l,null,m.createElement("div",{style:{width:"320px"}},m.createElement(t,{value:C,minDate:d().toDate(),maxDate:d().add(2,"month").toDate(),onChange:function(B,L){console.log("\u65E5\u671F\u53D8\u5316\uFF1A",L),O(L.value)}})))}});case 15:case"end":return g.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <Calendar
          value={value}
          minDate={dayjs().toDate()}
          maxDate={dayjs().add(2, 'month').toDate()}
          onChange={(e, res) => {
            console.log('\u65E5\u671F\u53D8\u5316\uFF1A', res);
            setValue(res.value);
          }}
        />
      </div>
    </Stack>
  );
};`},dayjs:{type:"NPM",value:"1.11.13"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"dayjs/esm/index":I,react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var a=x()(c()().mark(function t(){var l,n=arguments;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}},"packages-bui-core-src-calendar-demo-en-us-2":{component:u.memo(u.lazy(x()(c()().mark(function a(){var r,t,l,n,d,s,m,h;return c()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=g.sent,t=r.Calendar,l=r.Stack,g.next=7,Promise.resolve().then(e.bind(e,40129));case 7:return n=g.sent,d=n.default,g.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return s=g.sent,m=s.default,h=s.useState,g.abrupt("return",{default:function(){var E=h(d().toDate()),P=p()(E,2),C=P[0],O=P[1],T=function(L,D){console.log("date change:",D),O(D.value)};return m.createElement(l,null,m.createElement("div",{style:{width:"320px"}},m.createElement(t,{hideDaysOutsideCurrentMonth:!0,value:C,onChange:T})))}});case 15:case"end":return g.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <Calendar
          hideDaysOutsideCurrentMonth
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};`},dayjs:{type:"NPM",value:"1.11.13"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"dayjs/esm/index":I,react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var a=x()(c()().mark(function t(){var l,n=arguments;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}},"packages-bui-core-src-calendar-demo-en-us-3":{component:u.memo(u.lazy(x()(c()().mark(function a(){var r,t,l,n,d,s,m,h;return c()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=g.sent,t=r.Calendar,l=r.Stack,g.next=7,Promise.resolve().then(e.bind(e,40129));case 7:return n=g.sent,d=n.default,g.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return s=g.sent,m=s.default,h=s.useState,g.abrupt("return",{default:function(){var E=h(d().toDate()),P=p()(E,2),C=P[0],O=P[1],T=function(L,D){console.log("date change:",D),O(D.value)};return m.createElement(l,null,m.createElement("div",{style:{width:"320px"}},m.createElement(t,{style:{"--handler-text-width":"90px"},onMonthChange:function(L,D){console.log("\u6708\u4EFD\u53D8\u5316\uFF1A",D)},headerBarFormat:"YYYY\u5E74MM\u6708",value:C,onChange:T})))}});case 15:case"end":return g.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <Calendar
          style={{ '--handler-text-width': '90px' }}
          onMonthChange={(e, res) => {
            console.log('\u6708\u4EFD\u53D8\u5316\uFF1A', res);
          }}
          headerBarFormat="YYYY\u5E74MM\u6708"
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};`},dayjs:{type:"NPM",value:"1.11.13"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"dayjs/esm/index":I,react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var a=x()(c()().mark(function t(){var l,n=arguments;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}},"packages-bui-core-src-calendar-demo-en-us-4":{component:u.memo(u.lazy(x()(c()().mark(function a(){var r,t,l,n,d,s,m,h,f,g,b;return c()().wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return P.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=P.sent,t=r.Calendar,l=r.Stack,P.next=7,e.e(9975).then(e.bind(e,29975));case 7:return n=P.sent,d=n.DoubleArrowLeftTwoToneIcon,s=n.DoubleArrowRightTwoToneIcon,P.next=12,Promise.resolve().then(e.bind(e,40129));case 12:return m=P.sent,h=m.default,P.next=16,Promise.resolve().then(e.t.bind(e,75271,19));case 16:return f=P.sent,g=f.default,b=f.useState,P.abrupt("return",{default:function(){var O=b(h().toDate()),T=p()(O,2),B=T[0],L=T[1],D=function($,F){console.log("date change:",F),L(F.value)};return g.createElement(l,null,g.createElement("div",{style:{width:"320px"}},g.createElement(t,{headerBarLeftIcon:function($){var F=$.isMinMonth;return g.createElement(d,{htmlColor:F&&"#cccccc"})},headerBarRightIcon:function($){var F=$.isMaxMonth;return g.createElement(s,{htmlColor:F&&"#cccccc"})},value:B,onChange:D})))}});case 20:case"end":return P.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-en-us-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Calendar, Stack } from '@bifrostui/react';
import {
  DoubleArrowLeftTwoToneIcon,
  DoubleArrowRightTwoToneIcon,
} from '@bifrostui/icons';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <Calendar
          headerBarLeftIcon={({ isMinMonth }) => {
            return (
              <DoubleArrowLeftTwoToneIcon htmlColor={isMinMonth && '#cccccc'} />
            );
          }}
          headerBarRightIcon={({ isMaxMonth }) => {
            return (
              <DoubleArrowRightTwoToneIcon
                htmlColor={isMaxMonth && '#cccccc'}
              />
            );
          }}
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};`},dayjs:{type:"NPM",value:"1.11.13"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"dayjs/esm/index":I,react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var a=x()(c()().mark(function t(){var l,n=arguments;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}},"packages-bui-core-src-calendar-demo-en-us-5":{component:u.memo(u.lazy(x()(c()().mark(function a(){var r,t,l,n,d,s,m,h;return c()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=g.sent,t=r.Calendar,l=r.Stack,g.next=7,Promise.resolve().then(e.bind(e,40129));case 7:return n=g.sent,d=n.default,g.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return s=g.sent,m=s.default,h=s.useState,g.abrupt("return",{default:function(){var E=h(d().toDate()),P=p()(E,2),C=P[0],O=P[1],T=function(L,D){console.log("date change:",D),O(D.value)};return m.createElement(l,null,m.createElement("div",{style:{width:"320px"}},m.createElement(t,{minDate:d().subtract(5,"year").toDate(),maxDate:d().add(5,"year").toDate(),enableSelectYear:!0,value:C,onChange:T})))}});case 15:case"end":return g.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-en-us-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <Calendar
          minDate={dayjs().subtract(5, 'year').toDate()}
          maxDate={dayjs().add(5, 'year').toDate()}
          enableSelectYear
          value={value}
          onChange={handleChange}
        />
      </div>
    </Stack>
  );
};`},dayjs:{type:"NPM",value:"1.11.13"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"dayjs/esm/index":I,react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var a=x()(c()().mark(function t(){var l,n=arguments;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}},"packages-bui-core-src-calendar-demo-en-us-6":{component:u.memo(u.lazy(x()(c()().mark(function a(){var r,t,l,n,d,s,m,h;return c()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=g.sent,t=r.Calendar,l=r.Stack,g.next=7,Promise.resolve().then(e.bind(e,40129));case 7:return n=g.sent,d=n.default,g.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return s=g.sent,m=s.default,h=s.useState,g.abrupt("return",{default:function(){var E=h(d().toDate()),P=p()(E,2),C=P[0],O=P[1],T=function(L){return d(d(L).format("YYYYMMDD")).diff(d(d().format("YYYYMMDD")),"day")<0};return m.createElement(l,null,m.createElement("div",{style:{width:"320px"}},m.createElement(t,{value:C,disabledDate:T,onChange:function(L,D){console.log("\u65E5\u671F\u53D8\u5316\uFF1A",D),O(D.value)}})))}});case 15:case"end":return g.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-en-us-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());

  const disabledDate = (current) => {
    return (
      // \u4E4B\u524D\u65E5\u671F\u4E0D\u53EF\u9009
      dayjs(dayjs(current).format('YYYYMMDD')).diff(
        dayjs(dayjs().format('YYYYMMDD')),
        'day',
      ) < 0
    );
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <Calendar
          value={value}
          disabledDate={disabledDate}
          onChange={(e, res) => {
            console.log('\u65E5\u671F\u53D8\u5316\uFF1A', res);
            setValue(res.value);
          }}
        />
      </div>
    </Stack>
  );
};`},dayjs:{type:"NPM",value:"1.11.13"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"dayjs/esm/index":I,react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var a=x()(c()().mark(function t(){var l,n=arguments;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}},"packages-bui-core-src-calendar-demo-en-us-7":{component:u.memo(u.lazy(x()(c()().mark(function a(){var r,t,l,n,d,s,m,h;return c()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=g.sent,t=r.Calendar,l=r.Stack,g.next=7,Promise.resolve().then(e.bind(e,40129));case 7:return n=g.sent,d=n.default,g.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return s=g.sent,m=s.default,h=s.useState,g.abrupt("return",{default:function(){var E=h(d().toDate()),P=p()(E,2),C=P[0],O=P[1];return m.createElement(l,null,m.createElement("div",{style:{width:"320px"}},m.createElement(t,{value:C,highlightDate:"weekend",onChange:function(B,L){console.log("\u65E5\u671F\u53D8\u5316\uFF1A",d(L.value).format("YYYY-MM-DD")),O(L.value)}})))}});case 15:case"end":return g.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-en-us-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <Calendar
          value={value}
          highlightDate="weekend"
          onChange={(e, res) => {
            console.log('\u65E5\u671F\u53D8\u5316\uFF1A', dayjs(res.value).format('YYYY-MM-DD'));
            setValue(res.value);
          }}
        />
      </div>
    </Stack>
  );
};`},dayjs:{type:"NPM",value:"1.11.13"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"dayjs/esm/index":I,react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var a=x()(c()().mark(function t(){var l,n=arguments;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}},"packages-bui-core-src-calendar-demo-en-us-8":{component:u.memo(u.lazy(x()(c()().mark(function a(){var r,t,l,n,d,s,m,h;return c()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=g.sent,t=r.Calendar,l=r.Stack,g.next=7,Promise.resolve().then(e.bind(e,40129));case 7:return n=g.sent,d=n.default,g.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return s=g.sent,m=s.default,h=s.useState,g.abrupt("return",{default:function(){var E=h([d().add(1,"day").toDate(),d().add(5,"day").toDate()]),P=p()(E,2),C=P[0],O=P[1];return m.createElement(l,null,m.createElement("div",{style:{width:"320px"}},m.createElement(t,{mode:"range",value:C,onChange:function(B,L){console.log("\u65E5\u671F\u53D8\u5316\uFF1A",L),O(L.value)}})))}});case 15:case"end":return g.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-en-us-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState<[Date, Date]>([
    dayjs().add(1, 'day').toDate(),
    dayjs().add(5, 'day').toDate(),
  ]);

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <Calendar
          mode="range"
          value={value}
          onChange={(e, res) => {
            console.log('\u65E5\u671F\u53D8\u5316\uFF1A', res);
            setValue(res.value);
          }}
        />
      </div>
    </Stack>
  );
};`},dayjs:{type:"NPM",value:"1.11.13"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"dayjs/esm/index":I,react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var a=x()(c()().mark(function t(){var l,n=arguments;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}},"packages-bui-core-src-calendar-demo-en-us-9":{component:u.memo(u.lazy(x()(c()().mark(function a(){var r,t,l,n,d,s,m,h,f;return c()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=b.sent,t=r.Button,l=r.Calendar,n=r.Stack,b.next=8,Promise.resolve().then(e.bind(e,40129));case 8:return d=b.sent,s=d.default,b.next=12,Promise.resolve().then(e.t.bind(e,75271,19));case 12:return m=b.sent,h=m.default,f=m.useState,b.abrupt("return",{default:function(){var P=f(s().add(1,"month").toDate()),C=p()(P,2),O=C[0],T=C[1],B=f([s().add(30,"day").toDate(),s().add(33,"day").toDate()]),L=p()(B,2),D=L[0],k=L[1],$=function(){T(s().toDate())},F=function(){k([s().toDate(),s().add(6,"day").toDate()])};return h.createElement(n,null,h.createElement("div",{style:{width:"320px"}},h.createElement(t,{onClick:$},"\u56DE\u5230\u4ECA\u5929"),h.createElement(l,{mode:"single",value:O}),h.createElement(t,{onClick:F},"\u9009\u4E2D\u6700\u8FD1\u4E00\u5468"),h.createElement(l,{mode:"range",value:D})))}});case 16:case"end":return b.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-en-us-9",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().add(1, 'month').toDate());
  const [rangevalue, setRangeValue] = useState([
    dayjs().add(30, 'day').toDate(),
    dayjs().add(33, 'day').toDate(),
  ]);

  const onSingleClick = () => {
    setValue(dayjs().toDate());
  };

  const onRangeClick = () => {
    setRangeValue([dayjs().toDate(), dayjs().add(6, 'day').toDate()]);
  };

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <Button onClick={onSingleClick}>\u56DE\u5230\u4ECA\u5929</Button>
        <Calendar mode="single" value={value} />
        <Button onClick={onRangeClick}>\u9009\u4E2D\u6700\u8FD1\u4E00\u5468</Button>
        <Calendar mode="range" value={rangevalue} />
      </div>
    </Stack>
  );
};`},dayjs:{type:"NPM",value:"1.11.13"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"dayjs/esm/index":I,react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var a=x()(c()().mark(function t(){var l,n=arguments;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}},"packages-bui-core-src-calendar-demo-en-us-10":{component:u.memo(u.lazy(x()(c()().mark(function a(){var r,t,l,n,d,s,m;return c()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=f.sent,t=r.Calendar,l=r.Stack,f.next=7,Promise.resolve().then(e.bind(e,40129));case 7:return n=f.sent,d=n.default,f.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return s=f.sent,m=s.default,f.abrupt("return",{default:function(){return m.createElement(l,null,m.createElement("div",{style:{width:"320px"}},m.createElement(t,{mode:"range",defaultValue:[d().add(1,"day").toDate(),d().add(7,"day").toDate()]})))}});case 14:case"end":return f.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-en-us-10",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Calendar, Stack } from '@bifrostui/react';
import dayjs from 'dayjs/esm/index';
import React from 'react';

export default () => {
  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <Calendar
          mode="range"
          defaultValue={[
            dayjs().add(1, 'day').toDate(),
            dayjs().add(7, 'day').toDate(),
          ]}
        />
      </div>
    </Stack>
  );
};`},dayjs:{type:"NPM",value:"1.11.13"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{"dayjs/esm/index":I,react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var a=x()(c()().mark(function t(){var l,n=arguments;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}},"packages-bui-core-src-calendar-demo-en-us-11":{component:u.memo(u.lazy(x()(c()().mark(function a(){var r,t,l,n,d,s,m,h,f,g;return c()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=E.sent,t=r.Calendar,l=r.Stack,E.next=7,Promise.resolve().then(e.bind(e,45924));case 7:return n=E.sent,d=n.default,E.next=11,Promise.resolve().then(e.bind(e,40129));case 11:return s=E.sent,m=s.default,E.next=15,Promise.resolve().then(e.t.bind(e,75271,19));case 15:return h=E.sent,f=h.default,g=h.useState,E.abrupt("return",{default:function(){var C=g(m().toDate()),O=p()(C,2),T=O[0],B=O[1],L=function($){var F=$.day,z=$.disabled,U=m(F).isSame(m(),"day");return f.createElement("div",{className:d("bui-calendar-day",{disabled:z,today:U}),style:{flexDirection:"column"}},f.createElement("div",null,F&&m(F).format("D")),U&&f.createElement("div",{style:{fontSize:"10px"}},"\u4ECA\u5929"))},D=function($,F){return B(F.value)};return f.createElement(l,null,f.createElement("div",{style:{width:"320px"}},f.createElement(t,{mode:"single",value:T,dateRender:L,onChange:D})))}});case 19:case"end":return E.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-en-us-11",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Calendar, Stack } from '@bifrostui/react';
import clsx from 'clsx';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());

  const dateRender = (dayInstance) => {
    const { day, disabled } = dayInstance;
    const isToday = dayjs(day).isSame(dayjs(), 'day');
    return (
      <div
        className={clsx('bui-calendar-day', {
          disabled,
          today: isToday,
        })}
        style={{ flexDirection: 'column' }}
      >
        <div>{day && dayjs(day).format('D')}</div>
        {isToday && <div style={{ fontSize: '10px' }}>\u4ECA\u5929</div>}
      </div>
    );
  };

  const onChange = (e, res) => setValue(res.value);

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <Calendar
          mode="single"
          value={value}
          dateRender={dateRender}
          onChange={onChange}
        />
      </div>
    </Stack>
  );
};`},clsx:{type:"NPM",value:"1.2.1"},dayjs:{type:"NPM",value:"1.11.13"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{clsx:i,"dayjs/esm/index":I,react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var a=x()(c()().mark(function t(){var l,n=arguments;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}},"packages-bui-core-src-calendar-demo-en-us-12":{component:u.memo(u.lazy(x()(c()().mark(function a(){var r,t,l,n,d,s,m,h,f,g;return c()().wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=E.sent,t=r.Calendar,l=r.Stack,E.next=7,Promise.resolve().then(e.bind(e,45924));case 7:return n=E.sent,d=n.default,E.next=11,Promise.resolve().then(e.bind(e,40129));case 11:return s=E.sent,m=s.default,E.next=15,Promise.resolve().then(e.t.bind(e,75271,19));case 15:return h=E.sent,f=h.default,g=h.useState,E.abrupt("return",{default:function(){var C=g(m().toDate()),O=p()(C,2),T=O[0],B=O[1],L=function($){var F=["\u65E5","\u516D"].includes($);return f.createElement("div",{key:$,className:d("bui-calendar-day",{today:F}),style:{flexDirection:"column"}},f.createElement("div",null,$),f.createElement("div",{style:{fontSize:"10px"}},F?"\u4F11":f.createElement(f.Fragment,null,"\xA0")))},D=function($,F){return B(F.value)};return f.createElement(l,null,f.createElement("div",{style:{width:"320px"}},f.createElement(t,{mode:"single",value:T,weekRender:L,onChange:D})))}});case 19:case"end":return E.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-calendar-demo-en-us-12",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Calendar, Stack } from '@bifrostui/react';
import clsx from 'clsx';
import dayjs from 'dayjs/esm/index';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(dayjs().toDate());

  const weekRender = (weekItem) => {
    const isWeekend = ['\u65E5', '\u516D'].includes(weekItem);
    return (
      <div
        key={weekItem}
        className={clsx('bui-calendar-day', {
          today: isWeekend,
        })}
        style={{ flexDirection: 'column' }}
      >
        <div>{weekItem}</div>
        <div style={{ fontSize: '10px' }}>{isWeekend ? '\u4F11' : <>&nbsp;</>}</div>
      </div>
    );
  };

  const onChange = (e, res) => setValue(res.value);

  return (
    <Stack>
      <div style={{ width: '320px' }}>
        <Calendar
          mode="single"
          value={value}
          weekRender={weekRender}
          onChange={onChange}
        />
      </div>
    </Stack>
  );
};`},clsx:{type:"NPM",value:"1.2.1"},dayjs:{type:"NPM",value:"1.11.13"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{clsx:i,"dayjs/esm/index":I,react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var a=x()(c()().mark(function t(){var l,n=arguments;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}}}},47704:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return x}});var M=e(90228),c=e.n(M),A=e(87999),p=e.n(A),y=e(75271),x={"packages-bui-core-src-card-demo-en-us-0":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=n.sent,i=I.Card,o=I.CardHeader,a=I.Stack,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){return t.createElement(a,{style:{background:"#eee",padding:"20px"}},t.createElement(a,{style:{width:"270px"}},t.createElement(i,{style:{width:"100%"}},t.createElement(o,{title:t.createElement("div",null,"\u7F8E\u5473\u5C0F\u98DF")}))))}});case 11:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-card-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Card, CardHeader, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader title={<div>\u7F8E\u5473\u5C0F\u98DF</div>} />
        </Card>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-card-demo-en-us-1":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=n.sent,i=I.Card,o=I.CardHeader,a=I.Stack,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){return t.createElement(a,{style:{background:"#eee",padding:"20px"}},t.createElement(a,{style:{width:"270px"}},t.createElement(i,{style:{width:"100%"}},t.createElement(o,{subtitle:"\uFF08\u5927\u6876\u7206\u7C73\u82B11\u4EFD+300ml\u81EA\u5236\u5976\u83362\u676F\uFF09"}))))}});case 11:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-card-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Card, CardHeader, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader subtitle="\uFF08\u5927\u6876\u7206\u7C73\u82B11\u4EFD+300ml\u81EA\u5236\u5976\u83362\u676F\uFF09" />
        </Card>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-card-demo-en-us-2":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=n.sent,i=I.Card,o=I.CardHeader,a=I.Stack,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){return t.createElement(a,{style:{background:"#eee",padding:"20px"}},t.createElement(a,{style:{width:"270px"}},t.createElement(i,{style:{width:"100%"}},t.createElement(o,{title:"\u7F8E\u5473\u5C0F\u98DF",subtitle:"\uFF08\u5927\u6876\u7206\u7C73\u82B11\u4EFD+300ml\u81EA\u5236\u5976\u83362\u676F\uFF09"}))))}});case 11:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-card-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Card, CardHeader, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader
            title="\u7F8E\u5473\u5C0F\u98DF"
            subtitle="\uFF08\u5927\u6876\u7206\u7C73\u82B11\u4EFD+300ml\u81EA\u5236\u5976\u83362\u676F\uFF09"
          />
        </Card>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-card-demo-en-us-3":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=n.sent,i=I.Card,o=I.CardHeader,a=I.Stack,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){return t.createElement(a,{style:{background:"#eee",padding:"20px"}},t.createElement(a,{style:{width:"270px"}},t.createElement(i,{style:{width:"100%"}},t.createElement(o,{title:"\u8BA2\u5355",extra:"\u67E5\u770B\u66F4\u591A",onClick:function(m){console.log(m)}}))))}});case 11:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-card-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Card, CardHeader, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader
            title="\u8BA2\u5355"
            extra="\u67E5\u770B\u66F4\u591A"
            onClick={(e) => {
              console.log(e);
            }}
          />
        </Card>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-card-demo-en-us-4":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=n.sent,i=I.Card,o=I.CardHeader,a=I.Stack,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){return t.createElement(a,{style:{background:"#eee",padding:"20px"}},t.createElement(a,{style:{width:"270px"}},t.createElement(i,{style:{width:"100%"}},t.createElement(o,{title:"\u8BA2\u5355",extra:"\u67E5\u770B\u66F4\u591A",endIcon:!1,onClick:function(m){console.log(m)}}))))}});case 11:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-card-demo-en-us-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Card, CardHeader, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader
            title="\u8BA2\u5355"
            extra="\u67E5\u770B\u66F4\u591A"
            endIcon={false}
            onClick={(e) => {
              console.log(e);
            }}
          />
        </Card>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-card-demo-en-us-5":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=n.sent,i=I.Card,o=I.CardContent,a=I.Stack,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){return t.createElement(a,{style:{background:"#eee",padding:"20px"}},t.createElement(a,{style:{width:"270px"}},t.createElement(i,{style:{width:"100%"}},t.createElement(o,null,t.createElement("div",null,"\u8BA2\u5355\u53F7\uFF1A7a73fcggert235fag4"),t.createElement("div",null,"\u53D6\u9910\u7801\uFF1A235634"),t.createElement("div",null,"\u624B\u673A\u53F7: 134****5427")))))}});case 11:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-card-demo-en-us-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Card, CardContent, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardContent>
            <div>\u8BA2\u5355\u53F7\uFF1A7a73fcggert235fag4</div>
            <div>\u53D6\u9910\u7801\uFF1A235634</div>
            <div>\u624B\u673A\u53F7: 134****5427</div>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-card-demo-en-us-6":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t,l,n,d;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=m.sent,i=I.Button,o=I.Card,a=I.CardContent,r=I.CardFooter,t=I.CardHeader,l=I.Stack,m.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return n=m.sent,d=n.default,m.abrupt("return",{default:function(){return d.createElement(l,{style:{background:"#eee",padding:"20px"}},d.createElement(l,{style:{width:"270px"}},d.createElement(o,{style:{width:"100%"}},d.createElement(t,{title:"\u8BA2\u5355"}),d.createElement(a,null,d.createElement("div",null,"\u8BA2\u5355\u53F7\uFF1A7a73fcggert235fag4"),d.createElement("div",null,"\u53D6\u9910\u7801\uFF1A235634"),d.createElement("div",null,"\u624B\u673A\u53F7: 134****5427")),d.createElement(r,null,d.createElement(i,{color:"success"},"\u7B7E\u6536")))))}});case 14:case"end":return m.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-card-demo-en-us-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Stack,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader title="\u8BA2\u5355" />
          <CardContent>
            <div>\u8BA2\u5355\u53F7\uFF1A7a73fcggert235fag4</div>
            <div>\u53D6\u9910\u7801\uFF1A235634</div>
            <div>\u624B\u673A\u53F7: 134****5427</div>
          </CardContent>
          <CardFooter>
            <Button color="success">\u7B7E\u6536</Button>
          </CardFooter>
        </Card>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-card-demo-en-us-7":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t,l,n,d;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=m.sent,i=I.Button,o=I.Card,a=I.CardContent,r=I.CardFooter,t=I.CardHeader,l=I.Stack,m.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return n=m.sent,d=n.default,m.abrupt("return",{default:function(){return d.createElement(l,{style:{background:"#eee",padding:"20px"}},d.createElement(l,{style:{width:"270px"}},d.createElement(o,{style:{width:"100%"}},d.createElement(t,{title:"\u8BA2\u5355"}),d.createElement(a,null,d.createElement("div",null,"\u8BA2\u5355\u53F7\uFF1A7a73fcggert235fag4"),d.createElement("div",null,"\u53D6\u9910\u7801\uFF1A235634"),d.createElement("div",null,"\u624B\u673A\u53F7: 134****5427")),d.createElement(r,null,d.createElement(i,{color:"success"},"\u7B7E\u6536")))))}});case 14:case"end":return m.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-card-demo-en-us-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Stack,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader title="\u8BA2\u5355" />
          <CardContent>
            <div>\u8BA2\u5355\u53F7\uFF1A7a73fcggert235fag4</div>
            <div>\u53D6\u9910\u7801\uFF1A235634</div>
            <div>\u624B\u673A\u53F7: 134****5427</div>
          </CardContent>
          <CardFooter>
            <Button color="success">\u7B7E\u6536</Button>
          </CardFooter>
        </Card>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-card-demo-en-us-8":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t,l;return c()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=d.sent,i=I.Card,o=I.CardContent,a=I.CardHeader,r=I.Stack,d.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return t=d.sent,l=t.default,d.abrupt("return",{default:function(){return l.createElement(r,{style:{background:"#eee",padding:"20px"}},l.createElement(r,{style:{width:"270px"}},l.createElement(i,{style:{width:"100%"}},l.createElement(a,{title:"\u8D2D\u4E70\u5546\u54C1"}),l.createElement(o,null,l.createElement(i,{style:{width:"100%"}},l.createElement(a,{title:"\u751F\u9C9C\u6C34\u679C",onClick:function(h){console.log(h)},extra:"\u51716\u4EF6"}),l.createElement(o,null,l.createElement("div",null,"\u82F9\u679C*2"),l.createElement("div",null,"\u6728\u74DC*1"),l.createElement("div",null,"\u83E0\u83DC*3"))),l.createElement(i,{className:"subCard"},l.createElement(a,{title:"\u96F6\u98DF\u996E\u6599",onClick:function(h){console.log(h)},extra:"\u517114\u4EF6"}),l.createElement(o,null,l.createElement("div",null,"\u85AF\u7247*2"),l.createElement("div",null,"\u6A59\u6C41*2"),l.createElement("div",null,"\u706B\u817F\u80A0*10")))))))}});case 12:case"end":return d.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-card-demo-en-us-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Card, CardContent, CardHeader, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ width: '100%' }}>
          <CardHeader title="\u8D2D\u4E70\u5546\u54C1" />
          <CardContent>
            <Card style={{ width: '100%' }}>
              <CardHeader
                title="\u751F\u9C9C\u6C34\u679C"
                onClick={(e) => {
                  console.log(e);
                }}
                extra="\u51716\u4EF6"
              />
              <CardContent>
                <div>\u82F9\u679C*2</div>
                <div>\u6728\u74DC*1</div>
                <div>\u83E0\u83DC*3</div>
              </CardContent>
            </Card>
            <Card className="subCard">
              <CardHeader
                title="\u96F6\u98DF\u996E\u6599"
                onClick={(e) => {
                  console.log(e);
                }}
                extra="\u517114\u4EF6"
              />
              <CardContent>
                <div>\u85AF\u7247*2</div>
                <div>\u6A59\u6C41*2</div>
                <div>\u706B\u817F\u80A0*10</div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-card-demo-en-us-9":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=l.sent,i=I.Card,o=I.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,r=a.default,l.abrupt("return",{default:function(){return r.createElement(o,{style:{background:"#eee",padding:"20px"}},r.createElement(o,{style:{width:"270px"}},r.createElement(i,{style:{padding:"10px"}},r.createElement("div",null,"\u914D\u6599\u8868"),r.createElement("div",null,"\u4E3B\u8981\u6210\u5206\uFF1A\u6C34\uFF0C\u751F\u725B\u4E73"),r.createElement("div",null,"\u4EA7\u54C1\u68C0\u9A8C\u5408\u683C"))))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-card-demo-en-us-9",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Card, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ background: '#eee', padding: '20px' }}>
      <Stack style={{ width: '270px' }}>
        <Card style={{ padding: '10px' }}>
          <div>\u914D\u6599\u8868</div>
          <div>\u4E3B\u8981\u6210\u5206\uFF1A\u6C34\uFF0C\u751F\u725B\u4E73</div>
          <div>\u4EA7\u54C1\u68C0\u9A8C\u5408\u683C</div>
        </Card>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}}}},15337:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return I}});var M=e(90228),c=e.n(M),A=e(48305),p=e.n(A),y=e(87999),x=e.n(y),u=e(75271),I={"packages-bui-core-src-checkbox-demo-en-us-0":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=s.sent,a=o.Checkbox,r=o.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(!1),f=p()(h,2),g=f[0],b=f[1];return l.createElement(r,null,l.createElement(a,{checked:g,onChange:function(P,C){b(C.checked)}},"Checkbox"))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-checkbox-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Checkbox, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Checkbox
        checked={checked}
        onChange={(e, data) => {
          setChecked(data.checked);
        }}
      >
        Checkbox
      </Checkbox>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-checkbox-demo-en-us-1":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=s.sent,a=o.Checkbox,r=o.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(!1),f=p()(h,2),g=f[0],b=f[1];return l.createElement(r,null,l.createElement(a,{checked:g,onChange:function(P,C){b(C.checked)},inputProps:{className:"my-input"}},"Checkbox"))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-checkbox-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Checkbox, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Checkbox
        checked={checked}
        onChange={(e, data) => {
          setChecked(data.checked);
        }}
        inputProps={{
          className: 'my-input',
        }}
      >
        Checkbox
      </Checkbox>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-checkbox-demo-en-us-2":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=s.sent,a=o.Checkbox,r=o.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(!1),f=p()(h,2),g=f[0],b=f[1];return l.createElement(r,null,l.createElement(a,{checked:g,onChange:function(P,C){b(C.checked)},name:"myCheckbox",value:"tpp"},"Checkbox"))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-checkbox-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Checkbox, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Checkbox
        checked={checked}
        onChange={(e, data) => {
          setChecked(data.checked);
        }}
        name="myCheckbox"
        value="tpp"
      >
        Checkbox
      </Checkbox>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-checkbox-demo-en-us-3":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=s.sent,a=o.Checkbox,r=o.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(!1),f=p()(h,2),g=f[0],b=f[1],E=n(!1),P=p()(E,2),C=P[0],O=P[1],T=n(!1),B=p()(T,2),L=B[0],D=B[1],k=n(!1),$=p()(k,2),F=$[0],z=$[1];return l.createElement(r,null,l.createElement("div",{style:{width:"100px"}},l.createElement(a,{labelPlacement:"top",checked:g,onChange:function(V,j){var X=j.checked;b(X)}},"\u6587\u6848\u5728\u4E0A\u8FB9"),l.createElement(a,{labelPlacement:"right",checked:C,onChange:function(V,j){var X=j.checked;O(X)}},"\u6587\u6848\u5728\u53F3\u8FB9"),l.createElement(a,{labelPlacement:"bottom",checked:L,onChange:function(V,j){var X=j.checked;D(X)}},"\u6587\u6848\u5728\u4E0B\u8FB9"),l.createElement(a,{labelPlacement:"left",checked:F,onChange:function(V,j){var X=j.checked;z(X)}},"\u6587\u6848\u5728\u5DE6\u8FB9")))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-checkbox-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Checkbox, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  return (
    <Stack>
      <div style={{ width: '100px' }}>
        <Checkbox
          labelPlacement="top"
          checked={checked1}
          onChange={(e, { checked }) => {
            setChecked1(checked);
          }}
        >
          \u6587\u6848\u5728\u4E0A\u8FB9
        </Checkbox>
        <Checkbox
          labelPlacement="right"
          checked={checked2}
          onChange={(e, { checked }) => {
            setChecked2(checked);
          }}
        >
          \u6587\u6848\u5728\u53F3\u8FB9
        </Checkbox>
        <Checkbox
          labelPlacement="bottom"
          checked={checked3}
          onChange={(e, { checked }) => {
            setChecked3(checked);
          }}
        >
          \u6587\u6848\u5728\u4E0B\u8FB9
        </Checkbox>
        <Checkbox
          labelPlacement="left"
          checked={checked4}
          onChange={(e, { checked }) => {
            setChecked4(checked);
          }}
        >
          \u6587\u6848\u5728\u5DE6\u8FB9
        </Checkbox>
      </div>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-checkbox-demo-en-us-4":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d,s,m;return c()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=f.sent,a=o.default,r=o.useState,f.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=f.sent,l=t.Checkbox,n=t.Stack,f.next=12,e.e(9975).then(e.bind(e,29975));case 12:return d=f.sent,s=d.HeartFilledIcon,m=d.HeartOutlinedIcon,f.abrupt("return",{default:function(){var b=r(!1),E=p()(b,2),P=E[0],C=E[1];return a.createElement(n,null,a.createElement(l,{checked:P,onChange:function(T,B){C(B.checked)},icon:a.createElement(m,{htmlColor:"#ccc"}),checkedIcon:a.createElement(s,{color:"primary"})},"Checkbox"))}});case 16:case"end":return f.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-checkbox-demo-en-us-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Checkbox, Stack } from '@bifrostui/react';
import { HeartFilledIcon, HeartOutlinedIcon } from '@bifrostui/icons';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Checkbox
        checked={checked}
        onChange={(e, data) => {
          setChecked(data.checked);
        }}
        icon={<HeartOutlinedIcon htmlColor="#ccc" />}
        checkedIcon={<HeartFilledIcon color="primary" />}
      >
        Checkbox
      </Checkbox>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-checkbox-demo-en-us-5":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=s.sent,a=o.Checkbox,r=o.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(!1),f=p()(h,1),g=f[0];return l.createElement(r,null,l.createElement(a,{checked:g,disabled:!0},"Checkbox"))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-checkbox-demo-en-us-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Checkbox, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked] = useState(false);
  return (
    <Stack>
      <Checkbox checked={checked} disabled>
        Checkbox
      </Checkbox>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-checkbox-demo-en-us-6":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=m.sent,a=o.Checkbox,r=o.CheckboxGroup,t=o.Stack,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,d=l.useState,m.abrupt("return",{default:function(){var f=d([]),g=p()(f,2),b=g[0],E=g[1],P=function(O,T){console.log("handleGroupChange",O,T),E(T.value)};return n.createElement(t,null,n.createElement(r,{value:b,onChange:P},n.createElement(a,{value:"\u6C34\u95E8\u6865"},"\u6C34\u95E8\u6865"),n.createElement(a,{value:"\u6DD8\u7968\u7968"},"\u6DD8\u7968\u7968"),n.createElement(a,{value:"\u559C\u6D0B\u6D0B"},"\u559C\u6D0B\u6D0B")))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-checkbox-demo-en-us-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Checkbox, CheckboxGroup, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState([]);
  const handleGroupChange = (e, data) => {
    console.log('handleGroupChange', e, data);
    setValue(data.value);
  };
  return (
    <Stack>
      <CheckboxGroup value={value} onChange={handleGroupChange}>
        <Checkbox value="\u6C34\u95E8\u6865">\u6C34\u95E8\u6865</Checkbox>
        <Checkbox value="\u6DD8\u7968\u7968">\u6DD8\u7968\u7968</Checkbox>
        <Checkbox value="\u559C\u6D0B\u6D0B">\u559C\u6D0B\u6D0B</Checkbox>
      </CheckboxGroup>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-checkbox-demo-en-us-7":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d,s;return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=h.sent,a=o.Button,r=o.Checkbox,t=o.CheckboxGroup,l=o.Stack,h.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return n=h.sent,d=n.default,s=n.useState,h.abrupt("return",{default:function(){var g=s(["\u6C34\u95E8\u6865","\u6DD8\u7968\u7968","\u559C\u6D0B\u6D0B"]),b=p()(g,2),E=b[0],P=b[1],C=s(!0),O=p()(C,2),T=O[0],B=O[1];return d.createElement(l,null,d.createElement("div",{style:{width:"100px"}},d.createElement(a,{onClick:function(){var D=E.length?[]:["\u6C34\u95E8\u6865","\u6DD8\u7968\u7968","\u559C\u6D0B\u6D0B"];P(D)}},E.length?"Uncheck":"Check"," All"),d.createElement(t,{value:E},d.createElement(r,{value:"\u6C34\u95E8\u6865"},"\u6C34\u95E8\u6865"),d.createElement(r,{value:"\u6DD8\u7968\u7968"},"\u6DD8\u7968\u7968"),d.createElement(r,{value:"\u559C\u6D0B\u6D0B"},"\u559C\u6D0B\u6D0B"))),d.createElement("div",{style:{width:"100px"}},d.createElement(a,{onClick:function(){B(!T)}},T?"\u53D6\u6D88":"\u9009\u4E2D"),d.createElement(r,{checked:T},"\u6DD8\u7968\u7968")))}});case 13:case"end":return h.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-checkbox-demo-en-us-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Checkbox, CheckboxGroup, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(['\u6C34\u95E8\u6865', '\u6DD8\u7968\u7968', '\u559C\u6D0B\u6D0B']);
  const [checked, setChecked] = useState(true);
  return (
    <Stack>
      <div style={{ width: '100px' }}>
        <Button
          onClick={() => {
            const data = value.length ? [] : ['\u6C34\u95E8\u6865', '\u6DD8\u7968\u7968', '\u559C\u6D0B\u6D0B'];
            setValue(data);
          }}
        >
          {value.length ? 'Uncheck' : 'Check'} All
        </Button>
        <CheckboxGroup value={value}>
          <Checkbox value="\u6C34\u95E8\u6865">\u6C34\u95E8\u6865</Checkbox>
          <Checkbox value="\u6DD8\u7968\u7968">\u6DD8\u7968\u7968</Checkbox>
          <Checkbox value="\u559C\u6D0B\u6D0B">\u559C\u6D0B\u6D0B</Checkbox>
        </CheckboxGroup>
      </div>
      <div style={{ width: '100px' }}>
        <Button
          onClick={() => {
            setChecked(!checked);
          }}
        >
          {checked ? '\u53D6\u6D88' : '\u9009\u4E2D'}
        </Button>
        <Checkbox checked={checked}>\u6DD8\u7968\u7968</Checkbox>
      </div>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-checkbox-demo-en-us-8":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=s.sent,a=o.Checkbox,r=o.CheckboxGroup,t=o.Stack,s.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=s.sent,n=l.default,s.abrupt("return",{default:function(){return n.createElement(t,null,n.createElement("div",{style:{width:"100px"}},n.createElement("div",null,"CheckboxGroup\uFF1A"),n.createElement(r,{defaultValue:["\u6C34\u95E8\u6865","\u6DD8\u7968\u7968","\u559C\u6D0B\u6D0B"]},n.createElement(a,{value:"\u6C34\u95E8\u6865"},"\u6C34\u95E8\u6865"),n.createElement(a,{value:"\u6DD8\u7968\u7968"},"\u6DD8\u7968\u7968"),n.createElement(a,{value:"\u559C\u6D0B\u6D0B"},"\u559C\u6D0B\u6D0B"))),n.createElement("div",null,n.createElement("div",null,"Checkbox\uFF1A"),n.createElement(a,{defaultChecked:!0},"\u6DD8\u7968\u7968")))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-checkbox-demo-en-us-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Checkbox, CheckboxGroup, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <div style={{ width: '100px' }}>
        <div>CheckboxGroup\uFF1A</div>
        <CheckboxGroup defaultValue={['\u6C34\u95E8\u6865', '\u6DD8\u7968\u7968', '\u559C\u6D0B\u6D0B']}>
          <Checkbox value="\u6C34\u95E8\u6865">\u6C34\u95E8\u6865</Checkbox>
          <Checkbox value="\u6DD8\u7968\u7968">\u6DD8\u7968\u7968</Checkbox>
          <Checkbox value="\u559C\u6D0B\u6D0B">\u559C\u6D0B\u6D0B</Checkbox>
        </CheckboxGroup>
      </div>

      <div>
        <div>Checkbox\uFF1A</div>
        <Checkbox defaultChecked>\u6DD8\u7968\u7968</Checkbox>
      </div>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}}}},6292:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return x}});var M=e(90228),c=e.n(M),A=e(87999),p=e.n(A),y=e(75271),x={"packages-bui-core-src-city-selector-demo-en-us-0":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=n.sent,i=I.default,n.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=n.sent,a=o.CitySelector,r=[{code:"110100",name:"\u5317\u4EAC"},{code:"310100",name:"\u4E0A\u6D77"},{code:"440100",name:"\u5E7F\u5DDE"}],t=[{groupName:"A",cities:[{code:"610900",name:"\u5B89\u5EB7"},{code:"210300",name:"\u978D\u5C71"}]},{groupName:"B",cities:[{code:"652800",name:"\u5DF4\u97F3\u90ED\u695E"},{code:"511900",name:"\u5DF4\u4E2D"}]},{groupName:"C",cities:[{code:"130900",name:"\u6CA7\u5DDE"},{code:"220100",name:"\u957F\u6625"}]},{groupName:"D",cities:[{code:"532900",name:"\u5927\u7406"},{code:"210200",name:"\u5927\u8FDE"}]}],n.abrupt("return",{default:function(){var s={code:"110100",name:"\u5317\u4EAC"},m={code:"310100",name:"\u4E0A\u6D77"},h=function(b){console.log(b)},f=function(){console.log("onHide")};return i.createElement(a,{cities:t,onSelect:h,selectedCity:s,selectedCityGroupName:"\u5F53\u524D\u57CE\u5E02",currentCity:m,currentCityGroupName:"\u5B9A\u4F4D\u57CE\u5E02",hotCities:r,hotCitiesGroupName:"\u70ED\u95E8\u57CE\u5E02",onClose:f,style:{height:"500px"}})}});case 11:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-city-selector-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { CitySelector } from '@bifrostui/react';

const hotCities = [
  {
    code: '110100',
    name: '\u5317\u4EAC',
  },
  {
    code: '310100',
    name: '\u4E0A\u6D77',
  },
  {
    code: '440100',
    name: '\u5E7F\u5DDE',
  },
];

const cities = [
  {
    groupName: 'A',
    cities: [
      {
        code: '610900',
        name: '\u5B89\u5EB7',
      },
      {
        code: '210300',
        name: '\u978D\u5C71',
      },
    ],
  },
  {
    groupName: 'B',
    cities: [
      {
        code: '652800',
        name: '\u5DF4\u97F3\u90ED\u695E',
      },
      {
        code: '511900',
        name: '\u5DF4\u4E2D',
      },
    ],
  },
  {
    groupName: 'C',
    cities: [
      {
        code: '130900',
        name: '\u6CA7\u5DDE',
      },
      {
        code: '220100',
        name: '\u957F\u6625',
      },
    ],
  },
  {
    groupName: 'D',
    cities: [
      {
        code: '532900',
        name: '\u5927\u7406',
      },
      {
        code: '210200',
        name: '\u5927\u8FDE',
      },
    ],
  },
];

export default () => {
  const selectedCity = {
    code: '110100',
    name: '\u5317\u4EAC',
  };
  const currentCity = {
    code: '310100',
    name: '\u4E0A\u6D77',
  };
  const onSelect = (city) => {
    console.log(city);
  };

  const onHide = () => {
    console.log('onHide');
  };

  return (
    <CitySelector
      cities={cities}
      onSelect={onSelect}
      selectedCity={selectedCity}
      selectedCityGroupName="\u5F53\u524D\u57CE\u5E02"
      currentCity={currentCity}
      currentCityGroupName="\u5B9A\u4F4D\u57CE\u5E02"
      hotCities={hotCities}
      hotCitiesGroupName="\u70ED\u95E8\u57CE\u5E02"
      onClose={onHide}
      style={{ height: '500px' }}
    />
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-city-selector-demo-en-us-1":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=n.sent,i=I.default,n.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=n.sent,a=o.CitySelector,r=[{code:"110100",name:"\u5317\u4EAC"},{code:"310100",name:"\u4E0A\u6D77"},{code:"440100",name:"\u5E7F\u5DDE"}],t=[{groupName:"A",cities:[{code:"610900",name:"\u5B89\u5EB7"},{code:"210300",name:"\u978D\u5C71"}]},{groupName:"B",cities:[{code:"652800",name:"\u5DF4\u97F3\u90ED\u695E"},{code:"511900",name:"\u5DF4\u4E2D"}]},{groupName:"C",cities:[{code:"130900",name:"\u6CA7\u5DDE"},{code:"220100",name:"\u957F\u6625"}]},{groupName:"D",cities:[{code:"532900",name:"\u5927\u7406"},{code:"210200",name:"\u5927\u8FDE"}]}],n.abrupt("return",{default:function(){var s={code:"110100",name:"\u5317\u4EAC"},m={code:"310100",name:"\u4E0A\u6D77"},h=function(b){console.log(b)},f=function(){console.log("onHide")};return i.createElement(a,{cities:t,onSelect:h,selectedCity:s,selectedCityGroupName:"\u5F53\u524D\u57CE\u5E02",currentCity:m,currentCityGroupName:"\u5B9A\u4F4D\u57CE\u5E02",hotCities:r,hotCitiesGroupName:"\u70ED\u95E8\u57CE\u5E02",title:"\u9009\u62E9\u57CE\u5E02",disableIndex:!0,onClose:f,style:{height:"500px"}})}});case 11:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-city-selector-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { CitySelector } from '@bifrostui/react';

const hotCities = [
  {
    code: '110100',
    name: '\u5317\u4EAC',
  },
  {
    code: '310100',
    name: '\u4E0A\u6D77',
  },
  {
    code: '440100',
    name: '\u5E7F\u5DDE',
  },
];

const cities = [
  {
    groupName: 'A',
    cities: [
      {
        code: '610900',
        name: '\u5B89\u5EB7',
      },
      {
        code: '210300',
        name: '\u978D\u5C71',
      },
    ],
  },
  {
    groupName: 'B',
    cities: [
      {
        code: '652800',
        name: '\u5DF4\u97F3\u90ED\u695E',
      },
      {
        code: '511900',
        name: '\u5DF4\u4E2D',
      },
    ],
  },
  {
    groupName: 'C',
    cities: [
      {
        code: '130900',
        name: '\u6CA7\u5DDE',
      },
      {
        code: '220100',
        name: '\u957F\u6625',
      },
    ],
  },
  {
    groupName: 'D',
    cities: [
      {
        code: '532900',
        name: '\u5927\u7406',
      },
      {
        code: '210200',
        name: '\u5927\u8FDE',
      },
    ],
  },
];

export default () => {
  const selectedCity = {
    code: '110100',
    name: '\u5317\u4EAC',
  };
  const currentCity = {
    code: '310100',
    name: '\u4E0A\u6D77',
  };

  const onSelect = (city) => {
    console.log(city);
  };

  const onHide = () => {
    console.log('onHide');
  };

  return (
    <CitySelector
      cities={cities}
      onSelect={onSelect}
      selectedCity={selectedCity}
      selectedCityGroupName="\u5F53\u524D\u57CE\u5E02"
      currentCity={currentCity}
      currentCityGroupName="\u5B9A\u4F4D\u57CE\u5E02"
      hotCities={hotCities}
      hotCitiesGroupName="\u70ED\u95E8\u57CE\u5E02"
      title="\u9009\u62E9\u57CE\u5E02"
      disableIndex
      onClose={onHide}
      style={{ height: '500px' }}
    />
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-city-selector-demo-en-us-2":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=n.sent,i=I.default,n.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=n.sent,a=o.CitySelector,r=[{code:"110100",name:"\u5317\u4EAC"},{code:"310100",name:"\u4E0A\u6D77"},{code:"440100",name:"\u5E7F\u5DDE"}],t=[{groupName:"A",cities:[{code:"610900",name:"\u5B89\u5EB7"},{code:"210300",name:"\u978D\u5C71"}]},{groupName:"B",cities:[{code:"652800",name:"\u5DF4\u97F3\u90ED\u695E"},{code:"511900",name:"\u5DF4\u4E2D"}]},{groupName:"C",cities:[{code:"130900",name:"\u6CA7\u5DDE"},{code:"220100",name:"\u957F\u6625"}]},{groupName:"D",cities:[{code:"532900",name:"\u5927\u7406"},{code:"210200",name:"\u5927\u8FDE"}]}],n.abrupt("return",{default:function(){var s={code:"110100",name:"\u5317\u4EAC"},m={code:"310100",name:"\u4E0A\u6D77"},h=function(b){console.log(b)},f=function(){console.log("onHide")};return i.createElement(a,{cities:t,onSelect:h,selectedCity:s,selectedCityGroupName:"\u5F53\u524D\u57CE\u5E02",currentCity:m,currentCityGroupName:"\u5B9A\u4F4D\u57CE\u5E02",hotCities:r,hotCitiesGroupName:"\u70ED\u95E8\u57CE\u5E02",onClose:f,disableIndex:!0,style:{height:"500px"}})}});case 11:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-city-selector-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { CitySelector } from '@bifrostui/react';

const hotCities = [
  {
    code: '110100',
    name: '\u5317\u4EAC',
  },
  {
    code: '310100',
    name: '\u4E0A\u6D77',
  },
  {
    code: '440100',
    name: '\u5E7F\u5DDE',
  },
];

const cities = [
  {
    groupName: 'A',
    cities: [
      {
        code: '610900',
        name: '\u5B89\u5EB7',
      },
      {
        code: '210300',
        name: '\u978D\u5C71',
      },
    ],
  },
  {
    groupName: 'B',
    cities: [
      {
        code: '652800',
        name: '\u5DF4\u97F3\u90ED\u695E',
      },
      {
        code: '511900',
        name: '\u5DF4\u4E2D',
      },
    ],
  },
  {
    groupName: 'C',
    cities: [
      {
        code: '130900',
        name: '\u6CA7\u5DDE',
      },
      {
        code: '220100',
        name: '\u957F\u6625',
      },
    ],
  },
  {
    groupName: 'D',
    cities: [
      {
        code: '532900',
        name: '\u5927\u7406',
      },
      {
        code: '210200',
        name: '\u5927\u8FDE',
      },
    ],
  },
];

export default () => {
  const selectedCity = {
    code: '110100',
    name: '\u5317\u4EAC',
  };
  const currentCity = {
    code: '310100',
    name: '\u4E0A\u6D77',
  };

  const onSelect = (city) => {
    console.log(city);
  };

  const onHide = () => {
    console.log('onHide');
  };

  return (
    <CitySelector
      cities={cities}
      onSelect={onSelect}
      selectedCity={selectedCity}
      selectedCityGroupName="\u5F53\u524D\u57CE\u5E02"
      currentCity={currentCity}
      currentCityGroupName="\u5B9A\u4F4D\u57CE\u5E02"
      hotCities={hotCities}
      hotCitiesGroupName="\u70ED\u95E8\u57CE\u5E02"
      onClose={onHide}
      disableIndex
      style={{ height: '500px' }}
    />
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}}}},9155:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return I}});var M=e(90228),c=e.n(M),A=e(48305),p=e.n(A),y=e(87999),x=e.n(y),u=e(75271),I={"packages-bui-core-src-collapse-demo-en-us-0":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d,s;return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=h.sent,a=o.default,r=o.useState,h.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=h.sent,l=t.Collapse,n=t.Switch,d=t.Card,s=t.Stack,h.abrupt("return",{default:function(){var g=r(!1),b=p()(g,2),E=b[0],P=b[1];return a.createElement(s,{direction:"column",spacing:"8px",flexWrap:"wrap"},a.createElement(n,{checked:E,onChange:function(O,T){P(T==null?void 0:T.checked)}}),a.createElement(l,{timeout:1500,direction:"horizontal",in:E},a.createElement(d,{style:{background:"#CCCCCC",width:"100px",height:"100px"}})))}});case 13:case"end":return h.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-collapse-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Collapse, Switch, Card, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack direction="column" spacing="8px" flexWrap="wrap">
      <Switch
        checked={open}
        onChange={(e, data) => {
          setOpen(data?.checked);
        }}
      ></Switch>
      <Collapse timeout={1500} direction="horizontal" in={open}>
        <Card
          style={{
            background: '#CCCCCC',
            width: '100px',
            height: '100px',
          }}
        ></Card>
      </Collapse>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-collapse-demo-en-us-1":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d,s;return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=h.sent,a=o.default,r=o.useState,h.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=h.sent,l=t.Collapse,n=t.Switch,d=t.Card,s=t.Stack,h.abrupt("return",{default:function(){var g=r(!0),b=p()(g,2),E=b[0],P=b[1];return a.createElement(s,{direction:"column",spacing:"8px",flexWrap:"wrap"},a.createElement(n,{checked:E,onChange:function(O,T){P(T==null?void 0:T.checked)}}),a.createElement(l,{direction:"vertical",in:E,timeout:1500},a.createElement(d,{style:{background:"#CCCCCC",width:"100px",height:"100px"}})))}});case 13:case"end":return h.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-collapse-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Collapse, Switch, Card, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(true);
  return (
    <Stack direction="column" spacing="8px" flexWrap="wrap">
      <Switch
        checked={open}
        onChange={(e, data) => {
          setOpen(data?.checked);
        }}
      ></Switch>
      <Collapse direction="vertical" in={open} timeout={1500}>
        <Card
          style={{
            background: '#CCCCCC',
            width: '100px',
            height: '100px',
          }}
        ></Card>
      </Collapse>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-collapse-demo-en-us-2":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d,s;return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=h.sent,a=o.default,r=o.useState,h.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=h.sent,l=t.Collapse,n=t.Switch,d=t.Card,s=t.Stack,h.abrupt("return",{default:function(){var g=r(!0),b=p()(g,2),E=b[0],P=b[1];return a.createElement(s,{direction:"column",spacing:"8px",flexWrap:"wrap"},a.createElement(n,{checked:E,onChange:function(O,T){P(T==null?void 0:T.checked)}}),a.createElement(l,{collapsedSize:40,in:E,timeout:1500},a.createElement(d,{style:{background:"#CCCCCC",width:"100px",height:"100px"}})))}});case 13:case"end":return h.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-collapse-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Collapse, Switch, Card, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(true);
  return (
    <Stack direction="column" spacing="8px" flexWrap="wrap">
      <Switch
        checked={open}
        onChange={(e, data) => {
          setOpen(data?.checked);
        }}
      ></Switch>
      <Collapse collapsedSize={40} in={open} timeout={1500}>
        <Card
          style={{
            background: '#CCCCCC',
            width: '100px',
            height: '100px',
          }}
        ></Card>
      </Collapse>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}}}},50842:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return I}});var M=e(48305),c=e.n(M),A=e(90228),p=e.n(A),y=e(87999),x=e.n(y),u=e(75271),I={"collapsepanel-demo-en-us-0":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=n.sent,a=o.CollapsePanel,n.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){var s=`
    \u72D7\u662F\u4E00\u79CD\u5BB6\u517B\u52A8\u7269\u3002
    \u5B83\u4EE5\u5FE0\u8BDA\u548C\u5FE0\u8BDA\u800C\u95FB\u540D\uFF0C
    \u5728\u4E16\u754C\u5404\u5730\u7684\u8BB8\u591A\u5BB6\u5EAD\u4E2D\uFF0C\u5B83\u90FD\u662F\u53D7\u6B22\u8FCE\u7684\u5BA2\u4EBA\u3002
  `;return t.createElement(a,{defaultActiveKeys:["1"],items:[{key:"1",label:"\u8FD9\u662F\u9762\u677F\u6807\u98981",children:t.createElement("p",null,s)},{key:"2",label:"\u8FD9\u662F\u9762\u677F\u6807\u98982",children:t.createElement("p",null,s)},{key:"3",label:"\u8FD9\u662F\u9762\u677F\u6807\u98983",children:t.createElement("p",null,s)}]})}});case 9:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"collapsepanel-demo-en-us-0",refAtomIds:["CollapsePanel"],dependencies:{"index.tsx":{type:"FILE",value:`import { CollapsePanel } from '@bifrostui/react';
import React from 'react';

export default () => {
  const text = \`
    \u72D7\u662F\u4E00\u79CD\u5BB6\u517B\u52A8\u7269\u3002
    \u5B83\u4EE5\u5FE0\u8BDA\u548C\u5FE0\u8BDA\u800C\u95FB\u540D\uFF0C
    \u5728\u4E16\u754C\u5404\u5730\u7684\u8BB8\u591A\u5BB6\u5EAD\u4E2D\uFF0C\u5B83\u90FD\u662F\u53D7\u6B22\u8FCE\u7684\u5BA2\u4EBA\u3002
  \`;

  return (
    <CollapsePanel
      defaultActiveKeys={['1']}
      items={[
        {
          key: '1',
          label: '\u8FD9\u662F\u9762\u677F\u6807\u98981',
          children: <p>{text}</p>,
        },
        {
          key: '2',
          label: '\u8FD9\u662F\u9762\u677F\u6807\u98982',
          children: <p>{text}</p>,
        },
        {
          key: '3',
          label: '\u8FD9\u662F\u9762\u677F\u6807\u98983',
          children: <p>{text}</p>,
        },
      ]}
    />
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"collapsepanel-demo-en-us-1":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l;return p()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=d.sent,a=o.CollapsePanel,r=o.CollapsePanelItem,d.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=d.sent,l=t.default,d.abrupt("return",{default:function(){var m=`
    \u72D7\u662F\u4E00\u79CD\u5BB6\u517B\u52A8\u7269\u3002
    \u5B83\u4EE5\u5FE0\u8BDA\u548C\u5FE0\u8BDA\u800C\u95FB\u540D\uFF0C
    \u5728\u4E16\u754C\u5404\u5730\u7684\u8BB8\u591A\u5BB6\u5EAD\u4E2D\uFF0C\u5B83\u90FD\u662F\u53D7\u6B22\u8FCE\u7684\u5BA2\u4EBA\u3002
  `;return l.createElement(a,{defaultActiveKeys:["1"]},l.createElement(r,{key:"1",label:"\u8FD9\u662F\u9762\u677F\u6807\u98981"},m),l.createElement(r,{key:"2",label:"\u8FD9\u662F\u9762\u677F\u6807\u98982"},m),l.createElement(r,{key:"3",label:"\u8FD9\u662F\u9762\u677F\u6807\u98983"},m))}});case 10:case"end":return d.stop()}},i)})))),asset:{type:"BLOCK",id:"collapsepanel-demo-en-us-1",refAtomIds:["CollapsePanel"],dependencies:{"index.tsx":{type:"FILE",value:`import { CollapsePanel, CollapsePanelItem } from '@bifrostui/react';
import React from 'react';

export default () => {
  const text = \`
    \u72D7\u662F\u4E00\u79CD\u5BB6\u517B\u52A8\u7269\u3002
    \u5B83\u4EE5\u5FE0\u8BDA\u548C\u5FE0\u8BDA\u800C\u95FB\u540D\uFF0C
    \u5728\u4E16\u754C\u5404\u5730\u7684\u8BB8\u591A\u5BB6\u5EAD\u4E2D\uFF0C\u5B83\u90FD\u662F\u53D7\u6B22\u8FCE\u7684\u5BA2\u4EBA\u3002
  \`;

  return (
    <CollapsePanel defaultActiveKeys={['1']}>
      <CollapsePanelItem key="1" label="\u8FD9\u662F\u9762\u677F\u6807\u98981">
        {text}
      </CollapsePanelItem>
      <CollapsePanelItem key="2" label="\u8FD9\u662F\u9762\u677F\u6807\u98982">
        {text}
      </CollapsePanelItem>
      <CollapsePanelItem key="3" label="\u8FD9\u662F\u9762\u677F\u6807\u98983">
        {text}
      </CollapsePanelItem>
    </CollapsePanel>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"collapsepanel-demo-en-us-2":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=n.sent,a=o.CollapsePanel,n.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){var s=`
    \u72D7\u662F\u4E00\u79CD\u5BB6\u517B\u52A8\u7269\u3002
    \u5B83\u4EE5\u5FE0\u8BDA\u548C\u5FE0\u8BDA\u800C\u95FB\u540D\uFF0C
    \u5728\u4E16\u754C\u5404\u5730\u7684\u8BB8\u591A\u5BB6\u5EAD\u4E2D\uFF0C\u5B83\u90FD\u662F\u53D7\u6B22\u8FCE\u7684\u5BA2\u4EBA\u3002
  `;return t.createElement(a,{defaultActiveKeys:["1"],accordion:!0,items:[{key:"1",label:"\u8FD9\u662F\u9762\u677F\u6807\u98981",children:t.createElement("p",null,s)},{key:"2",label:"\u8FD9\u662F\u9762\u677F\u6807\u98982",children:t.createElement("p",null,s)},{key:"3",label:"\u8FD9\u662F\u9762\u677F\u6807\u98983",children:t.createElement("p",null,s)}]})}});case 9:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"collapsepanel-demo-en-us-2",refAtomIds:["CollapsePanel"],dependencies:{"index.tsx":{type:"FILE",value:`import { CollapsePanel } from '@bifrostui/react';
import React from 'react';

export default () => {
  const text = \`
    \u72D7\u662F\u4E00\u79CD\u5BB6\u517B\u52A8\u7269\u3002
    \u5B83\u4EE5\u5FE0\u8BDA\u548C\u5FE0\u8BDA\u800C\u95FB\u540D\uFF0C
    \u5728\u4E16\u754C\u5404\u5730\u7684\u8BB8\u591A\u5BB6\u5EAD\u4E2D\uFF0C\u5B83\u90FD\u662F\u53D7\u6B22\u8FCE\u7684\u5BA2\u4EBA\u3002
  \`;

  return (
    <CollapsePanel
      defaultActiveKeys={['1']}
      accordion
      items={[
        {
          key: '1',
          label: '\u8FD9\u662F\u9762\u677F\u6807\u98981',
          children: <p>{text}</p>,
        },
        {
          key: '2',
          label: '\u8FD9\u662F\u9762\u677F\u6807\u98982',
          children: <p>{text}</p>,
        },
        {
          key: '3',
          label: '\u8FD9\u662F\u9762\u677F\u6807\u98983',
          children: <p>{text}</p>,
        },
      ]}
    />
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"collapsepanel-demo-en-us-3":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l;return p()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=d.sent,a=o.CollapsePanel,d.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return r=d.sent,t=r.default,l=r.useState,d.abrupt("return",{default:function(){var m=l(["1"]),h=c()(m,2),f=h[0],g=h[1],b=`
    \u72D7\u662F\u4E00\u79CD\u5BB6\u517B\u52A8\u7269\u3002
    \u5B83\u4EE5\u5FE0\u8BDA\u548C\u5FE0\u8BDA\u800C\u95FB\u540D\uFF0C
    \u5728\u4E16\u754C\u5404\u5730\u7684\u8BB8\u591A\u5BB6\u5EAD\u4E2D\uFF0C\u5B83\u90FD\u662F\u53D7\u6B22\u8FCE\u7684\u5BA2\u4EBA\u3002
  `,E=function(C,O){g(O.activeKeys)};return t.createElement(a,{activeKeys:f,items:[{key:"1",label:"\u8FD9\u662F\u9762\u677F\u6807\u98981",children:t.createElement("p",null,b)},{key:"2",label:"\u8FD9\u662F\u9762\u677F\u6807\u98982",children:t.createElement("p",null,b)},{key:"3",label:"\u8FD9\u662F\u9762\u677F\u6807\u98983",children:t.createElement("p",null,b)}],onChange:E})}});case 10:case"end":return d.stop()}},i)})))),asset:{type:"BLOCK",id:"collapsepanel-demo-en-us-3",refAtomIds:["CollapsePanel"],dependencies:{"index.tsx":{type:"FILE",value:`import { CollapsePanel } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [activeKeys, setActiveKeys] = useState(['1']);
  const text = \`
    \u72D7\u662F\u4E00\u79CD\u5BB6\u517B\u52A8\u7269\u3002
    \u5B83\u4EE5\u5FE0\u8BDA\u548C\u5FE0\u8BDA\u800C\u95FB\u540D\uFF0C
    \u5728\u4E16\u754C\u5404\u5730\u7684\u8BB8\u591A\u5BB6\u5EAD\u4E2D\uFF0C\u5B83\u90FD\u662F\u53D7\u6B22\u8FCE\u7684\u5BA2\u4EBA\u3002
  \`;

  const handleChange = (event, params) => {
    setActiveKeys(params.activeKeys);
  };

  return (
    <CollapsePanel
      activeKeys={activeKeys}
      items={[
        {
          key: '1',
          label: '\u8FD9\u662F\u9762\u677F\u6807\u98981',
          children: <p>{text}</p>,
        },
        {
          key: '2',
          label: '\u8FD9\u662F\u9762\u677F\u6807\u98982',
          children: <p>{text}</p>,
        },
        {
          key: '3',
          label: '\u8FD9\u662F\u9762\u677F\u6807\u98983',
          children: <p>{text}</p>,
        },
      ]}
      onChange={handleChange}
    />
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"collapsepanel-demo-en-us-4":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l;return p()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=d.sent,a=o.CollapsePanel,d.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return r=d.sent,t=r.default,l=r.useState,d.abrupt("return",{default:function(){var m=l(["1"]),h=c()(m,2),f=h[0],g=h[1],b=`
    \u72D7\u662F\u4E00\u79CD\u5BB6\u517B\u52A8\u7269\u3002
    \u5B83\u4EE5\u5FE0\u8BDA\u548C\u5FE0\u8BDA\u800C\u95FB\u540D\uFF0C
    \u5728\u4E16\u754C\u5404\u5730\u7684\u8BB8\u591A\u5BB6\u5EAD\u4E2D\uFF0C\u5B83\u90FD\u662F\u53D7\u6B22\u8FCE\u7684\u5BA2\u4EBA\u3002
  `,E=function(C,O){g(O.activeKeys)};return t.createElement(a,{accordion:!0,activeKeys:f,items:[{key:"1",label:"\u8FD9\u662F\u9762\u677F\u6807\u98981",children:t.createElement("p",null,b)},{key:"2",label:"\u8FD9\u662F\u9762\u677F\u6807\u98982",children:t.createElement("p",null,b)},{key:"3",label:"\u8FD9\u662F\u9762\u677F\u6807\u98983",children:t.createElement("p",null,b)}],onChange:E})}});case 10:case"end":return d.stop()}},i)})))),asset:{type:"BLOCK",id:"collapsepanel-demo-en-us-4",refAtomIds:["CollapsePanel"],dependencies:{"index.tsx":{type:"FILE",value:`import { CollapsePanel } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [activeKeys, setActiveKeys] = useState(['1']);
  const text = \`
    \u72D7\u662F\u4E00\u79CD\u5BB6\u517B\u52A8\u7269\u3002
    \u5B83\u4EE5\u5FE0\u8BDA\u548C\u5FE0\u8BDA\u800C\u95FB\u540D\uFF0C
    \u5728\u4E16\u754C\u5404\u5730\u7684\u8BB8\u591A\u5BB6\u5EAD\u4E2D\uFF0C\u5B83\u90FD\u662F\u53D7\u6B22\u8FCE\u7684\u5BA2\u4EBA\u3002
  \`;

  const handleChange = (event, params) => {
    setActiveKeys(params.activeKeys);
  };

  return (
    <CollapsePanel
      accordion
      activeKeys={activeKeys}
      items={[
        {
          key: '1',
          label: '\u8FD9\u662F\u9762\u677F\u6807\u98981',
          children: <p>{text}</p>,
        },
        {
          key: '2',
          label: '\u8FD9\u662F\u9762\u677F\u6807\u98982',
          children: <p>{text}</p>,
        },
        {
          key: '3',
          label: '\u8FD9\u662F\u9762\u677F\u6807\u98983',
          children: <p>{text}</p>,
        },
      ]}
      onChange={handleChange}
    />
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"collapsepanel-demo-en-us-5":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=s.sent,a=o.CollapsePanel,s.next=6,e.e(9975).then(e.bind(e,29975));case 6:return r=s.sent,t=r.DoubleArrowDownTwoToneIcon,s.next=10,Promise.resolve().then(e.t.bind(e,75271,19));case 10:return l=s.sent,n=l.default,s.abrupt("return",{default:function(){var h=`
    \u72D7\u662F\u4E00\u79CD\u5BB6\u517B\u52A8\u7269\u3002
    \u5B83\u4EE5\u5FE0\u8BDA\u548C\u5FE0\u8BDA\u800C\u95FB\u540D\uFF0C
    \u5728\u4E16\u754C\u5404\u5730\u7684\u8BB8\u591A\u5BB6\u5EAD\u4E2D\uFF0C\u5B83\u90FD\u662F\u53D7\u6B22\u8FCE\u7684\u5BA2\u4EBA\u3002
  `;return n.createElement(a,{defaultActiveKeys:["1"],items:[{key:"1",label:"\u8FD9\u662F\u9762\u677F\u6807\u98981",children:n.createElement("p",null,h)},{key:"2",label:"\u8FD9\u662F\u9762\u677F\u6807\u98982",children:n.createElement("p",null,h)},{key:"3",label:"\u8FD9\u662F\u9762\u677F\u6807\u98983",children:n.createElement("p",null,h)}],arrowIcon:n.createElement(t,null)})}});case 13:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"collapsepanel-demo-en-us-5",refAtomIds:["CollapsePanel"],dependencies:{"index.tsx":{type:"FILE",value:`import { CollapsePanel } from '@bifrostui/react';
import { DoubleArrowDownTwoToneIcon } from '@bifrostui/icons';
import React from 'react';

export default () => {
  const text = \`
    \u72D7\u662F\u4E00\u79CD\u5BB6\u517B\u52A8\u7269\u3002
    \u5B83\u4EE5\u5FE0\u8BDA\u548C\u5FE0\u8BDA\u800C\u95FB\u540D\uFF0C
    \u5728\u4E16\u754C\u5404\u5730\u7684\u8BB8\u591A\u5BB6\u5EAD\u4E2D\uFF0C\u5B83\u90FD\u662F\u53D7\u6B22\u8FCE\u7684\u5BA2\u4EBA\u3002
  \`;

  return (
    <CollapsePanel
      defaultActiveKeys={['1']}
      items={[
        {
          key: '1',
          label: '\u8FD9\u662F\u9762\u677F\u6807\u98981',
          children: <p>{text}</p>,
        },
        {
          key: '2',
          label: '\u8FD9\u662F\u9762\u677F\u6807\u98982',
          children: <p>{text}</p>,
        },
        {
          key: '3',
          label: '\u8FD9\u662F\u9762\u677F\u6807\u98983',
          children: <p>{text}</p>,
        },
      ]}
      arrowIcon={<DoubleArrowDownTwoToneIcon />}
    />
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"collapsepanel-demo-en-us-6":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=m.sent,a=o.CollapsePanel,m.next=6,e.e(9975).then(e.bind(e,29975));case 6:return r=m.sent,t=r.DoubleArrowDownTwoToneIcon,l=r.DoubleArrowUpTwoToneIcon,m.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return n=m.sent,d=n.default,m.abrupt("return",{default:function(){var f=`
    \u72D7\u662F\u4E00\u79CD\u5BB6\u517B\u52A8\u7269\u3002
    \u5B83\u4EE5\u5FE0\u8BDA\u548C\u5FE0\u8BDA\u800C\u95FB\u540D\uFF0C
    \u5728\u4E16\u754C\u5404\u5730\u7684\u8BB8\u591A\u5BB6\u5EAD\u4E2D\uFF0C\u5B83\u90FD\u662F\u53D7\u6B22\u8FCE\u7684\u5BA2\u4EBA\u3002
  `,g=function(E){return E?d.createElement(l,null):d.createElement(t,null)};return d.createElement(a,{defaultActiveKeys:["1"],items:[{key:"1",label:"\u8FD9\u662F\u9762\u677F\u6807\u98981",children:d.createElement("p",null,f)},{key:"2",label:"\u8FD9\u662F\u9762\u677F\u6807\u98982",children:d.createElement("p",null,f)},{key:"3",label:"\u8FD9\u662F\u9762\u677F\u6807\u98983",children:d.createElement("p",null,f)}],arrowIcon:g})}});case 14:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"collapsepanel-demo-en-us-6",refAtomIds:["CollapsePanel"],dependencies:{"index.tsx":{type:"FILE",value:`import { CollapsePanel } from '@bifrostui/react';
import {
  DoubleArrowDownTwoToneIcon,
  DoubleArrowUpTwoToneIcon,
} from '@bifrostui/icons';
import React from 'react';

export default () => {
  const text = \`
    \u72D7\u662F\u4E00\u79CD\u5BB6\u517B\u52A8\u7269\u3002
    \u5B83\u4EE5\u5FE0\u8BDA\u548C\u5FE0\u8BDA\u800C\u95FB\u540D\uFF0C
    \u5728\u4E16\u754C\u5404\u5730\u7684\u8BB8\u591A\u5BB6\u5EAD\u4E2D\uFF0C\u5B83\u90FD\u662F\u53D7\u6B22\u8FCE\u7684\u5BA2\u4EBA\u3002
  \`;

  const renderArrowIcon = (active) => {
    if (active) {
      return <DoubleArrowUpTwoToneIcon />;
    }
    return <DoubleArrowDownTwoToneIcon />;
  };

  return (
    <CollapsePanel
      defaultActiveKeys={['1']}
      items={[
        {
          key: '1',
          label: '\u8FD9\u662F\u9762\u677F\u6807\u98981',
          children: <p>{text}</p>,
        },
        {
          key: '2',
          label: '\u8FD9\u662F\u9762\u677F\u6807\u98982',
          children: <p>{text}</p>,
        },
        {
          key: '3',
          label: '\u8FD9\u662F\u9762\u677F\u6807\u98983',
          children: <p>{text}</p>,
        },
      ]}
      arrowIcon={renderArrowIcon}
    />
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}}}},21619:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return x}});var M=e(90228),c=e.n(M),A=e(87999),p=e.n(A),y=e(75271),x={"packages-bui-core-src-countdown-demo-en-us-0":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=l.sent,i=I.Countdown,o=I.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,r=a.default,l.abrupt("return",{default:function(){return r.createElement(o,null,r.createElement(i,{remainingTime:24*60*60*1e3,format:"HH:mm:ss"}))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-countdown-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown remainingTime={24 * 60 * 60 * 1000} format="HH:mm:ss" />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-countdown-demo-en-us-1":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=l.sent,i=I.Countdown,o=I.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,r=a.default,l.abrupt("return",{default:function(){return r.createElement(o,null,r.createElement(i,{endTimestamp:4102415999e3,format:"YY:MM:DD:HH:mm:ss"}))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-countdown-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown endTimestamp={4102415999000} format="YY:MM:DD:HH:mm:ss" />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-countdown-demo-en-us-2":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=l.sent,i=I.Countdown,o=I.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,r=a.default,l.abrupt("return",{default:function(){return r.createElement(o,null,r.createElement(i,{serverTimestamp:Date.now()-10*1e3,endTimestamp:4102415999e3,format:"YY:MM:DD:HH:mm:ss"}))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-countdown-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown
        serverTimestamp={Date.now() - 10 * 1000}
        endTimestamp={4102415999000}
        format="YY:MM:DD:HH:mm:ss"
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-countdown-demo-en-us-3":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=l.sent,i=I.Countdown,o=I.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,r=a.default,l.abrupt("return",{default:function(){return r.createElement(o,null,r.createElement(i,{endTimestamp:4102415999e3,format:"YY\u5E74MM\u6708DD\u65E5HH\u65F6mm\u5206ss\u79D2SSS\u6BEB\u79D2"}))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-countdown-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown
        endTimestamp={4102415999000}
        format="YY\u5E74MM\u6708DD\u65E5HH\u65F6mm\u5206ss\u79D2SSS\u6BEB\u79D2"
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-countdown-demo-en-us-4":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=l.sent,i=I.Countdown,o=I.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,r=a.default,l.abrupt("return",{default:function(){return r.createElement(o,null,r.createElement(i,{endTimestamp:4102415999e3,format:"YY\u5E74MM\u6708DD\u65E5HH\u65F6mm\u5206ss\u79D2",unitStyle:{color:"var(--bui-color-primary)",fontWeight:600,fontSize:"16px"}}))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-countdown-demo-en-us-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown
        endTimestamp={4102415999000}
        format="YY\u5E74MM\u6708DD\u65E5HH\u65F6mm\u5206ss\u79D2"
        unitStyle={{
          color: 'var(--bui-color-primary)',
          fontWeight: 600,
          fontSize: '16px',
        }}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-countdown-demo-en-us-5":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=l.sent,i=I.Countdown,o=I.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,r=a.default,l.abrupt("return",{default:function(){return r.createElement(o,null,r.createElement(i,{remainingTime:24*60*60*1e3,valueStyle:[{color:"var(--bui-color-primary)",fontWeight:600,fontSize:"16px"},{color:"var(--bui-color-primary)",fontWeight:600,fontSize:"20px"}]}))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-countdown-demo-en-us-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown
        remainingTime={24 * 60 * 60 * 1000}
        valueStyle={[
          {
            color: 'var(--bui-color-primary)',
            fontWeight: 600,
            fontSize: '16px',
          },
          {
            color: 'var(--bui-color-primary)',
            fontWeight: 600,
            fontSize: '20px',
          },
        ]}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-countdown-demo-en-us-6":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=l.sent,i=I.Countdown,o=I.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,r=a.default,l.abrupt("return",{default:function(){return r.createElement(o,null,r.createElement(i,{remainingTime:24*60*60*1e3,format:"HH\u65F6mm\u5206ss\u79D2",timeSliceStyle:{backgroundColor:"var(--bui-color-bg-default)",padding:"4px",borderRadius:"4px",marginRight:"4px"}}))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-countdown-demo-en-us-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown
        remainingTime={24 * 60 * 60 * 1000}
        format="HH\u65F6mm\u5206ss\u79D2"
        timeSliceStyle={{
          backgroundColor: 'var(--bui-color-bg-default)',
          padding: '4px',
          borderRadius: '4px',
          marginRight: '4px',
        }}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-countdown-demo-en-us-7":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=l.sent,i=I.Countdown,o=I.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,r=a.default,l.abrupt("return",{default:function(){var d=function(){console.log("\u5012\u8BA1\u65F6\u5DF2\u7ED3\u675F\uFF01")};return r.createElement(o,null,r.createElement(i,{remainingTime:10*1e3,onFinish:d}))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-countdown-demo-en-us-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  const finish = () => {
    console.log('\u5012\u8BA1\u65F6\u5DF2\u7ED3\u675F\uFF01');
  };

  return (
    <Stack>
      <Countdown remainingTime={10 * 1000} onFinish={finish} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-countdown-demo-en-us-8":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=l.sent,i=I.Countdown,o=I.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,r=a.default,l.abrupt("return",{default:function(){var d=function(m){console.log("\u6B63\u5728\u5012\u8BA1\u65F6\uFF0C\u5F53\u524D\u6570\u636E",m)};return r.createElement(o,null,r.createElement(i,{remainingTime:10*1e3,onChange:d}))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-countdown-demo-en-us-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  const change = (data) => {
    console.log('\u6B63\u5728\u5012\u8BA1\u65F6\uFF0C\u5F53\u524D\u6570\u636E', data);
  };

  return (
    <Stack>
      <Countdown remainingTime={10 * 1000} onChange={change} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-countdown-demo-en-us-9":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=l.sent,i=I.Countdown,o=I.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,r=a.default,l.abrupt("return",{default:function(){return r.createElement(o,null,r.createElement(i,{remainingTime:24*60*60*1e3,renderContent:function(s){var m=s.hours,h=s.minutes,f=s.seconds;return r.createElement("span",null,"\u8DDD\u79BB\u5012\u8BA1\u65F6\u7ED3\u675F\u8FD8\u5269",m,"\u5C0F\u65F6",h,"\u5206\u949F",f,"\u79D2")}}))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-countdown-demo-en-us-9",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Countdown, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Countdown
        remainingTime={24 * 60 * 60 * 1000}
        renderContent={({ hours, minutes, seconds }) => {
          return (
            <span>
              \u8DDD\u79BB\u5012\u8BA1\u65F6\u7ED3\u675F\u8FD8\u5269{hours}\u5C0F\u65F6{minutes}\u5206\u949F{seconds}\u79D2
            </span>
          );
        }}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}}}},28809:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return I}});var M=e(48305),c=e.n(M),A=e(90228),p=e.n(A),y=e(87999),x=e.n(y),u=e(75271),I={"packages-bui-core-src-dialog-demo-en-us-0":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=m.sent,a=o.Stack,r=o.Button,t=o.Dialog,l=o.Toast,m.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return n=m.sent,d=n.default,m.abrupt("return",{default:function(){var f=function(){var g=x()(p()().mark(function b(){var E;return p()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,t({header:"\u6807\u9898",message:"\u8FD9\u662F\u63CF\u8FF0\u5185\u5BB9"});case 2:E=C.sent,l(E?{message:"\u70B9\u51FB\u4E86\u786E\u8BA4",position:"bottom"}:{message:"\u70B9\u51FB\u4E86\u53D6\u6D88",position:"bottom"});case 4:case"end":return C.stop()}},b)}));return function(){return g.apply(this,arguments)}}();return d.createElement(a,{direction:"row",spacing:"10px"},d.createElement(r,{onClick:function(){return t("\u662F\u5426\u63D0\u4EA4\u7533\u8BF7")}},"\u9ED8\u8BA4\u4E3Aconfirm"),d.createElement(r,{onClick:function(){return t.confirm({header:"\u6807\u9898",message:"\u8BE6\u7EC6\u63CF\u8FF0"})}},"confirm"),d.createElement(r,{onClick:f},"\u7B49\u5F85confirm\u5B8C\u6210"))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-dialog-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Button, Dialog, Toast } from '@bifrostui/react';
import React from 'react';

export default () => {
  const handleClickConfirm = async () => {
    const res = await Dialog({
      header: '\u6807\u9898',
      message: '\u8FD9\u662F\u63CF\u8FF0\u5185\u5BB9',
    });
    if (res) {
      Toast({ message: '\u70B9\u51FB\u4E86\u786E\u8BA4', position: 'bottom' });
    } else {
      Toast({ message: '\u70B9\u51FB\u4E86\u53D6\u6D88', position: 'bottom' });
    }
  };

  return (
    <Stack direction="row" spacing="10px">
      <Button onClick={() => Dialog('\u662F\u5426\u63D0\u4EA4\u7533\u8BF7')}>\u9ED8\u8BA4\u4E3Aconfirm</Button>
      <Button
        onClick={() =>
          Dialog.confirm({
            header: '\u6807\u9898',
            message: '\u8BE6\u7EC6\u63CF\u8FF0',
          })
        }
      >
        confirm
      </Button>
      <Button onClick={handleClickConfirm}>\u7B49\u5F85confirm\u5B8C\u6210</Button>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-dialog-demo-en-us-1":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=f.sent,a=o.Stack,r=o.Button,t=o.Dialog,l=o.Toast,n=o.useTheme,d=o.ThemeProvider,f.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return s=f.sent,m=s.default,f.abrupt("return",{default:function(){var b=n(),E=t.useDialog(),P=c()(E,2),C=P[0],O=P[1],T=function(){var B=x()(p()().mark(function L(){var D;return p()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return $.next=2,C({header:"\u6807\u9898",message:"\u8FD9\u662F\u63CF\u8FF0\u5185\u5BB9"});case 2:D=$.sent,l(D?{message:"\u70B9\u51FB\u4E86\u786E\u8BA4",position:"bottom"}:{message:"\u70B9\u51FB\u4E86\u53D6\u6D88",position:"bottom"});case 4:case"end":return $.stop()}},L)}));return function(){return B.apply(this,arguments)}}();return m.createElement(d,{locale:b.locale},O,m.createElement(a,{direction:"row",spacing:"10px"},m.createElement(r,{onClick:function(){return C("\u662F\u5426\u63D0\u4EA4\u7533\u8BF7")}},"\u9ED8\u8BA4\u4E3Aconfirm"),m.createElement(r,{onClick:function(){return C.confirm({header:"\u6807\u9898",message:"\u8BE6\u7EC6\u63CF\u8FF0"})}},"confirm"),m.createElement(r,{onClick:T},"\u7B49\u5F85confirm\u5B8C\u6210")))}});case 14:case"end":return f.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-dialog-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Stack,
  Button,
  Dialog,
  Toast,
  useTheme,
  ThemeProvider,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const theme = useTheme();
  const [dialog, contextHolder] = Dialog.useDialog();

  const handleClickConfirm = async () => {
    const res = await dialog({
      header: '\u6807\u9898',
      message: '\u8FD9\u662F\u63CF\u8FF0\u5185\u5BB9',
    });
    if (res) {
      Toast({ message: '\u70B9\u51FB\u4E86\u786E\u8BA4', position: 'bottom' });
    } else {
      Toast({ message: '\u70B9\u51FB\u4E86\u53D6\u6D88', position: 'bottom' });
    }
  };

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button onClick={() => dialog('\u662F\u5426\u63D0\u4EA4\u7533\u8BF7')}>\u9ED8\u8BA4\u4E3Aconfirm</Button>
        <Button
          onClick={() =>
            dialog.confirm({
              header: '\u6807\u9898',
              message: '\u8BE6\u7EC6\u63CF\u8FF0',
            })
          }
        >
          confirm
        </Button>
        <Button onClick={handleClickConfirm}>\u7B49\u5F85confirm\u5B8C\u6210</Button>
      </Stack>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-dialog-demo-en-us-2":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d,s,m,h;return p()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=g.sent,a=o.Stack,r=o.Button,t=o.Dialog,l=o.Toast,n=o.useTheme,d=o.ThemeProvider,g.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return s=g.sent,m=s.default,h=function(E){return new Promise(function(P){return setTimeout(P,E)})},g.abrupt("return",{default:function(){var E=n(),P=t.useDialog(),C=c()(P,2),O=C[0],T=C[1],B=function(){var D=x()(p()().mark(function k(){var $;return p()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,O.confirm({message:"\u662F\u5426\u63D0\u4EA4\u7533\u8BF7",onConfirm:function(){var U=x()(p()().mark(function j(){return p()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,h(3e3);case 2:l({icon:"success",content:"\u63D0\u4EA4\u6210\u529F",position:"bottom"});case 3:case"end":return Z.stop()}},j)}));function V(){return U.apply(this,arguments)}return V}()});case 2:$=z.sent,console.log("res",$);case 4:case"end":return z.stop()}},k)}));return function(){return D.apply(this,arguments)}}(),L=function(){var D=x()(p()().mark(function k(){var $;return p()().wrap(function(z){for(;;)switch(z.prev=z.next){case 0:return z.next=2,O.confirm({message:"\u662F\u5426\u63D0\u4EA4\u7533\u8BF7",onConfirm:function(){var U=x()(p()().mark(function j(){return p()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return Z.next=2,h(3e3);case 2:throw l({icon:"fail",content:"\u63D0\u4EA4\u5931\u8D25",position:"bottom"}),new Error;case 4:case"end":return Z.stop()}},j)}));function V(){return U.apply(this,arguments)}return V}()});case 2:$=z.sent,console.log("res",$);case 4:case"end":return z.stop()}},k)}));return function(){return D.apply(this,arguments)}}();return m.createElement(d,{locale:E.locale},T,m.createElement(a,{direction:"row",spacing:"10px"},m.createElement(r,{onClick:B},"\u5F02\u6B65\u64CD\u4F5C\u6267\u884C\u6210\u529F"),m.createElement(r,{onClick:L},"\u5F02\u6B65\u64CD\u4F5C\u6267\u884C\u5931\u8D25")))}});case 15:case"end":return g.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-dialog-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Stack,
  Button,
  Dialog,
  Toast,
  useTheme,
  ThemeProvider,
} from '@bifrostui/react';
import React from 'react';

const sleep = (time: number) =>
  // eslint-disable-next-line no-promise-executor-return
  new Promise((resolve) => setTimeout(resolve, time));

export default () => {
  const theme = useTheme();
  const [dialog, contextHolder] = Dialog.useDialog();

  const handleClickConfirm = async () => {
    const res = await dialog.confirm({
      message: '\u662F\u5426\u63D0\u4EA4\u7533\u8BF7',
      onConfirm: async () => {
        await sleep(3000);
        Toast({
          icon: 'success',
          content: '\u63D0\u4EA4\u6210\u529F',
          position: 'bottom',
        });
      },
    });
    console.log('res', res);
  };

  const handleClickConfirmError = async () => {
    const res = await dialog.confirm({
      message: '\u662F\u5426\u63D0\u4EA4\u7533\u8BF7',
      onConfirm: async () => {
        await sleep(3000);
        Toast({
          icon: 'fail',
          content: '\u63D0\u4EA4\u5931\u8D25',
          position: 'bottom',
        });
        throw new Error();
      },
    });
    console.log('res', res);
  };

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button onClick={handleClickConfirm}>\u5F02\u6B65\u64CD\u4F5C\u6267\u884C\u6210\u529F</Button>
        <Button onClick={handleClickConfirmError}>\u5F02\u6B65\u64CD\u4F5C\u6267\u884C\u5931\u8D25</Button>
      </Stack>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-dialog-demo-en-us-3":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d,s;return p()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=h.sent,a=o.Stack,r=o.Button,t=o.Dialog,l=o.useTheme,n=o.ThemeProvider,h.next=10,Promise.resolve().then(e.t.bind(e,75271,19));case 10:return d=h.sent,s=d.default,h.abrupt("return",{default:function(){var g=l(),b=t.useDialog(),E=c()(b,2),P=E[0],C=E[1];return s.createElement(n,{locale:g.locale},C,s.createElement(a,{direction:"row",spacing:"10px"},s.createElement(r,{onClick:function(){P.confirm({header:"\u81EA\u5B9A\u4E49\u6807\u9898\u548C\u6D88\u606F",message:s.createElement(s.Fragment,null,s.createElement("div",null,"\u8BF7\u53C2\u8003\u5982\u4E0B\u8BF4\u660E"),s.createElement("div",null,"\u8BE6\u60C5\u8BF4\u660E\u8BF7\u67E5\u9605",s.createElement("span",null,"\u64CD\u4F5C\u6307\u5F15")))})}},"\u81EA\u5B9A\u4E49\u6807\u9898\u548C\u6D88\u606F"),s.createElement(r,{onClick:function(){P.confirm({header:"\u81EA\u5B9A\u4E49\u5E95\u90E8\u6309\u94AE\u6587\u672C",confirmText:"\u5220\u9664"})}},"\u81EA\u5B9A\u4E49\u786E\u8BA4\u6309\u94AE\u6587\u672C")))}});case 13:case"end":return h.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-dialog-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Stack,
  Button,
  Dialog,
  useTheme,
  ThemeProvider,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const theme = useTheme();
  const [dialog, contextHolder] = Dialog.useDialog();

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            dialog.confirm({
              header: '\u81EA\u5B9A\u4E49\u6807\u9898\u548C\u6D88\u606F',
              message: (
                <>
                  <div>\u8BF7\u53C2\u8003\u5982\u4E0B\u8BF4\u660E</div>
                  <div>
                    \u8BE6\u60C5\u8BF4\u660E\u8BF7\u67E5\u9605<span>\u64CD\u4F5C\u6307\u5F15</span>
                  </div>
                </>
              ),
            });
          }}
        >
          \u81EA\u5B9A\u4E49\u6807\u9898\u548C\u6D88\u606F
        </Button>
        <Button
          onClick={() => {
            dialog.confirm({
              header: '\u81EA\u5B9A\u4E49\u5E95\u90E8\u6309\u94AE\u6587\u672C',
              confirmText: '\u5220\u9664',
            });
          }}
        >
          \u81EA\u5B9A\u4E49\u786E\u8BA4\u6309\u94AE\u6587\u672C
        </Button>
      </Stack>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-dialog-demo-en-us-4":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=f.sent,a=o.Stack,r=o.Button,t=o.Dialog,l=o.Toast,n=o.useTheme,d=o.ThemeProvider,f.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return s=f.sent,m=s.default,f.abrupt("return",{default:function(){var b=n(),E=t.useDialog(),P=c()(E,2),C=P[0],O=P[1],T=function(){var B=x()(p()().mark(function L(){var D;return p()().wrap(function($){for(;;)switch($.prev=$.next){case 0:return $.next=2,C.prompt({header:"\u6807\u9898",placeholder:"\u81EA\u5B9A\u4E49\u5360\u4F4D\u6587\u672C"});case 2:D=$.sent,D&&l("\u8F93\u5165\u503C\u4E3A".concat(D));case 4:case"end":return $.stop()}},L)}));return function(){return B.apply(this,arguments)}}();return m.createElement(d,{locale:b.locale},O,m.createElement(a,{direction:"row",spacing:"10px"},m.createElement(r,{onClick:T},"prompt"),m.createElement(r,{onClick:function(){C.prompt({header:"\u6807\u9898",placeholder:"\u81EA\u5B9A\u4E49\u5360\u4F4D\u6587\u672C",InputProps:{clearable:!0}})}},"\u4F20\u5165InputProps")))}});case 14:case"end":return f.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-dialog-demo-en-us-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Stack,
  Button,
  Dialog,
  Toast,
  useTheme,
  ThemeProvider,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const theme = useTheme();
  const [dialog, contextHolder] = Dialog.useDialog();
  const handleClickPrompt = async () => {
    const res = await dialog.prompt({
      header: '\u6807\u9898',
      placeholder: '\u81EA\u5B9A\u4E49\u5360\u4F4D\u6587\u672C',
    });
    res && Toast(\`\u8F93\u5165\u503C\u4E3A\${res}\`);
  };

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button onClick={handleClickPrompt}>prompt</Button>
        <Button
          onClick={() => {
            dialog.prompt({
              header: '\u6807\u9898',
              placeholder: '\u81EA\u5B9A\u4E49\u5360\u4F4D\u6587\u672C',
              InputProps: {
                clearable: true,
              },
            });
          }}
        >
          \u4F20\u5165InputProps
        </Button>
      </Stack>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}}}},88194:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return x}});var M=e(90228),c=e.n(M),A=e(87999),p=e.n(A),y=e(75271),x={"packages-bui-core-src-divider-demo-en-us-0":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=l.sent,i=I.Divider,o=I.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,r=a.default,l.abrupt("return",{default:function(){return r.createElement(o,{direction:"row",style:{height:"40px",fontSize:"16px"}},"\u5DE6\u8FB9",r.createElement(i,{style:{margin:"0 6px"}}),"\u53F3\u8FB9")}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-divider-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" style={{ height: '40px', fontSize: '16px' }}>
      \u5DE6\u8FB9
      <Divider style={{ margin: '0 6px' }} />
      \u53F3\u8FB9
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-divider-demo-en-us-1":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=l.sent,i=I.Divider,o=I.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,r=a.default,l.abrupt("return",{default:function(){return r.createElement(o,{direction:"row",style:{height:"40px",fontSize:"16px"}},"\u5DE6\u8FB9",r.createElement(i,{style:{margin:"0 6px"},dashed:!0}),"\u53F3\u8FB9")}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-divider-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" style={{ height: '40px', fontSize: '16px' }}>
      \u5DE6\u8FB9
      <Divider style={{ margin: '0 6px' }} dashed />
      \u53F3\u8FB9
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-divider-demo-en-us-2":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=l.sent,i=I.Divider,o=I.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,r=a.default,l.abrupt("return",{default:function(){return r.createElement(o,{direction:"row",style:{height:"40px",fontSize:"16px"}},"\u5DE6\u8FB9",r.createElement(i,{style:{margin:"0 6px"}}),"\u53F3\u8FB9")}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-divider-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" style={{ height: '40px', fontSize: '16px' }}>
      \u5DE6\u8FB9
      <Divider style={{ margin: '0 6px' }} />
      \u53F3\u8FB9
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-divider-demo-en-us-3":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=l.sent,i=I.Divider,o=I.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,r=a.default,l.abrupt("return",{default:function(){return r.createElement(o,{style:{fontSize:"16px"}},"\u4E0A\u8FB9",r.createElement(i,{direction:"horizontal"}),"\u4E0B\u8FB9")}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-divider-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ fontSize: '16px' }}>
      \u4E0A\u8FB9
      <Divider direction="horizontal" />
      \u4E0B\u8FB9
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-divider-demo-en-us-4":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=l.sent,i=I.Divider,o=I.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,r=a.default,l.abrupt("return",{default:function(){return r.createElement(o,{direction:"row",style:{height:"40px",fontSize:"16px"}},"\u5DE6\u8FB9",r.createElement(i,{size:"12px",style:{margin:"0 6px"}}),"\u53F3\u8FB9")}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-divider-demo-en-us-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" style={{ height: '40px', fontSize: '16px' }}>
      \u5DE6\u8FB9
      <Divider size="12px" style={{ margin: '0 6px' }} />
      \u53F3\u8FB9
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-divider-demo-en-us-5":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=l.sent,i=I.Divider,o=I.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,r=a.default,l.abrupt("return",{default:function(){return r.createElement(o,{style:{fontSize:"16px"}},"\u4E0A\u8FB9",r.createElement(i,{direction:"horizontal",size:"100px"}),"\u4E0B\u8FB9")}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-divider-demo-en-us-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ fontSize: '16px' }}>
      \u4E0A\u8FB9
      <Divider direction="horizontal" size="100px" />
      \u4E0B\u8FB9
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-divider-demo-en-us-6":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=l.sent,i=I.Divider,o=I.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,r=a.default,l.abrupt("return",{default:function(){return r.createElement(o,{style:{fontSize:"16px"}},"\u4E0A\u8FB9",r.createElement(i,{direction:"horizontal",size:"60px",style:{margin:"6px 0"}},"\u6211\u662F\u5206\u5272\u7EBF"),"\u4E0B\u8FB9")}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-divider-demo-en-us-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ fontSize: '16px' }}>
      \u4E0A\u8FB9
      <Divider direction="horizontal" size="60px" style={{ margin: '6px 0' }}>
        \u6211\u662F\u5206\u5272\u7EBF
      </Divider>
      \u4E0B\u8FB9
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-divider-demo-en-us-7":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=l.sent,i=I.Divider,o=I.Stack,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,r=a.default,l.abrupt("return",{default:function(){return r.createElement(o,{style:{fontSize:"16px"}},"\u4E0A\u8FB9",r.createElement(i,{direction:"horizontal",style:{borderBottomWidth:"2px"}}),"\u4E0B\u8FB9")}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-divider-demo-en-us-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ fontSize: '16px' }}>
      \u4E0A\u8FB9
      <Divider direction="horizontal" style={{ borderBottomWidth: '2px' }} />
      \u4E0B\u8FB9
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}}}},31429:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return I}});var M=e(90228),c=e.n(M),A=e(48305),p=e.n(A),y=e(87999),x=e.n(y),u=e(75271),I={"packages-bui-core-src-drawer-demo-en-us-0":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=m.sent,a=o.Button,r=o.Drawer,t=o.Stack,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,d=l.useState,m.abrupt("return",{default:function(){var f=d(!1),g=p()(f,2),b=g[0],E=g[1];return n.createElement(t,{direction:"row"},n.createElement(a,{onClick:function(){E(!0)}},"\u57FA\u7840\u7528\u6CD5"),n.createElement(r,{open:b,onClose:function(){E(!1)},contentProps:{style:{lineHeight:"20vh",textAlign:"center"}}},"\u62BD\u5C49\u6B63\u6587"))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-drawer-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Drawer, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack direction="row">
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        \u57FA\u7840\u7528\u6CD5
      </Button>
      <Drawer
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        contentProps={{ style: { lineHeight: '20vh', textAlign: 'center' } }}
      >
        \u62BD\u5C49\u6B63\u6587
      </Drawer>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-drawer-demo-en-us-1":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=m.sent,a=o.Button,r=o.Drawer,t=o.Stack,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,d=l.useState,m.abrupt("return",{default:function(){var f=d(""),g=p()(f,2),b=g[0],E=g[1];return n.createElement(n.Fragment,null,n.createElement(t,{direction:"row",spacing:"8px"},n.createElement(a,{onClick:function(){return E("bottom")}},"\u5E95\u90E8\u5F39\u51FA"),n.createElement(a,{onClick:function(){return E("top")}},"\u9876\u90E8\u5F39\u51FA"),n.createElement(a,{onClick:function(){return E("left")}},"\u5DE6\u4FA7\u5F39\u51FA"),n.createElement(a,{onClick:function(){return E("right")}},"\u53F3\u4FA7\u5F39\u51FA")),n.createElement(r,{anchor:"bottom",open:b==="bottom",onClose:function(){return E("")},contentProps:{style:{lineHeight:"20vh",textAlign:"center"}}},"\u5E95\u90E8\u5F39\u51FA"),n.createElement(r,{anchor:"top",open:b==="top",onClose:function(){return E("")}},n.createElement("div",{style:{lineHeight:"20vh",textAlign:"center"}},"\u9876\u90E8\u5F39\u51FA")),n.createElement(r,{anchor:"left",open:b==="left",onClose:function(){return E("")},contentProps:{style:{width:"50vw",textAlign:"center",paddingTop:"50vh"}}},"\u5DE6\u4FA7\u5F39\u51FA"),n.createElement(r,{anchor:"right",open:b==="right",onClose:function(){return E("")}},n.createElement(t,{style:{width:"50vw",height:"100%"}},"right")))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-drawer-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Drawer, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [openDirection, setOpenDirection] = useState('');
  return (
    <>
      <Stack direction="row" spacing="8px">
        <Button onClick={() => setOpenDirection('bottom')}>\u5E95\u90E8\u5F39\u51FA</Button>
        <Button onClick={() => setOpenDirection('top')}>\u9876\u90E8\u5F39\u51FA</Button>
        <Button onClick={() => setOpenDirection('left')}>\u5DE6\u4FA7\u5F39\u51FA</Button>
        <Button onClick={() => setOpenDirection('right')}>\u53F3\u4FA7\u5F39\u51FA</Button>
      </Stack>
      <Drawer
        anchor="bottom"
        open={openDirection === 'bottom'}
        onClose={() => setOpenDirection('')}
        contentProps={{ style: { lineHeight: '20vh', textAlign: 'center' } }}
      >
        \u5E95\u90E8\u5F39\u51FA
      </Drawer>
      <Drawer
        anchor="top"
        open={openDirection === 'top'}
        onClose={() => setOpenDirection('')}
      >
        <div style={{ lineHeight: '20vh', textAlign: 'center' }}>\u9876\u90E8\u5F39\u51FA</div>
      </Drawer>
      <Drawer
        anchor="left"
        open={openDirection === 'left'}
        onClose={() => setOpenDirection('')}
        contentProps={{
          style: { width: '50vw', textAlign: 'center', paddingTop: '50vh' },
        }}
      >
        \u5DE6\u4FA7\u5F39\u51FA
      </Drawer>
      <Drawer
        anchor="right"
        open={openDirection === 'right'}
        onClose={() => setOpenDirection('')}
      >
        <Stack style={{ width: '50vw', height: '100%' }}>right</Stack>
      </Drawer>
    </>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-drawer-demo-en-us-2":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=m.sent,a=o.Button,r=o.Drawer,t=o.Stack,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,d=l.useState,m.abrupt("return",{default:function(){var f=d(!1),g=p()(f,2),b=g[0],E=g[1];return n.createElement(t,{direction:"row"},n.createElement(a,{onClick:function(){return E(!0)}},"\u52A8\u6001\u6548\u679C\u5EF6\u65F6"),n.createElement(r,{transitionDuration:1e3,open:b,onClose:function(){return E(!1)}},n.createElement("div",{style:{lineHeight:"20vh",textAlign:"center"}},"\u52A8\u6001\u6548\u679C\u5EF6\u65F6")))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-drawer-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Drawer, Stack } from '@bifrostui/react';
import React, { useState } from 'react';
export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack direction="row">
      <Button onClick={() => setOpen(true)}>\u52A8\u6001\u6548\u679C\u5EF6\u65F6</Button>
      <Drawer
        transitionDuration={1000}
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={{ lineHeight: '20vh', textAlign: 'center' }}>
          \u52A8\u6001\u6548\u679C\u5EF6\u65F6
        </div>
      </Drawer>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-drawer-demo-en-us-3":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=m.sent,a=o.Button,r=o.Drawer,t=o.Stack,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,d=l.useState,m.abrupt("return",{default:function(){var f=d(!1),g=p()(f,2),b=g[0],E=g[1];return n.createElement(t,{id:"draw-container"},n.createElement(a,{onClick:function(){E(!0)}},"\u6307\u5B9A\u5BB9\u5668"),n.createElement(r,{container:document.getElementById("draw-container"),open:b,onClose:function(){E(!1)}},n.createElement("div",{className:"content",style:{lineHeight:"20vh",textAlign:"center"}},"\u6D6E\u5C42dom\u5728`draw-container`element\u4E2D\u6E32\u67D3")))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-drawer-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Drawer, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack id="draw-container">
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        \u6307\u5B9A\u5BB9\u5668
      </Button>
      <Drawer
        container={document.getElementById('draw-container')}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div
          className="content"
          style={{ lineHeight: '20vh', textAlign: 'center' }}
        >
          \u6D6E\u5C42dom\u5728\`draw-container\`element\u4E2D\u6E32\u67D3
        </div>
      </Drawer>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}}}},47153:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return I}});var M=e(90228),c=e.n(M),A=e(48305),p=e.n(A),y=e(87999),x=e.n(y),u=e(75271),I={"packages-bui-core-src-fade-demo-en-us-0":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d,s;return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=h.sent,a=o.Button,r=o.Fade,t=o.Stack,h.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=h.sent,n=l.default,d=l.useRef,s=l.useState,h.abrupt("return",{default:function(){var g=s(!0),b=p()(g,2),E=b[0],P=b[1],C=d();return n.createElement(t,null,n.createElement(a,{onClick:function(){P(function(T){return!T}),console.log(C)}},"\u70B9\u51FB\u6539\u53D8in"),n.createElement(r,{appear:!1,in:E,timeout:{enter:2e3,exit:1e3},className:"test-clsnm"},n.createElement("div",{ref:C},"\u6DE1\u5165\u6DE1\u51FAIn")))}});case 13:case"end":return h.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-fade-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Fade, Stack } from '@bifrostui/react';
import React, { useRef, useState } from 'react';

export default () => {
  const [open, setOpen] = useState(true);
  const ref = useRef();
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen((prev) => !prev);
          console.log(ref);
        }}
      >
        \u70B9\u51FB\u6539\u53D8in
      </Button>
      <Fade
        appear={false}
        in={open}
        timeout={{
          enter: 2000,
          exit: 1000,
        }}
        className="test-clsnm"
      >
        <div ref={ref}>\u6DE1\u5165\u6DE1\u51FAIn</div>
      </Fade>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-fade-demo-en-us-1":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=m.sent,a=o.Button,r=o.Fade,t=o.Stack,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,d=l.useState,m.abrupt("return",{default:function(){var f=d(!0),g=p()(f,2),b=g[0],E=g[1];return n.createElement(t,null,n.createElement(a,{onClick:function(){E(function(C){return!C})}},"\u70B9\u51FB\u6302\u8F7D/\u5378\u8F7D\u7EC4\u4EF6"),b&&n.createElement(r,{appear:!0,in:!0,timeout:1500},n.createElement("div",null,"\u6DE1\u5165\u6DE1\u51FAAppearTrue")))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-fade-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Fade, Stack } from '@bifrostui/react';
import React, { useRef, useState } from 'react';

export default () => {
  const [open, setOpen] = useState(true);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        \u70B9\u51FB\u6302\u8F7D/\u5378\u8F7D\u7EC4\u4EF6
      </Button>
      {open && (
        <Fade appear in timeout={1500}>
          <div>\u6DE1\u5165\u6DE1\u51FAAppearTrue</div>
        </Fade>
      )}
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-fade-demo-en-us-2":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=m.sent,a=o.Button,r=o.Fade,t=o.Stack,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,d=l.useState,m.abrupt("return",{default:function(){var f=d(!1),g=p()(f,2),b=g[0],E=g[1];return n.createElement(t,null,n.createElement(a,{onClick:function(){E(function(C){return!C})}},"\u70B9\u51FB\u6539\u53D8in"),n.createElement(r,{appear:!1,in:b,mountOnEnter:!0,timeout:{enter:2e3,exit:1e3}},n.createElement("div",null,"\u6DE1\u5165\u6DE1\u51FAmountOnEnter")),n.createElement(r,{appear:!1,in:b,unmountOnExit:!0,timeout:{enter:2e3,exit:1e3}},n.createElement("div",null,"\u6DE1\u5165\u6DE1\u51FAunmountOnExit")))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-fade-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Fade, Stack } from '@bifrostui/react';
import React, { useRef, useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        \u70B9\u51FB\u6539\u53D8in
      </Button>
      <Fade
        appear={false}
        in={open}
        mountOnEnter
        timeout={{
          enter: 2000,
          exit: 1000,
        }}
      >
        <div>\u6DE1\u5165\u6DE1\u51FAmountOnEnter</div>
      </Fade>
      <Fade
        appear={false}
        in={open}
        unmountOnExit
        timeout={{
          enter: 2000,
          exit: 1000,
        }}
      >
        <div>\u6DE1\u5165\u6DE1\u51FAunmountOnExit</div>
      </Fade>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}}}},97741:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return x}});var M=e(90228),c=e.n(M),A=e(87999),p=e.n(A),y=e(75271),x={"packages-bui-core-src-icon-button-demo-en-us-0":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t,l;return c()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=d.sent,i=I.default,d.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=d.sent,a=o.IconButton,r=o.Stack,d.next=11,e.e(9975).then(e.bind(e,29975));case 11:return t=d.sent,l=t.PhoneFilledIcon,d.abrupt("return",{default:function(){return i.createElement(r,{direction:"row",spacing:"8px"},i.createElement(a,null,i.createElement(l,null)),i.createElement(a,{variant:"outlined"},i.createElement(l,null)),i.createElement(a,{variant:"contained"},i.createElement(l,null)))}});case 14:case"end":return d.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-icon-button-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { IconButton, Stack } from '@bifrostui/react';
import { PhoneFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row" spacing="8px">
      <IconButton>
        <PhoneFilledIcon />
      </IconButton>
      <IconButton variant="outlined">
        <PhoneFilledIcon />
      </IconButton>
      <IconButton variant="contained">
        <PhoneFilledIcon />
      </IconButton>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-icon-button-demo-en-us-1":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t,l;return c()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=d.sent,i=I.default,d.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=d.sent,a=o.IconButton,r=o.Stack,d.next=11,e.e(9975).then(e.bind(e,29975));case 11:return t=d.sent,l=t.PhoneFilledIcon,d.abrupt("return",{default:function(){return i.createElement(r,{direction:"row",spacing:"8px"},i.createElement(a,{variant:"contained"},i.createElement(l,null)),i.createElement(a,{shape:"rounded",variant:"contained"},i.createElement(l,null)),i.createElement(a,{shape:"square",variant:"contained"},i.createElement(l,null)))}});case 14:case"end":return d.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-icon-button-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { IconButton, Stack } from '@bifrostui/react';
import { PhoneFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row" spacing="8px">
      <IconButton variant="contained">
        <PhoneFilledIcon />
      </IconButton>
      <IconButton shape="rounded" variant="contained">
        <PhoneFilledIcon />
      </IconButton>
      <IconButton shape="square" variant="contained">
        <PhoneFilledIcon />
      </IconButton>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-icon-button-demo-en-us-2":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t,l;return c()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=d.sent,i=I.default,d.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=d.sent,a=o.IconButton,r=o.Stack,d.next=11,e.e(9975).then(e.bind(e,29975));case 11:return t=d.sent,l=t.PhoneFilledIcon,d.abrupt("return",{default:function(){return i.createElement(r,{direction:"row",spacing:"8px"},i.createElement(a,{size:"small"},i.createElement(l,null)),i.createElement(a,null,i.createElement(l,null)),i.createElement(a,{size:"large"},i.createElement(l,null)))}});case 14:case"end":return d.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-icon-button-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { IconButton, Stack } from '@bifrostui/react';
import { PhoneFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row" spacing="8px">
      <IconButton size="small">
        <PhoneFilledIcon />
      </IconButton>
      <IconButton>
        <PhoneFilledIcon />
      </IconButton>
      <IconButton size="large">
        <PhoneFilledIcon />
      </IconButton>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-icon-button-demo-en-us-3":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t,l;return c()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=d.sent,i=I.default,d.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=d.sent,a=o.IconButton,r=o.Stack,d.next=11,e.e(9975).then(e.bind(e,29975));case 11:return t=d.sent,l=t.PhoneFilledIcon,d.abrupt("return",{default:function(){return i.createElement(r,{spacing:"10px"},i.createElement(r,{direction:"row",spacing:"8px"},i.createElement(a,{color:"primary"},i.createElement(l,null)),i.createElement(a,{color:"success"},i.createElement(l,null)),i.createElement(a,{color:"info"},i.createElement(l,null)),i.createElement(a,{color:"warning"},i.createElement(l,null)),i.createElement(a,{color:"danger"},i.createElement(l,null))),i.createElement(r,{direction:"row",spacing:"8px"},i.createElement(a,{color:"primary",variant:"contained"},i.createElement(l,null)),i.createElement(a,{color:"success",variant:"contained"},i.createElement(l,null)),i.createElement(a,{color:"info",variant:"contained"},i.createElement(l,null)),i.createElement(a,{color:"warning",variant:"contained"},i.createElement(l,null)),i.createElement(a,{color:"danger",variant:"contained"},i.createElement(l,null))))}});case 14:case"end":return d.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-icon-button-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { IconButton, Stack } from '@bifrostui/react';
import { PhoneFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack spacing="10px">
      <Stack direction="row" spacing="8px">
        <IconButton color="primary">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="success">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="info">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="warning">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="danger">
          <PhoneFilledIcon />
        </IconButton>
      </Stack>
      <Stack direction="row" spacing="8px">
        <IconButton color="primary" variant="contained">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="success" variant="contained">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="info" variant="contained">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="warning" variant="contained">
          <PhoneFilledIcon />
        </IconButton>
        <IconButton color="danger" variant="contained">
          <PhoneFilledIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-icon-button-demo-en-us-4":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t,l;return c()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=d.sent,i=I.default,d.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=d.sent,a=o.IconButton,r=o.Stack,d.next=11,e.e(9975).then(e.bind(e,29975));case 11:return t=d.sent,l=t.PhoneFilledIcon,d.abrupt("return",{default:function(){return i.createElement(r,{direction:"row",spacing:"8px"},i.createElement(a,{disabled:!0,color:"primary"},i.createElement(l,null)),i.createElement(a,{variant:"outlined",disabled:!0,color:"primary"},i.createElement(l,null)),i.createElement(a,{variant:"contained",disabled:!0,color:"primary"},i.createElement(l,null)))}});case 14:case"end":return d.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-icon-button-demo-en-us-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { IconButton, Stack } from '@bifrostui/react';
import { PhoneFilledIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row" spacing="8px">
      <IconButton disabled color="primary">
        <PhoneFilledIcon />
      </IconButton>
      <IconButton variant="outlined" disabled color="primary">
        <PhoneFilledIcon />
      </IconButton>
      <IconButton variant="contained" disabled color="primary">
        <PhoneFilledIcon />
      </IconButton>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}}}},48446:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return I}});var M=e(48305),c=e.n(M),A=e(90228),p=e.n(A),y=e(87999),x=e.n(y),u=e(75271),I={"image-demo-en-us-0":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=s.sent,a=o.default,s.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=s.sent,t=r.Image,l=r.Stack,n="https://gw.alicdn.com/i2/O1CN01D7yqW229UZMB5eh00_!!6000000008071-0-alipicbeacon.jpg",s.abrupt("return",{default:function(){return a.createElement(l,null,a.createElement(t,{width:100,height:100,src:n}))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"image-demo-en-us-0",refAtomIds:["Image"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Image, Stack } from '@bifrostui/react';

const src =
  'https://gw.alicdn.com/i2/O1CN01D7yqW229UZMB5eh00_!!6000000008071-0-alipicbeacon.jpg';

export default () => {
  return (
    <Stack>
      <Image width={100} height={100} src={src} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"image-demo-en-us-1":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=s.sent,a=o.default,s.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=s.sent,t=r.Image,l=r.Stack,n="https://gw.alicdn.com/i2/O1CN01D7yqW229UZMB5eh00_!!6000000008071-0-alipicbeacon.jpg",s.abrupt("return",{default:function(){return a.createElement(l,{direction:"row",spacing:"8px",flexWrap:"wrap"},a.createElement(t,{src:n,fit:"contain",alt:"contain",width:100,height:100}),a.createElement(t,{src:n,fit:"cover",alt:"cover",width:100,height:100}),a.createElement(t,{src:n,fit:"fill",alt:"fill",width:100,height:100}),a.createElement(t,{src:n,fit:"none",alt:"none",width:100,height:100}),a.createElement(t,{src:n,fit:"scale-down",alt:"scale-down",width:100,height:100}))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"image-demo-en-us-1",refAtomIds:["Image"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Image, Stack } from '@bifrostui/react';

const src =
  'https://gw.alicdn.com/i2/O1CN01D7yqW229UZMB5eh00_!!6000000008071-0-alipicbeacon.jpg';

export default () => {
  return (
    <Stack direction="row" spacing="8px" flexWrap="wrap">
      <Image src={src} fit="contain" alt="contain" width={100} height={100} />
      <Image src={src} fit="cover" alt="cover" width={100} height={100} />
      <Image src={src} fit="fill" alt="fill" width={100} height={100} />
      <Image src={src} fit="none" alt="none" width={100} height={100} />
      <Image
        src={src}
        fit="scale-down"
        alt="scale-down"
        width={100}
        height={100}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"image-demo-en-us-2":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=s.sent,a=o.default,s.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=s.sent,t=r.Image,l=r.Stack,n="https://gw.alicdn.com/i2/O1CN01D7yqW229UZMB5eh00_!!6000000008071-0-alipicbeacon.jpg",s.abrupt("return",{default:function(){return a.createElement(l,{direction:"row",spacing:"8px"},a.createElement(t,{src:n,fit:"cover",width:100,height:100,style:{borderRadius:4}}),a.createElement(t,{src:n,fit:"cover",width:100,height:100,style:{borderRadius:8}}),a.createElement(t,{src:n,fit:"cover",width:100,height:100,style:{borderRadius:32}}))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"image-demo-en-us-2",refAtomIds:["Image"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Image, Stack } from '@bifrostui/react';

const src =
  'https://gw.alicdn.com/i2/O1CN01D7yqW229UZMB5eh00_!!6000000008071-0-alipicbeacon.jpg';

export default () => {
  return (
    <Stack direction="row" spacing="8px">
      <Image
        src={src}
        fit="cover"
        width={100}
        height={100}
        style={{ borderRadius: 4 }}
      />
      <Image
        src={src}
        fit="cover"
        width={100}
        height={100}
        style={{ borderRadius: 8 }}
      />
      <Image
        src={src}
        fit="cover"
        width={100}
        height={100}
        style={{ borderRadius: 32 }}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"image-demo-en-us-3":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l;return p()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=d.sent,a=o.default,d.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=d.sent,t=r.Image,l=r.Stack,d.abrupt("return",{default:function(){return a.createElement(l,{direction:"row",spacing:"8px"},a.createElement(t,{src:"https://localhost:3000/failed",fit:"cover",width:100,height:100,style:{borderRadius:4},placeholder:!0}),a.createElement(t,{src:"https://localhost:3000/failed",fit:"cover",width:100,height:100,style:{borderRadius:4},fallback:a.createElement(a.Fragment,null,"MY FALLBACK")}))}});case 10:case"end":return d.stop()}},i)})))),asset:{type:"BLOCK",id:"image-demo-en-us-3",refAtomIds:["Image"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Image, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Stack direction="row" spacing="8px">
      <Image
        src="https://localhost:3000/failed"
        fit="cover"
        width={100}
        height={100}
        style={{ borderRadius: 4 }}
        placeholder={true}
      />
      <Image
        src="https://localhost:3000/failed"
        fit="cover"
        width={100}
        height={100}
        style={{ borderRadius: 4 }}
        fallback={<>MY FALLBACK</>}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"image-demo-en-us-4":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=m.sent,a=o.default,r=o.useState,m.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=m.sent,l=t.Image,n=t.Button,d=t.Stack,m.abrupt("return",{default:function(){var f=r(0),g=c()(f,2),b=g[0],E=g[1],P="https://gw.alicdn.com/i2/O1CN01D7yqW229UZMB5eh00_!!6000000008071-0-alipicbeacon.jpg?t=".concat(b);return a.createElement(a.Fragment,null,a.createElement(n,{onClick:function(){E(function(){return Math.random()})}},"\u91CD\u65B0\u52A0\u8F7D"),a.createElement(d,{direction:"row",spacing:"8px"},a.createElement(l,{width:100,height:100,src:P}),a.createElement(l,{width:100,height:100,src:P,placeholder:!0}),a.createElement(l,{width:100,height:100,src:P,placeholder:a.createElement("div",{style:{background:"red",width:"100%",height:"100%"}})})))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"image-demo-en-us-4",refAtomIds:["Image"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Image, Button, Stack } from '@bifrostui/react';

export default () => {
  const [random, setOpen] = useState(0);
  const src = \`https://gw.alicdn.com/i2/O1CN01D7yqW229UZMB5eh00_!!6000000008071-0-alipicbeacon.jpg?t=\${random}\`;
  return (
    <>
      <Button
        onClick={() => {
          setOpen(() => Math.random());
        }}
      >
        \u91CD\u65B0\u52A0\u8F7D
      </Button>
      {
        <Stack direction="row" spacing="8px">
          <Image width={100} height={100} src={src} />
          <Image width={100} height={100} src={src} placeholder={true} />
          <Image
            width={100}
            height={100}
            src={src}
            placeholder={
              <div
                style={{ background: 'red', width: '100%', height: '100%' }}
              />
            }
          />
        </Stack>
      }
    </>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}}}},67664:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return I}});var M=e(90228),c=e.n(M),A=e(48305),p=e.n(A),y=e(87999),x=e.n(y),u=e(75271),I={"packages-bui-core-src-input-demo-en-us-0":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l;return c()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=d.sent,a=o.Input,d.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return r=d.sent,t=r.default,l=r.useState,d.abrupt("return",{default:function(){var m=l(""),h=p()(m,2),f=h[0],g=h[1],b=function(P,C){g(C==null?void 0:C.value),console.log("change",C==null?void 0:C.value)};return t.createElement(a,{value:f,placeholder:"\u8BF7\u586B\u5199\u5185\u5BB9",onChange:b})}});case 10:case"end":return d.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-input-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Input } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');

  const handleChange = (e, data) => {
    setValue(data?.value);
    console.log('change', data?.value);
  };

  return (
    <Input value={value} placeholder="\u8BF7\u586B\u5199\u5185\u5BB9" onChange={handleChange} />
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-input-demo-en-us-1":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=m.sent,a=o.default,r=o.useState,m.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=m.sent,l=t.Input,m.next=11,e.e(9975).then(e.bind(e,29975));case 11:return n=m.sent,d=n.SearchOutlinedIcon,m.abrupt("return",{default:function(){var f=r(""),g=p()(f,2),b=g[0],E=g[1],P=function(O,T){E(T==null?void 0:T.value),console.log("change",T==null?void 0:T.value)};return a.createElement(l,{value:b,placeholder:"\u8BF7\u586B\u5199\u5185\u5BB9",startIcon:a.createElement(d,{htmlColor:"#959aa5"}),onChange:P})}});case 14:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-input-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Input } from '@bifrostui/react';
import { SearchOutlinedIcon } from '@bifrostui/icons';

export default () => {
  const [value, setValue] = useState('');

  const handleChange = (e, data) => {
    setValue(data?.value);
    console.log('change', data?.value);
  };
  return (
    <Input
      value={value}
      placeholder="\u8BF7\u586B\u5199\u5185\u5BB9"
      startIcon={<SearchOutlinedIcon htmlColor="#959aa5" />}
      onChange={handleChange}
    />
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-input-demo-en-us-2":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=m.sent,a=o.default,r=o.useState,m.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=m.sent,l=t.Input,m.next=11,e.e(9975).then(e.bind(e,29975));case 11:return n=m.sent,d=n.SearchOutlinedIcon,m.abrupt("return",{default:function(){var f=r(""),g=p()(f,2),b=g[0],E=g[1],P=function(O,T){E(T==null?void 0:T.value),console.log("change",T==null?void 0:T.value)};return a.createElement(l,{value:b,placeholder:"\u8BF7\u586B\u5199\u5185\u5BB9",endIcon:a.createElement(d,{htmlColor:"#959aa5"}),onChange:P})}});case 14:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-input-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Input } from '@bifrostui/react';
import { SearchOutlinedIcon } from '@bifrostui/icons';

export default () => {
  const [value, setValue] = useState('');

  const handleChange = (e, data) => {
    setValue(data?.value);
    console.log('change', data?.value);
  };
  return (
    <Input
      value={value}
      placeholder="\u8BF7\u586B\u5199\u5185\u5BB9"
      endIcon={<SearchOutlinedIcon htmlColor="#959aa5" />}
      onChange={handleChange}
    />
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-input-demo-en-us-3":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l;return c()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=d.sent,a=o.Input,d.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return r=d.sent,t=r.default,l=r.useState,d.abrupt("return",{default:function(){var m=l(""),h=p()(m,2),f=h[0],g=h[1],b=function(C,O){g(O==null?void 0:O.value),console.log("change",O==null?void 0:O.value)},E=function(C){console.log("clear:",C)};return t.createElement(t.Fragment,null,t.createElement(a,{value:f,clearable:!0,onClear:E,placeholder:"\u8BF7\u586B\u5199\u5185\u5BB9",onChange:b}),t.createElement("div",{style:{margin:"20px 0 10px"}},"\u975E\u53D7\u63A7\u4E5F\u4F1A\u6E05\u7A7A\u8F93\u5165\u6846\uFF1A"),t.createElement(a,{clearable:!0,defaultValue:"\u4F1A\u6E05\u7A7A\u5185\u5BB9"}))}});case 10:case"end":return d.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-input-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Input } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');

  const handleChange = (e, data) => {
    setValue(data?.value);
    console.log('change', data?.value);
  };

  const handleClear = (e) => {
    console.log('clear:', e);
  };

  return (
    <>
      <Input
        value={value}
        clearable
        onClear={handleClear}
        placeholder="\u8BF7\u586B\u5199\u5185\u5BB9"
        onChange={handleChange}
      />
      <div style={{ margin: '20px 0 10px' }}>\u975E\u53D7\u63A7\u4E5F\u4F1A\u6E05\u7A7A\u8F93\u5165\u6846\uFF1A</div>
      <Input clearable defaultValue="\u4F1A\u6E05\u7A7A\u5185\u5BB9" />
    </>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-input-demo-en-us-4":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=n.sent,a=o.Input,n.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){return t.createElement(a,{disabled:!0,placeholder:"\u8BF7\u586B\u5199\u5185\u5BB9"})}});case 9:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-input-demo-en-us-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Input } from '@bifrostui/react';
import React from 'react';

export default () => {
  return <Input disabled placeholder="\u8BF7\u586B\u5199\u5185\u5BB9" />;
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-input-demo-en-us-5":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=m.sent,a=o.Button,r=o.Input,m.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=m.sent,l=t.default,n=t.useRef,d=t.useState,m.abrupt("return",{default:function(){var f=d("0"),g=p()(f,2),b=g[0],E=g[1],P=d("100"),C=p()(P,2),O=C[0],T=C[1],B=n(null),L=function(){E(function(F){return"".concat(Number(F)+10)})},D=function(){T(function(F){return"".concat(Number(F)-10)})},k=function(){var F=B.current;F.value=Number(F.value)*2};return l.createElement("div",null,l.createElement("div",{style:{display:"flex",flexDirection:"column",marginBottom:"40px"}},"\u53D7\u63A7\u7EC4\u4EF6\uFF1A",l.createElement(a,{onClick:L},"\u6570\u91CF\u52A010"),l.createElement("br",null),l.createElement(r,{value:b,onChange:function(F,z){return E(z.value)}})),l.createElement("div",{style:{display:"flex",flexDirection:"column"}},"\u975E\u53D7\u63A7\u7EC4\u4EF6\uFF1A",l.createElement("br",null),l.createElement(a,{onClick:D},"\u6570\u91CF\u51CF10(\u64CD\u4F5CdefaultValue\u65E0\u6548)"),l.createElement("br",null),l.createElement(a,{onClick:k},"\u6570\u91CF\u4E582(\u901A\u8FC7DOM\u64CD\u4F5Cvalue\u6709\u6548)"),l.createElement("br",null),l.createElement(r,{inputRef:B,defaultValue:O})))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-input-demo-en-us-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Input } from '@bifrostui/react';
import React, { useRef, useState } from 'react';

export default () => {
  const [value, setValue] = useState('0');
  const [defaultValue, setDefaultValue] = useState('100');
  const reduceRef = useRef(null);

  const addTen = () => {
    setValue((prev) => \`\${Number(prev) + 10}\`);
  };

  const reduceTen = () => {
    setDefaultValue((prev) => \`\${Number(prev) - 10}\`);
  };

  const multiplyTwo = () => {
    const input = reduceRef.current;
    input.value = Number(input.value) * 2;
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '40px',
        }}
      >
        \u53D7\u63A7\u7EC4\u4EF6\uFF1A
        <Button onClick={addTen}>\u6570\u91CF\u52A010</Button>
        <br />
        <Input value={value} onChange={(e, data) => setValue(data.value)} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        \u975E\u53D7\u63A7\u7EC4\u4EF6\uFF1A
        <br />
        <Button onClick={reduceTen}>\u6570\u91CF\u51CF10(\u64CD\u4F5CdefaultValue\u65E0\u6548)</Button>
        <br />
        <Button onClick={multiplyTwo}>\u6570\u91CF\u4E582(\u901A\u8FC7DOM\u64CD\u4F5Cvalue\u6709\u6548)</Button>
        <br />
        <Input inputRef={reduceRef} defaultValue={defaultValue} />
      </div>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-input-demo-en-us-6":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l;return c()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=d.sent,a=o.Input,d.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return r=d.sent,t=r.default,l=r.useState,d.abrupt("return",{default:function(){var m=l(""),h=p()(m,2),f=h[0],g=h[1],b=function(P,C){g(C==null?void 0:C.value),console.log("change",C==null?void 0:C.value)};return t.createElement(a,{type:"number",placeholder:"number\u7C7B\u578B",value:f,onChange:b})}});case 10:case"end":return d.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-input-demo-en-us-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Input } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');

  const handleChange = (e, data) => {
    setValue(data?.value);
    console.log('change', data?.value);
  };
  return (
    <Input
      type="number"
      placeholder="number\u7C7B\u578B"
      value={value}
      onChange={handleChange}
    />
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}}}},74704:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return I}});var M=e(48305),c=e.n(M),A=e(90228),p=e.n(A),y=e(87999),x=e.n(y),u=e(75271),I={"packages-bui-core-src-list-demo-en-us-0":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=m.sent,a=o.List,r=o.ListItem,t=o.ListItemContent,l=o.Stack,m.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return n=m.sent,d=n.default,m.abrupt("return",{default:function(){return d.createElement(l,{style:{backgroundColor:"rgb(238, 238, 238)",padding:"20px 10px"}},d.createElement(l,{style:{width:"350px"}},d.createElement(a,{style:{width:"100%"}},d.createElement(r,{onClick:function(g){console.log(g)}},d.createElement(t,{primary:d.createElement("div",null,"\u56DE\u6536\u7AD9")})),d.createElement(r,{onClick:function(g){console.log(g)}},d.createElement(t,{primary:d.createElement("div",null,"\u8BBE\u7F6E"),secondary:d.createElement("div",null,"\u97F3\u91CF\u8BBE\u7F6E")})))))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-list-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
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
            <ListItemContent primary={<div>\u56DE\u6536\u7AD9</div>} />
          </ListItem>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent
              primary={<div>\u8BBE\u7F6E</div>}
              secondary={<div>\u97F3\u91CF\u8BBE\u7F6E</div>}
            />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-list-demo-en-us-1":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d,s,m,h,f,g,b,E;return p()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=C.sent,a=o.List,r=o.ListItem,t=o.ListItemContent,l=o.ListItemExtra,n=o.ListItemFooter,d=o.ListItemHeader,s=o.Stack,m=o.Switch,C.next=13,e.e(9975).then(e.bind(e,29975));case 13:return h=C.sent,f=h.PhoneFilledIcon,C.next=17,Promise.resolve().then(e.t.bind(e,75271,19));case 17:return g=C.sent,b=g.default,E=g.useState,C.abrupt("return",{default:function(){var T=E(!1),B=c()(T,2),L=B[0],D=B[1];return b.createElement(s,{style:{backgroundColor:"rgb(238, 238, 238)",padding:"20px"}},b.createElement(s,{style:{width:"350px"}},b.createElement(a,{style:{width:"100%"}},b.createElement(r,{onClick:function($){console.log($)}},b.createElement(d,null,b.createElement(f,null)),b.createElement(t,{primary:b.createElement("div",null,"\u98DE\u884C\u6A21\u5F0F")}),b.createElement(n,null,L?"\u5DF2\u5F00\u542F\u98DE\u884C\u6A21\u5F0F":""),b.createElement(l,{onClick:function($){D(!L)}},b.createElement(m,{color:"primary",checked:L}))))))}});case 21:case"end":return C.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-list-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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
            <ListItemContent primary={<div>\u98DE\u884C\u6A21\u5F0F</div>} />
            <ListItemFooter>{check ? '\u5DF2\u5F00\u542F\u98DE\u884C\u6A21\u5F0F' : ''}</ListItemFooter>
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-list-demo-en-us-2":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=f.sent,a=o.Alert,r=o.List,t=o.ListItem,l=o.ListItemContent,n=o.Stack,f.next=10,Promise.resolve().then(e.t.bind(e,75271,19));case 10:return d=f.sent,s=d.default,m=d.useState,f.abrupt("return",{default:function(){var b=m(!1),E=c()(b,2),P=E[0],C=E[1];return s.createElement(n,{style:{backgroundColor:"rgb(238, 238, 238)",padding:"20px"}},s.createElement(n,{style:{width:"350px"}},P&&s.createElement(a,null,"\u70B9\u51FB\u6E05\u9664\u56DE\u6536\u7AD9\u6210\u529F"),s.createElement(r,{style:{width:"100%"}},s.createElement(t,{disabled:!0,onClick:function(T){C(!0),setTimeout(function(){C(!1)},1e3)}},s.createElement(l,{primary:s.createElement("div",{onClick:function(){C(!0),setTimeout(function(){C(!1)},1e3)}},"\u56DE\u6536\u7AD9")})),s.createElement(t,{onClick:function(T){C(!0),setTimeout(function(){C(!1)},1e3)}},s.createElement(l,{primary:s.createElement("div",null,"\u8BBE\u7F6E"),secondary:s.createElement("div",null,"\u6E05\u9664\u56DE\u6536\u7AD9")})))))}});case 14:case"end":return f.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-list-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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
        {isOpen && <Alert>\u70B9\u51FB\u6E05\u9664\u56DE\u6536\u7AD9\u6210\u529F</Alert>}
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
                  \u56DE\u6536\u7AD9
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
              primary={<div>\u8BBE\u7F6E</div>}
              secondary={<div>\u6E05\u9664\u56DE\u6536\u7AD9</div>}
            />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-list-demo-en-us-3":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=m.sent,a=o.List,r=o.ListItem,t=o.ListItemContent,l=o.Stack,m.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return n=m.sent,d=n.default,m.abrupt("return",{default:function(){return d.createElement(l,{style:{backgroundColor:"rgb(238, 238, 238)",padding:"20px"}},d.createElement(l,{style:{width:"350px"}},d.createElement(a,{header:d.createElement("div",null,"\u7CFB\u7EDF"),subheader:d.createElement("div",null,"\u7CFB\u7EDF\u8BBE\u7F6E"),style:{width:"100%"}},d.createElement(r,{onClick:function(g){console.log(g)}},d.createElement(t,{primary:d.createElement("div",null,"\u4E3B\u9898\u8BBE\u7F6E")})),d.createElement(r,{onClick:function(g){console.log(g)}},d.createElement(t,{primary:d.createElement("div",null,"\u97F3\u91CF\u8BBE\u7F6E")})))))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-list-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}>
      <Stack style={{ width: '350px' }}>
        <List
          header={<div>\u7CFB\u7EDF</div>}
          subheader={<div>\u7CFB\u7EDF\u8BBE\u7F6E</div>}
          style={{ width: '100%' }}
        >
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary={<div>\u4E3B\u9898\u8BBE\u7F6E</div>} />
          </ListItem>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary={<div>\u97F3\u91CF\u8BBE\u7F6E</div>} />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-list-demo-en-us-4":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d,s,m,h,f;return p()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=b.sent,a=o.default,b.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=b.sent,t=r.List,l=r.ListItem,n=r.ListItemContent,d=r.ListItemHeader,s=r.Stack,b.next=14,e.e(9975).then(e.bind(e,29975));case 14:return m=b.sent,h=m.LocationFilledIcon,f=m.PhoneFilledIcon,b.abrupt("return",{default:function(){return a.createElement(s,{style:{backgroundColor:"rgb(238, 238, 238)",padding:"20px"}},a.createElement(s,{style:{width:"350px"}},a.createElement(t,{style:{width:"100%"}},a.createElement(l,{onClick:function(C){console.log(C)}},a.createElement(d,null,a.createElement(f,null)),a.createElement(n,null,"\u7535\u8BDD")),a.createElement(l,{onClick:function(C){console.log(C)}},a.createElement(d,null,a.createElement(h,null)),a.createElement(n,null,"\u4F4F\u5740")))))}});case 18:case"end":return b.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-list-demo-en-us-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
            <ListItemContent>\u7535\u8BDD</ListItemContent>
          </ListItem>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemHeader>
              <LocationFilledIcon />
            </ListItemHeader>
            <ListItemContent>\u4F4F\u5740</ListItemContent>
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-list-demo-en-us-5":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=m.sent,a=o.List,r=o.ListItem,t=o.ListItemContent,l=o.Stack,m.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return n=m.sent,d=n.default,m.abrupt("return",{default:function(){return d.createElement(l,{style:{backgroundColor:"rgb(238, 238, 238)",padding:"20px"}},d.createElement(l,{style:{width:"350px"}},d.createElement(a,{style:{width:"100%"}},d.createElement(r,{onClick:function(g){console.log(g)}},d.createElement(t,{primary:"\u8BBE\u7F6E",secondary:"\u7CFB\u7EDF\u8BBE\u7F6E"})))))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-list-demo-en-us-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
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
            <ListItemContent primary="\u8BBE\u7F6E" secondary="\u7CFB\u7EDF\u8BBE\u7F6E" />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-list-demo-en-us-6":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=f.sent,a=o.Avatar,r=o.List,t=o.ListItem,l=o.ListItemContent,n=o.ListItemFooter,d=o.Stack,f.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return s=f.sent,m=s.default,f.abrupt("return",{default:function(){return m.createElement(d,{style:{backgroundColor:"rgb(238, 238, 238)",padding:"20px"}},m.createElement(d,{style:{width:"350px"}},m.createElement(r,{style:{width:"100%"}},m.createElement(t,{onClick:function(E){console.log(E)}},m.createElement(l,null,"\u5934\u50CF"),m.createElement(n,null,m.createElement(a,{src:"https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png"}))))))}});case 14:case"end":return f.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-list-demo-en-us-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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
            <ListItemContent>\u5934\u50CF</ListItemContent>
            <ListItemFooter>
              <Avatar src="https://gw.alicdn.com/tfs/TB1Q2zRXuL2gK0jSZFmXXc7iXXa-120-120.png" />
            </ListItemFooter>
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-list-demo-en-us-7":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d,s,m,h;return p()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=g.sent,a=o.List,r=o.ListItem,t=o.ListItemContent,l=o.ListItemExtra,n=o.Stack,d=o.Switch,g.next=11,Promise.resolve().then(e.t.bind(e,75271,19));case 11:return s=g.sent,m=s.default,h=s.useState,g.abrupt("return",{default:function(){var E=h(!1),P=c()(E,2),C=P[0],O=P[1];return m.createElement(n,{style:{backgroundColor:"rgb(238, 238, 238)",padding:"20px"}},m.createElement(n,{style:{width:"350px"}},m.createElement(a,{style:{width:"100%"}},m.createElement(r,null,m.createElement(t,{primary:m.createElement("div",null,"\u5728\u4F18\u9177\u5C55\u793A\u60F3\u770B\u8BB0\u5F55"),secondary:m.createElement("div",null,"\u5F71\u7247\u53EF\u5728\u7EBF\u64AD\u653E\u65F6\u4F1A\u901A\u77E5\u63D0\u9192\u4F60")}),m.createElement(l,{onClick:function(B){O(!C)}},m.createElement(d,{color:"primary",checked:C}))))))}});case 15:case"end":return g.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-list-demo-en-us-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
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
              primary={<div>\u5728\u4F18\u9177\u5C55\u793A\u60F3\u770B\u8BB0\u5F55</div>}
              secondary={<div>\u5F71\u7247\u53EF\u5728\u7EBF\u64AD\u653E\u65F6\u4F1A\u901A\u77E5\u63D0\u9192\u4F60</div>}
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
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-list-demo-en-us-8":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=m.sent,a=o.List,r=o.ListItem,t=o.ListItemContent,l=o.Stack,m.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return n=m.sent,d=n.default,m.abrupt("return",{default:function(){return d.createElement(l,{style:{backgroundColor:"rgb(238, 238, 238)",padding:"20px"}},d.createElement(l,{style:{width:"350px"}},d.createElement(a,{style:{width:"100%"}},d.createElement(r,{onClick:function(g){console.log(g)}},d.createElement(t,{primary:"\u84DD\u7259\u548C\u8BBE\u5907\u8FDE\u63A5",secondary:"NFC\u3001\u6295\u5C04\u5C4F\u5E55\u3001\u89E6\u78B0\u4ED8\u6B3E"})),d.createElement(r,{onClick:function(g){console.log(g)}},d.createElement(t,{primary:"\u663E\u793A",secondary:"\u72B6\u6001\u680F\u3001\u606F\u5C4F\u663E\u793A"})))))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-list-demo-en-us-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
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
              primary="\u84DD\u7259\u548C\u8BBE\u5907\u8FDE\u63A5"
              secondary="NFC\u3001\u6295\u5C04\u5C4F\u5E55\u3001\u89E6\u78B0\u4ED8\u6B3E"
            />
          </ListItem>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary="\u663E\u793A" secondary="\u72B6\u6001\u680F\u3001\u606F\u5C4F\u663E\u793A" />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-list-demo-en-us-9":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=m.sent,a=o.List,r=o.ListItem,t=o.ListItemContent,l=o.Stack,m.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return n=m.sent,d=n.default,m.abrupt("return",{default:function(){return d.createElement(l,{style:{backgroundColor:"rgb(238, 238, 238)",padding:"20px"}},d.createElement(l,{style:{width:"350px"}},d.createElement(a,{hideDivider:!0,style:{width:"100%"}},d.createElement(r,{onClick:function(g){console.log(g)}},d.createElement(t,{primary:"\u84DD\u7259\u548C\u8BBE\u5907\u8FDE\u63A5",secondary:"NFC\u3001\u6295\u5C04\u5C4F\u5E55\u3001\u89E6\u78B0\u4ED8\u6B3E"})),d.createElement(r,{onClick:function(g){console.log(g)}},d.createElement(t,{primary:"\u663E\u793A",secondary:"\u72B6\u6001\u680F\u3001\u606F\u5C4F\u663E\u793A"})))))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-list-demo-en-us-9",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
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
              primary="\u84DD\u7259\u548C\u8BBE\u5907\u8FDE\u63A5"
              secondary="NFC\u3001\u6295\u5C04\u5C4F\u5E55\u3001\u89E6\u78B0\u4ED8\u6B3E"
            />
          </ListItem>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary="\u663E\u793A" secondary="\u72B6\u6001\u680F\u3001\u606F\u5C4F\u663E\u793A" />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-list-demo-en-us-10":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=m.sent,a=o.List,r=o.ListItem,t=o.ListItemContent,l=o.Stack,m.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return n=m.sent,d=n.default,m.abrupt("return",{default:function(){return d.createElement(l,{style:{backgroundColor:"rgb(238, 238, 238)",padding:"20px"},spacing:"20px"},d.createElement(l,{style:{width:"350px"}},d.createElement("div",null," \u9ED8\u8BA4\u5927\u5C0F\uFF08medium\uFF09:"),d.createElement(a,{style:{width:"100%"}},d.createElement(r,{onClick:function(g){console.log(g)}},d.createElement(t,{primary:d.createElement("div",null,"\u7CFB\u7EDF")}))),d.createElement("div",null,"\u5C0F\u4E00\u53F7\uFF08small\uFF09\uFF1A"),d.createElement(a,{size:"small",style:{width:"100%"}},d.createElement(r,{onClick:function(g){console.log(g)}},d.createElement(t,{primary:d.createElement("div",null,"\u7CFB\u7EDF")}))),d.createElement("div",null,"\u5927\u4E00\u53F7\uFF08large\uFF09\uFF1A"),d.createElement(a,{size:"large",style:{width:"100%"}},d.createElement(r,{onClick:function(g){console.log(g)}},d.createElement(t,{primary:d.createElement("div",null,"\u7CFB\u7EDF")})))))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-list-demo-en-us-10",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { List, ListItem, ListItemContent, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack
      style={{ backgroundColor: 'rgb(238, 238, 238)', padding: '20px' }}
      spacing="20px"
    >
      <Stack style={{ width: '350px' }}>
        <div> \u9ED8\u8BA4\u5927\u5C0F\uFF08medium\uFF09:</div>
        <List style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary={<div>\u7CFB\u7EDF</div>} />
          </ListItem>
        </List>
        <div>\u5C0F\u4E00\u53F7\uFF08small\uFF09\uFF1A</div>
        <List size="small" style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary={<div>\u7CFB\u7EDF</div>} />
          </ListItem>
        </List>
        <div>\u5927\u4E00\u53F7\uFF08large\uFF09\uFF1A</div>
        <List size="large" style={{ width: '100%' }}>
          <ListItem
            onClick={(e) => {
              console.log(e);
            }}
          >
            <ListItemContent primary={<div>\u7CFB\u7EDF</div>} />
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}}}},4958:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return x}});var M=e(90228),c=e.n(M),A=e(87999),p=e.n(A),y=e(75271),x={"packages-bui-core-src-loading-demo-en-us-0":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=l.sent,i=I.default,l.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=l.sent,a=o.Stack,r=o.Loading,l.abrupt("return",{default:function(){return i.createElement(a,null,i.createElement(r,null))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-loading-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, Loading } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Loading />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-loading-demo-en-us-1":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=l.sent,i=I.default,l.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=l.sent,a=o.Stack,r=o.Loading,l.abrupt("return",{default:function(){return i.createElement(a,null,i.createElement(r,null,"\u52A0\u8F7D\u4E2D..."))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-loading-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, Loading } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Loading>\u52A0\u8F7D\u4E2D...</Loading>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-loading-demo-en-us-2":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=l.sent,i=I.default,l.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=l.sent,a=o.Stack,r=o.Loading,l.abrupt("return",{default:function(){return i.createElement(a,null,i.createElement(r,{direction:"horizontal"},"\u52A0\u8F7D\u4E2D..."))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-loading-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, Loading } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Loading direction="horizontal">\u52A0\u8F7D\u4E2D...</Loading>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-loading-demo-en-us-3":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=l.sent,i=I.default,l.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=l.sent,a=o.Stack,r=o.Loading,l.abrupt("return",{default:function(){return i.createElement(a,null,i.createElement(r,{IconProps:{htmlColor:"#ff335c"}},"\u52A0\u8F7D\u4E2D..."))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-loading-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, Loading } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Loading IconProps={{ htmlColor: '#ff335c' }}>\u52A0\u8F7D\u4E2D...</Loading>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}}}},38535:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return I}});var M=e(90228),c=e.n(M),A=e(48305),p=e.n(A),y=e(87999),x=e.n(y),u=e(75271),I={"packages-bui-core-src-modal-demo-en-us-0":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=m.sent,a=o.Button,r=o.Modal,t=o.Stack,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,d=l.useState,m.abrupt("return",{default:function(){var f=d(!1),g=p()(f,2),b=g[0],E=g[1];return n.createElement(t,null,n.createElement(a,{onClick:function(){E(!0)}},"\u6253\u5F00\u5F39\u7A97"),n.createElement(r,{open:b,onClose:function(){E(!1)},style:{display:"flex",alignItems:"center",justifyContent:"center"}},n.createElement("div",{style:{width:"80%",height:"300px",padding:"16px",background:"var(--bui-color-bg-view)",borderRadius:"6px",overflowY:"auto"}},n.createElement("div",{style:{textAlign:"center"}},"\u6D4B\u8BD5\u5F39\u7A97"))))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-modal-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Modal, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        \u6253\u5F00\u5F39\u7A97
      </Button>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '80%',
            height: '300px',
            padding: '16px',
            background: 'var(--bui-color-bg-view)',
            borderRadius: '6px',
            overflowY: 'auto',
          }}
        >
          <div style={{ textAlign: 'center' }}>\u6D4B\u8BD5\u5F39\u7A97</div>
        </div>
      </Modal>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-modal-demo-en-us-1":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=m.sent,a=o.Button,r=o.Modal,t=o.Stack,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,d=l.useState,m.abrupt("return",{default:function(){var f=d(!1),g=p()(f,2),b=g[0],E=g[1],P=d(!1),C=p()(P,2),O=C[0],T=C[1];return n.createElement(t,null,n.createElement(a,{onClick:function(){E(!0)}},"\u6253\u5F00\u65E0\u906E\u7F69\u7684\u5F39\u7A97"),n.createElement(a,{onClick:function(){T(!0)}},"\u6253\u5F00\u9690\u85CF\u906E\u7F69\u7684\u5F39\u7A97"),n.createElement(r,{open:b,onClose:function(){E(!1)},hideBackdrop:!0,style:{display:"flex",alignItems:"center",justifyContent:"center"}},n.createElement("div",{style:{width:"80%",height:"300px",padding:"16px",background:"var(--bui-color-bg-view)",borderRadius:"6px",overflowY:"auto"},onClick:function(){return E(!1)}},n.createElement("div",{style:{textAlign:"center"}},"\u65E0\u906E\u7F69\u7684\u5F39\u7A97\uFF08\u9700\u81EA\u884C\u5B9E\u73B0\u70B9\u51FB\u5173\u95ED\uFF09"))),n.createElement(r,{open:O,onClose:function(){T(!1)},style:{display:"flex",alignItems:"center",justifyContent:"center"},BackdropProps:{invisible:!0}},n.createElement("div",{style:{width:"80%",height:"300px",padding:"16px",background:"var(--bui-color-bg-view)",borderRadius:"6px",overflowY:"auto"}},n.createElement("div",{style:{textAlign:"center"}},"\u9690\u85CF\u906E\u7F69\u7684\u5F39\u7A97\uFF08\u70B9\u51FB\u5916\u90E8\u4EFB\u610F\u533A\u57DF\u5173\u95ED\uFF09"))))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-modal-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Modal, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        \u6253\u5F00\u65E0\u906E\u7F69\u7684\u5F39\u7A97
      </Button>
      <Button
        onClick={() => {
          setOpen1(true);
        }}
      >
        \u6253\u5F00\u9690\u85CF\u906E\u7F69\u7684\u5F39\u7A97
      </Button>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        hideBackdrop
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '80%',
            height: '300px',
            padding: '16px',
            background: 'var(--bui-color-bg-view)',
            borderRadius: '6px',
            overflowY: 'auto',
          }}
          onClick={() => setOpen(false)}
        >
          <div style={{ textAlign: 'center' }}>
            \u65E0\u906E\u7F69\u7684\u5F39\u7A97\uFF08\u9700\u81EA\u884C\u5B9E\u73B0\u70B9\u51FB\u5173\u95ED\uFF09
          </div>
        </div>
      </Modal>
      <Modal
        open={open1}
        onClose={() => {
          setOpen1(false);
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        BackdropProps={{ invisible: true }}
      >
        <div
          style={{
            width: '80%',
            height: '300px',
            padding: '16px',
            background: 'var(--bui-color-bg-view)',
            borderRadius: '6px',
            overflowY: 'auto',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            \u9690\u85CF\u906E\u7F69\u7684\u5F39\u7A97\uFF08\u70B9\u51FB\u5916\u90E8\u4EFB\u610F\u533A\u57DF\u5173\u95ED\uFF09
          </div>
        </div>
      </Modal>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-modal-demo-en-us-2":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=m.sent,a=o.Button,r=o.Modal,t=o.Stack,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,d=l.useState,m.abrupt("return",{default:function(){var f=d(!1),g=p()(f,2),b=g[0],E=g[1],P=d(!1),C=p()(P,2),O=C[0],T=C[1];return n.createElement(t,null,n.createElement(a,{onClick:function(){E(!0)}},"\u6253\u5F00\u5F39\u7A97"),n.createElement(a,{onClick:function(){T(function(L){return!L})}},"\u6ED1\u52A8/\u6EDA\u52A8\u7A7F\u900F\u4FDD\u62A4",O?"\u5173":"\u5F00"),n.createElement(r,{open:b,onClose:function(){E(!1)},disableScrollLock:O,style:{display:"flex",alignItems:"center",justifyContent:"center"}},n.createElement("div",{style:{width:"80%",height:"300px",padding:"16px",background:"var(--bui-color-bg-view)",borderRadius:"6px",overflowY:"auto"}},n.createElement("div",{style:{textAlign:"center"}},"\u6D4B\u8BD5\u5F39\u7A97",n.createElement("br",null),"\u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED\u5F39\u7A97",n.createElement("br",null),n.createElement("br",null),"\u6EDA\u52A8\u7A7F\u900F\u963B\u6B62\u2193",n.createElement("br",null),"\uFF08\u76F4\u63A5\u4F7F\u7528\u6EDA\u8F6E\u6216\u8005\u5728\u79FB\u52A8\u7AEF\u89E6\u6478\u62D6\u52A8\u6D4B\u8BD5\uFF09",n.createElement("br",null),n.createElement("br",null),n.createElement("br",null),n.createElement("br",null),n.createElement("br",null),n.createElement("br",null),n.createElement("br",null),n.createElement("br",null),n.createElement("br",null),n.createElement("br",null),"\u6EDA\u52A8\u7A7F\u900F\u963B\u6B62\u2191"))))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-modal-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Modal, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  const [scrollLock, setScrollLock] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        \u6253\u5F00\u5F39\u7A97
      </Button>
      <Button
        onClick={() => {
          setScrollLock((o) => !o);
        }}
      >
        \u6ED1\u52A8/\u6EDA\u52A8\u7A7F\u900F\u4FDD\u62A4{scrollLock ? '\u5173' : '\u5F00'}
      </Button>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        disableScrollLock={scrollLock}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '80%',
            height: '300px',
            padding: '16px',
            background: 'var(--bui-color-bg-view)',
            borderRadius: '6px',
            overflowY: 'auto',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            \u6D4B\u8BD5\u5F39\u7A97
            <br />
            \u70B9\u51FB\u906E\u7F69\u5C42\u5173\u95ED\u5F39\u7A97
            <br />
            <br />
            \u6EDA\u52A8\u7A7F\u900F\u963B\u6B62\u2193
            <br />
            \uFF08\u76F4\u63A5\u4F7F\u7528\u6EDA\u8F6E\u6216\u8005\u5728\u79FB\u52A8\u7AEF\u89E6\u6478\u62D6\u52A8\u6D4B\u8BD5\uFF09
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            \u6EDA\u52A8\u7A7F\u900F\u963B\u6B62\u2191
          </div>
        </div>
      </Modal>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-modal-demo-en-us-3":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=m.sent,a=o.Button,r=o.Modal,t=o.Stack,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,d=l.useState,m.abrupt("return",{default:function(){var f=d(!1),g=p()(f,2),b=g[0],E=g[1],P=d(!1),C=p()(P,2),O=C[0],T=C[1];return n.createElement(t,null,n.createElement(a,{onClick:function(){E(!0),T(!0)}},"\u6253\u5F00\u5F39\u7A97"),n.createElement(r,{open:b,onClose:function(){E(!1)},keepMounted:O,style:{display:"flex",alignItems:"center",justifyContent:"center"}},n.createElement("div",{style:{width:"80%",height:"300px",padding:"16px",background:"var(--bui-color-bg-view)",borderRadius:"6px",overflowY:"auto"}},n.createElement("p",null,"open:",b?"T":"F"),n.createElement("p",null,"keepMounted:",O?"T":"F"),n.createElement("p",null,"\u70B9\u51FB\u9000\u51FA\u540Eopen\u53D8\u4E3AFalse\uFF0C\u6B64\u65F6Backdrop\u5F00\u59CB\u6267\u884C\u9000\u51FA\u52A8\u6548"),n.createElement("p",null,"\u70B9\u51FB\u786E\u5B9A\u9000\u51FA\u540EkeepMounted\u53D8\u4E3AFalse"),n.createElement("p",null,"\u4E24\u8005\u5747\u4E3AFalse\u4E14Backdrop\u9000\u51FA\u52A8\u6548\u7ED3\u675F\u540E\u7EC4\u4EF6\u6574\u4F53\u5378\u8F7D"),n.createElement(a,{onClick:function(){E(!1)}},"\u9000\u51FA"),n.createElement(a,{onClick:function(){T(!1)}},"\u786E\u5B9A\u9000\u51FA"))))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-modal-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Modal, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  const [mount, setMount] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
          setMount(true);
        }}
      >
        \u6253\u5F00\u5F39\u7A97
      </Button>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        keepMounted={mount}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '80%',
            height: '300px',
            padding: '16px',
            background: 'var(--bui-color-bg-view)',
            borderRadius: '6px',
            overflowY: 'auto',
          }}
        >
          <p>open:{open ? 'T' : 'F'}</p>
          <p>keepMounted:{mount ? 'T' : 'F'}</p>
          <p>\u70B9\u51FB\u9000\u51FA\u540Eopen\u53D8\u4E3AFalse\uFF0C\u6B64\u65F6Backdrop\u5F00\u59CB\u6267\u884C\u9000\u51FA\u52A8\u6548</p>
          <p>\u70B9\u51FB\u786E\u5B9A\u9000\u51FA\u540EkeepMounted\u53D8\u4E3AFalse</p>
          <p>\u4E24\u8005\u5747\u4E3AFalse\u4E14Backdrop\u9000\u51FA\u52A8\u6548\u7ED3\u675F\u540E\u7EC4\u4EF6\u6574\u4F53\u5378\u8F7D</p>
          <Button
            onClick={() => {
              setOpen(false);
            }}
          >
            \u9000\u51FA
          </Button>
          <Button
            onClick={() => {
              setMount(false);
            }}
          >
            \u786E\u5B9A\u9000\u51FA
          </Button>
        </div>
      </Modal>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}}}},47409:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return x}});var M=e(90228),c=e.n(M),A=e(87999),p=e.n(A),y=e(75271),x={"packages-bui-core-src-nav-bar-demo-en-us-0":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=l.sent,i=I.default,l.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=l.sent,a=o.Stack,r=o.NavBar,l.abrupt("return",{default:function(){return i.createElement(a,null,i.createElement(r,null))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-nav-bar-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <NavBar />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-nav-bar-demo-en-us-1":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t,l;return c()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=d.sent,i=I.default,d.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=d.sent,a=o.Stack,r=o.NavBar,d.next=11,e.e(9975).then(e.bind(e,29975));case 11:return t=d.sent,l=t.CloseLargeIcon,d.abrupt("return",{default:function(){return i.createElement(a,{spacing:"50px"},i.createElement(r,{title:"\u6807\u9898\u6587\u6848",leftIcon:i.createElement(l,null)}),i.createElement(r,{title:"\u6807\u9898\u6587\u6848",leftIcon:!1}))}});case 14:case"end":return d.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-nav-bar-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';
import { CloseLargeIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack spacing="50px">
      <NavBar title="\u6807\u9898\u6587\u6848" leftIcon={<CloseLargeIcon />} />
      <NavBar title="\u6807\u9898\u6587\u6848" leftIcon={false} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-nav-bar-demo-en-us-2":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=l.sent,i=I.default,l.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=l.sent,a=o.Stack,r=o.NavBar,l.abrupt("return",{default:function(){return i.createElement(a,null,i.createElement(r,{title:"\u6807\u9898\u6587\u6848",IconProps:{htmlColor:"#ff335c"}}))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-nav-bar-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <NavBar title="\u6807\u9898\u6587\u6848" IconProps={{ htmlColor: '#ff335c' }} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-nav-bar-demo-en-us-3":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=l.sent,i=I.default,l.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=l.sent,a=o.Stack,r=o.NavBar,l.abrupt("return",{default:function(){return i.createElement(a,{spacing:"50px"},i.createElement(r,{left:"\u8FD4\u56DE"}))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-nav-bar-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';

export default () => {
  return (
    <Stack spacing="50px">
      <NavBar left="\u8FD4\u56DE" />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-nav-bar-demo-en-us-4":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=l.sent,i=I.default,l.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=l.sent,a=o.Stack,r=o.NavBar,l.abrupt("return",{default:function(){return i.createElement(a,null,i.createElement(a,{spacing:"50px",style:{width:"375px"}},i.createElement(r,{title:"\u6807\u9898\u6587\u6848"}),i.createElement(r,{title:"\u8FD9\u4E2A\u6807\u9898\u6587\u6848\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F"})))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-nav-bar-demo-en-us-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Stack spacing="50px" style={{ width: '375px' }}>
        <NavBar title="\u6807\u9898\u6587\u6848" />
        <NavBar title="\u8FD9\u4E2A\u6807\u9898\u6587\u6848\u5F88\u957F\u5F88\u957F\u5F88\u957F\u5F88\u957F" />
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-nav-bar-demo-en-us-5":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t,l;return c()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=d.sent,i=I.default,d.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=d.sent,a=o.Stack,r=o.NavBar,d.next=11,e.e(9975).then(e.bind(e,29975));case 11:return t=d.sent,l=t.MoreIcon,d.abrupt("return",{default:function(){return i.createElement(a,{spacing:"50px"},i.createElement(r,{title:"\u6807\u9898\u6587\u6848",right:"\u6587\u6848"}),i.createElement(r,{title:"\u6807\u9898\u6587\u6848",right:i.createElement(l,{size:"large"})}))}});case 14:case"end":return d.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-nav-bar-demo-en-us-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';
import { MoreIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack spacing="50px">
      <NavBar title="\u6807\u9898\u6587\u6848" right="\u6587\u6848" />
      <NavBar title="\u6807\u9898\u6587\u6848" right={<MoreIcon size="large" />} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-nav-bar-demo-en-us-6":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=l.sent,i=I.default,l.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=l.sent,a=o.Stack,r=o.NavBar,l.abrupt("return",{default:function(){return i.createElement(a,null,i.createElement(r,{title:"\u6807\u9898\u6587\u6848",fixed:!0,placeholder:!0}))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-nav-bar-demo-en-us-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, NavBar } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <NavBar title="\u6807\u9898\u6587\u6848" fixed placeholder />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}}}},69955:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return o}});var M=e(15558),c=e.n(M),A=e(90228),p=e.n(A),y=e(48305),x=e.n(y),u=e(87999),I=e.n(u),i=e(75271),o={"packages-bui-core-src-picker-demo-en-us-0":{component:i.memo(i.lazy(I()(p()().mark(function a(){var r,t,l,n,d,s,m,h;return p()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=g.sent,t=r.Button,l=r.Picker,n=r.Stack,g.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return d=g.sent,s=d.default,m=d.useState,h=d.useEffect,g.abrupt("return",{default:function(){var E=m(!1),P=x()(E,2),C=P[0],O=P[1],T=m([2]),B=x()(T,2),L=B[0],D=B[1];return h(function(){console.log(L)},[L]),s.createElement(n,null,s.createElement(t,{onClick:function(){O(!0)}},"\u6253\u5F00\u9009\u62E9\u5668"),s.createElement(l,{open:C,value:L,onClose:function($,F){O(!1),console.log("onClose",$,F)},options:[[{value:1,label:"\u5468\u4E00"},{value:2,label:"\u5468\u4E8C"},{value:3,label:"\u5468\u4E09"},{value:4,label:"\u5468\u56DB"},{value:5,label:"\u5468\u4E94"},{value:6,label:"\u5468\u516D"},{value:7,label:"\u5468\u65E5"}]]}))}});case 13:case"end":return g.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-picker-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Picker, Stack } from '@bifrostui/react';
import React, { useState, useEffect } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  const [val, setVal] = useState<(string | number)[]>([2]);

  useEffect(() => {
    console.log(val);
  }, [val]);

  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        \u6253\u5F00\u9009\u62E9\u5668
      </Button>
      <Picker
        open={open}
        value={val}
        onClose={(e, data) => {
          setOpen(false);
          console.log('onClose', e, data);
        }}
        options={[
          [
            {
              value: 1,
              label: '\u5468\u4E00',
            },
            {
              value: 2,
              label: '\u5468\u4E8C',
            },
            {
              value: 3,
              label: '\u5468\u4E09',
            },
            {
              value: 4,
              label: '\u5468\u56DB',
            },
            {
              value: 5,
              label: '\u5468\u4E94',
            },
            {
              value: 6,
              label: '\u5468\u516D',
            },
            {
              value: 7,
              label: '\u5468\u65E5',
            },
          ],
        ]}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(i,2))},renderOpts:{compile:function(){var a=I()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}},"packages-bui-core-src-picker-demo-en-us-1":{component:i.memo(i.lazy(I()(p()().mark(function a(){var r,t,l,n,d,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=f.sent,t=r.Button,l=r.Picker,n=r.Stack,f.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return d=f.sent,s=d.default,m=d.useState,f.abrupt("return",{default:function(){var b=m(!1),E=x()(b,2),P=E[0],C=E[1];return s.createElement(n,null,s.createElement(t,{onClick:function(){C(!0)}},"\u6253\u5F00\u9009\u62E9\u5668"),s.createElement(l,{open:P,title:"\u8BF7\u9009\u62E9",onClose:function(T,B){C(!1),console.log("onClose",T,B)},options:[[{value:1,label:"\u5468\u4E00"},{value:2,label:"\u5468\u4E8C"},{value:3,label:"\u5468\u4E09"},{value:4,label:"\u5468\u56DB"},{value:5,label:"\u5468\u4E94"},{value:6,label:"\u5468\u516D"},{value:7,label:"\u5468\u65E5"}]]}))}});case 12:case"end":return f.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-picker-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Picker, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        \u6253\u5F00\u9009\u62E9\u5668
      </Button>
      <Picker
        open={open}
        title="\u8BF7\u9009\u62E9"
        onClose={(e, data) => {
          setOpen(false);
          console.log('onClose', e, data);
        }}
        options={[
          [
            {
              value: 1,
              label: '\u5468\u4E00',
            },
            {
              value: 2,
              label: '\u5468\u4E8C',
            },
            {
              value: 3,
              label: '\u5468\u4E09',
            },
            {
              value: 4,
              label: '\u5468\u56DB',
            },
            {
              value: 5,
              label: '\u5468\u4E94',
            },
            {
              value: 6,
              label: '\u5468\u516D',
            },
            {
              value: 7,
              label: '\u5468\u65E5',
            },
          ],
        ]}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(i,2))},renderOpts:{compile:function(){var a=I()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}},"packages-bui-core-src-picker-demo-en-us-2":{component:i.memo(i.lazy(I()(p()().mark(function a(){var r,t,l,n,d,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=f.sent,t=r.Button,l=r.Picker,n=r.Stack,f.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return d=f.sent,s=d.default,m=d.useState,f.abrupt("return",{default:function(){var b=m(!1),E=x()(b,2),P=E[0],C=E[1];return s.createElement(n,null,s.createElement(t,{onClick:function(){C(!0)}},"\u6253\u5F00\u9009\u62E9\u5668"),s.createElement(l,{open:P,onClose:function(T,B){C(!1),console.log("onClose",T,B)},options:[[{value:1,label:"\u5468\u4E00"},{value:2,label:"\u5468\u4E8C"},{value:3,label:"\u5468\u4E09"},{value:4,label:"\u5468\u56DB"},{value:5,label:"\u5468\u4E94"},{value:6,label:"\u5468\u516D"},{value:7,label:"\u5468\u65E5"}],[{value:1,label:"\u4E0A\u5348"},{value:2,label:"\u4E2D\u5348"},{value:3,label:"\u4E0B\u5348"}]]}))}});case 12:case"end":return f.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-picker-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Picker, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        \u6253\u5F00\u9009\u62E9\u5668
      </Button>
      <Picker
        open={open}
        onClose={(e, data) => {
          setOpen(false);
          console.log('onClose', e, data);
        }}
        options={[
          [
            {
              value: 1,
              label: '\u5468\u4E00',
            },
            {
              value: 2,
              label: '\u5468\u4E8C',
            },
            {
              value: 3,
              label: '\u5468\u4E09',
            },
            {
              value: 4,
              label: '\u5468\u56DB',
            },
            {
              value: 5,
              label: '\u5468\u4E94',
            },
            {
              value: 6,
              label: '\u5468\u516D',
            },
            {
              value: 7,
              label: '\u5468\u65E5',
            },
          ],
          [
            {
              value: 1,
              label: '\u4E0A\u5348',
            },
            {
              value: 2,
              label: '\u4E2D\u5348',
            },
            {
              value: 3,
              label: '\u4E0B\u5348',
            },
          ],
        ]}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(i,2))},renderOpts:{compile:function(){var a=I()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}},"packages-bui-core-src-picker-demo-en-us-3":{component:i.memo(i.lazy(I()(p()().mark(function a(){var r,t,l,n,d,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=f.sent,t=r.Button,l=r.Picker,n=r.Stack,f.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return d=f.sent,s=d.default,m=d.useState,f.abrupt("return",{default:function(){var b=m(!1),E=x()(b,2),P=E[0],C=E[1];return s.createElement(n,null,s.createElement(t,{onClick:function(){C(!0)}},"\u6253\u5F00\u9009\u62E9\u5668"),s.createElement(l,{open:P,onClose:function(T,B){C(!1),console.log("onClose",T,B)},options:[{value:1,label:"\u5317\u4EAC",children:[{value:1,label:"\u671D\u9633\u533A",children:[{value:1,label:"\u671D\u9633\u8857"}]},{value:2,label:"\u6D77\u6DC0\u533A"},{value:3,label:"\u5927\u5174\u533A"},{value:4,label:"\u4E1C\u57CE\u533A"},{value:5,label:"\u897F\u57CE\u533A"},{value:6,label:"\u4E30\u53F0\u533A"}]},{value:2,label:"\u4E0A\u6D77",children:[{value:1,label:"\u9EC4\u57D4\u533A"},{value:2,label:"\u957F\u5B81\u533A"},{value:3,label:"\u666E\u9640\u533A"},{value:4,label:"\u6768\u6D66\u533A"},{value:5,label:"\u6D66\u4E1C\u65B0\u533A"},{value:6,label:"\u5F90\u6C47\u533A",children:[{value:1,label:"\u9F99\u8000\u8DEF"},{value:2,label:"\u4E91\u9526\u8DEF"}]}]}]}))}});case 12:case"end":return f.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-picker-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Picker, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        \u6253\u5F00\u9009\u62E9\u5668
      </Button>
      <Picker
        open={open}
        onClose={(e, data) => {
          setOpen(false);
          console.log('onClose', e, data);
        }}
        options={[
          {
            value: 1,
            label: '\u5317\u4EAC',
            children: [
              {
                value: 1,
                label: '\u671D\u9633\u533A',
                children: [
                  {
                    value: 1,
                    label: '\u671D\u9633\u8857',
                  },
                ],
              },
              {
                value: 2,
                label: '\u6D77\u6DC0\u533A',
              },
              {
                value: 3,
                label: '\u5927\u5174\u533A',
              },
              {
                value: 4,
                label: '\u4E1C\u57CE\u533A',
              },
              {
                value: 5,
                label: '\u897F\u57CE\u533A',
              },
              {
                value: 6,
                label: '\u4E30\u53F0\u533A',
              },
            ],
          },
          {
            value: 2,
            label: '\u4E0A\u6D77',
            children: [
              {
                value: 1,
                label: '\u9EC4\u57D4\u533A',
              },
              {
                value: 2,
                label: '\u957F\u5B81\u533A',
              },
              {
                value: 3,
                label: '\u666E\u9640\u533A',
              },
              {
                value: 4,
                label: '\u6768\u6D66\u533A',
              },
              {
                value: 5,
                label: '\u6D66\u4E1C\u65B0\u533A',
              },
              {
                value: 6,
                label: '\u5F90\u6C47\u533A',
                children: [
                  {
                    value: 1,
                    label: '\u9F99\u8000\u8DEF',
                  },
                  {
                    value: 2,
                    label: '\u4E91\u9526\u8DEF',
                  },
                ],
              },
            ],
          },
        ]}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(i,2))},renderOpts:{compile:function(){var a=I()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}},"packages-bui-core-src-picker-demo-en-us-4":{component:i.memo(i.lazy(I()(p()().mark(function a(){var r,t,l,n,d,s,m,h;return p()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=g.sent,t=r.Button,l=r.Picker,n=r.Stack,g.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return d=g.sent,s=d.default,m=d.useState,h=d.useEffect,g.abrupt("return",{default:function(){var E=[{value:1,label:"\u5317\u4EAC",children:[{value:1,label:"\u671D\u9633\u533A",children:[{value:1,label:"\u671D\u9633\u8857"}]},{value:2,label:"\u6D77\u6DC0\u533A"},{value:3,label:"\u5927\u5174\u533A"},{value:4,label:"\u4E1C\u57CE\u533A"},{value:5,label:"\u897F\u57CE\u533A"},{value:6,label:"\u4E30\u53F0\u533A"}]},{value:2,label:"\u4E0A\u6D77"}],P=m([]),C=x()(P,2),O=C[0],T=C[1],B=m(!1),L=x()(B,2),D=L[0],k=L[1],$=m([]),F=x()($,2),z=F[0],U=F[1];h(function(){setTimeout(function(){U(E)},1e3)},[]);var V=function(X,Z){var ee=Z.value,ae=[{value:1,label:"\u9EC4\u57D4\u533A"},{value:2,label:"\u957F\u5B81\u533A"},{value:3,label:"\u666E\u9640\u533A"},{value:4,label:"\u6768\u6D66\u533A"},{value:5,label:"\u6D66\u4E1C\u65B0\u533A"},{value:6,label:"\u5F90\u6C47\u533A",children:[{value:1,label:"\u9F99\u8000\u8DEF"},{value:2,label:"\u4E91\u9526\u8DEF"}]}];(ee==null?void 0:ee[0])===2&&setTimeout(function(){U(function(ne){var te=ne;return te[1].children=ae,c()(te)})},50),T(ee)};return s.createElement(n,null,s.createElement(t,{onClick:function(){k(!0)}},"\u6253\u5F00\u9009\u62E9\u5668"),s.createElement(l,{open:D,onClose:function(X,Z){k(!1),console.log("onClose",X,Z)},value:O,onOptionChange:V,options:z}))}});case 13:case"end":return g.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-picker-demo-en-us-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Picker, Stack } from '@bifrostui/react';
import React, { useState, useEffect } from 'react';

export default () => {
  const mockData = [
    {
      value: 1,
      label: '\u5317\u4EAC',
      children: [
        {
          value: 1,
          label: '\u671D\u9633\u533A',
          children: [
            {
              value: 1,
              label: '\u671D\u9633\u8857',
            },
          ],
        },
        {
          value: 2,
          label: '\u6D77\u6DC0\u533A',
        },
        {
          value: 3,
          label: '\u5927\u5174\u533A',
        },
        {
          value: 4,
          label: '\u4E1C\u57CE\u533A',
        },
        {
          value: 5,
          label: '\u897F\u57CE\u533A',
        },
        {
          value: 6,
          label: '\u4E30\u53F0\u533A',
        },
      ],
    },
    {
      value: 2,
      label: '\u4E0A\u6D77',
    },
  ];
  const [val, setVal] = useState<(string | number)[]>([]);
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setOptions(mockData);
    }, 1000);
  }, []);

  const handleChange = (e, { value }) => {
    const shanghai = [
      {
        value: 1,
        label: '\u9EC4\u57D4\u533A',
      },
      {
        value: 2,
        label: '\u957F\u5B81\u533A',
      },
      {
        value: 3,
        label: '\u666E\u9640\u533A',
      },
      {
        value: 4,
        label: '\u6768\u6D66\u533A',
      },
      {
        value: 5,
        label: '\u6D66\u4E1C\u65B0\u533A',
      },
      {
        value: 6,
        label: '\u5F90\u6C47\u533A',
        children: [
          {
            value: 1,
            label: '\u9F99\u8000\u8DEF',
          },
          {
            value: 2,
            label: '\u4E91\u9526\u8DEF',
          },
        ],
      },
    ];
    if (value?.[0] === 2) {
      setTimeout(() => {
        setOptions((prev) => {
          const data = prev;
          data[1].children = shanghai;
          return [...data];
        });
      }, 50);
    }
    setVal(value);
  };

  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        \u6253\u5F00\u9009\u62E9\u5668
      </Button>
      <Picker
        open={open}
        onClose={(e, data) => {
          setOpen(false);
          console.log('onClose', e, data);
        }}
        value={val}
        onOptionChange={handleChange}
        options={options}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(i,2))},renderOpts:{compile:function(){var a=I()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}},"packages-bui-core-src-picker-demo-en-us-5":{component:i.memo(i.lazy(I()(p()().mark(function a(){var r,t,l,n,d,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=f.sent,t=r.Button,l=r.Picker,n=r.Stack,f.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return d=f.sent,s=d.default,m=d.useState,f.abrupt("return",{default:function(){var b=m(!1),E=x()(b,2),P=E[0],C=E[1];return s.createElement(n,null,s.createElement(t,{onClick:function(){C(!0)}},"\u6253\u5F00\u9009\u62E9\u5668"),s.createElement(l,{open:P,value:[2,6,2],onClose:function(T,B){C(!1),console.log("onClose",T,B)},options:[{value:1,label:"\u5317\u4EAC",children:[{value:1,label:"\u671D\u9633\u533A",children:[{value:1,label:"\u671D\u9633\u8857"}]},{value:2,label:"\u6D77\u6DC0\u533A"},{value:3,label:"\u5927\u5174\u533A"},{value:4,label:"\u4E1C\u57CE\u533A"},{value:5,label:"\u897F\u57CE\u533A"},{value:6,label:"\u4E30\u53F0\u533A"}]},{value:2,label:"\u4E0A\u6D77",children:[{value:1,label:"\u9EC4\u57D4\u533A"},{value:2,label:"\u957F\u5B81\u533A"},{value:3,label:"\u666E\u9640\u533A"},{value:4,label:"\u6768\u6D66\u533A"},{value:5,label:"\u6D66\u4E1C\u65B0\u533A"},{value:6,label:"\u5F90\u6C47\u533A",children:[{value:1,label:"\u9F99\u8000\u8DEF"},{value:2,label:"\u4E91\u9526\u8DEF"}]}]}]}))}});case 12:case"end":return f.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-picker-demo-en-us-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Picker, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        \u6253\u5F00\u9009\u62E9\u5668
      </Button>
      <Picker
        open={open}
        value={[2, 6, 2]}
        onClose={(e, data) => {
          setOpen(false);
          console.log('onClose', e, data);
        }}
        options={[
          {
            value: 1,
            label: '\u5317\u4EAC',
            children: [
              {
                value: 1,
                label: '\u671D\u9633\u533A',
                children: [
                  {
                    value: 1,
                    label: '\u671D\u9633\u8857',
                  },
                ],
              },
              {
                value: 2,
                label: '\u6D77\u6DC0\u533A',
              },
              {
                value: 3,
                label: '\u5927\u5174\u533A',
              },
              {
                value: 4,
                label: '\u4E1C\u57CE\u533A',
              },
              {
                value: 5,
                label: '\u897F\u57CE\u533A',
              },
              {
                value: 6,
                label: '\u4E30\u53F0\u533A',
              },
            ],
          },
          {
            value: 2,
            label: '\u4E0A\u6D77',
            children: [
              {
                value: 1,
                label: '\u9EC4\u57D4\u533A',
              },
              {
                value: 2,
                label: '\u957F\u5B81\u533A',
              },
              {
                value: 3,
                label: '\u666E\u9640\u533A',
              },
              {
                value: 4,
                label: '\u6768\u6D66\u533A',
              },
              {
                value: 5,
                label: '\u6D66\u4E1C\u65B0\u533A',
              },
              {
                value: 6,
                label: '\u5F90\u6C47\u533A',
                children: [
                  {
                    value: 1,
                    label: '\u9F99\u8000\u8DEF',
                  },
                  {
                    value: 2,
                    label: '\u4E91\u9526\u8DEF',
                  },
                ],
              },
            ],
          },
        ]}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(i,2))},renderOpts:{compile:function(){var a=I()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}},"packages-bui-core-src-picker-demo-en-us-6":{component:i.memo(i.lazy(I()(p()().mark(function a(){var r,t,l,n,d,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=f.sent,t=r.Button,l=r.Picker,n=r.Stack,f.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return d=f.sent,s=d.default,m=d.useState,f.abrupt("return",{default:function(){var b=m(!1),E=x()(b,2),P=E[0],C=E[1];return s.createElement(n,null,s.createElement(t,{onClick:function(){C(!0)}},"\u6253\u5F00\u9009\u62E9\u5668"),s.createElement(l,{open:P,contentProps:{style:{height:"400px"}},onClose:function(T,B){C(!1),console.log("onClose",T,B)},options:[[{value:1,label:"\u5468\u4E00"},{value:2,label:"\u5468\u4E8C"},{value:3,label:"\u5468\u4E09"},{value:4,label:"\u5468\u56DB"},{value:5,label:"\u5468\u4E94"},{value:6,label:"\u5468\u516D"},{value:7,label:"\u5468\u65E5"}]]}))}});case 12:case"end":return f.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-picker-demo-en-us-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Picker, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        \u6253\u5F00\u9009\u62E9\u5668
      </Button>
      <Picker
        open={open}
        contentProps={{
          style: {
            height: '400px',
          },
        }}
        onClose={(e, data) => {
          setOpen(false);
          console.log('onClose', e, data);
        }}
        options={[
          [
            {
              value: 1,
              label: '\u5468\u4E00',
            },
            {
              value: 2,
              label: '\u5468\u4E8C',
            },
            {
              value: 3,
              label: '\u5468\u4E09',
            },
            {
              value: 4,
              label: '\u5468\u56DB',
            },
            {
              value: 5,
              label: '\u5468\u4E94',
            },
            {
              value: 6,
              label: '\u5468\u516D',
            },
            {
              value: 7,
              label: '\u5468\u65E5',
            },
          ],
        ]}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(i,2))},renderOpts:{compile:function(){var a=I()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}},"packages-bui-core-src-picker-demo-en-us-7":{component:i.memo(i.lazy(I()(p()().mark(function a(){var r,t,l,n,d,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=f.sent,t=r.Button,l=r.Picker,n=r.Stack,f.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return d=f.sent,s=d.default,m=d.useState,f.abrupt("return",{default:function(){var b=m(!1),E=x()(b,2),P=E[0],C=E[1],O=m([]),T=x()(O,2),B=T[0],L=T[1];return s.createElement(n,null,s.createElement(t,{onClick:function(){C(!0)}},"\u6253\u5F00\u9009\u62E9\u5668"),s.createElement(l,{open:P,onConfirm:function(k,$){console.log("onConfirm",k,$);var F=$.value;L(F)},value:B,onClose:function(k,$){C(!1)},options:[{value:1,label:"\u5317\u4EAC",children:[{value:1,label:"\u671D\u9633\u533A",children:[{value:1,label:"\u671D\u9633\u8857"}]},{value:2,label:"\u6D77\u6DC0\u533A"},{value:3,label:"\u5927\u5174\u533A"},{value:4,label:"\u4E1C\u57CE\u533A"},{value:5,label:"\u897F\u57CE\u533A"},{value:6,label:"\u4E30\u53F0\u533A"}]},{value:2,label:"\u4E0A\u6D77",children:[{value:1,label:"\u9EC4\u57D4\u533A"},{value:2,label:"\u957F\u5B81\u533A"},{value:3,label:"\u666E\u9640\u533A"},{value:4,label:"\u6768\u6D66\u533A"},{value:5,label:"\u6D66\u4E1C\u65B0\u533A"},{value:6,label:"\u5F90\u6C47\u533A",children:[{value:1,label:"\u9F99\u8000\u8DEF"},{value:2,label:"\u4E91\u9526\u8DEF"}]}]}]}))}});case 12:case"end":return f.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-picker-demo-en-us-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Picker, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  const [val, setVal] = useState<(string | number)[]>([]);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        \u6253\u5F00\u9009\u62E9\u5668
      </Button>
      <Picker
        open={open}
        onConfirm={(e, data) => {
          console.log('onConfirm', e, data);
          const { value } = data;
          setVal(value);
        }}
        value={val}
        onClose={(e, data) => {
          setOpen(false);
        }}
        options={[
          {
            value: 1,
            label: '\u5317\u4EAC',
            children: [
              {
                value: 1,
                label: '\u671D\u9633\u533A',
                children: [
                  {
                    value: 1,
                    label: '\u671D\u9633\u8857',
                  },
                ],
              },
              {
                value: 2,
                label: '\u6D77\u6DC0\u533A',
              },
              {
                value: 3,
                label: '\u5927\u5174\u533A',
              },
              {
                value: 4,
                label: '\u4E1C\u57CE\u533A',
              },
              {
                value: 5,
                label: '\u897F\u57CE\u533A',
              },
              {
                value: 6,
                label: '\u4E30\u53F0\u533A',
              },
            ],
          },
          {
            value: 2,
            label: '\u4E0A\u6D77',
            children: [
              {
                value: 1,
                label: '\u9EC4\u57D4\u533A',
              },
              {
                value: 2,
                label: '\u957F\u5B81\u533A',
              },
              {
                value: 3,
                label: '\u666E\u9640\u533A',
              },
              {
                value: 4,
                label: '\u6768\u6D66\u533A',
              },
              {
                value: 5,
                label: '\u6D66\u4E1C\u65B0\u533A',
              },
              {
                value: 6,
                label: '\u5F90\u6C47\u533A',
                children: [
                  {
                    value: 1,
                    label: '\u9F99\u8000\u8DEF',
                  },
                  {
                    value: 2,
                    label: '\u4E91\u9526\u8DEF',
                  },
                ],
              },
            ],
          },
        ]}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(i,2))},renderOpts:{compile:function(){var a=I()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}},"packages-bui-core-src-picker-demo-en-us-8":{component:i.memo(i.lazy(I()(p()().mark(function a(){var r,t,l,n,d,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=f.sent,t=r.Button,l=r.Picker,n=r.Stack,f.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return d=f.sent,s=d.default,m=d.useState,f.abrupt("return",{default:function(){var b=m(!1),E=x()(b,2),P=E[0],C=E[1],O=m([2,100]),T=x()(O,2),B=T[0],L=T[1];return s.createElement(n,null,s.createElement(t,{onClick:function(){C(!0)}},"\u6253\u5F00\u9009\u62E9\u5668"),s.createElement(l,{open:P,onConfirm:function(k,$){console.log("onConfirm",k,$);var F=$.value;L(F)},value:B,onClose:function(k,$){C(!1)},options:[{value:1,label:"\u5317\u4EAC",children:[{value:1,label:"\u671D\u9633\u533A",children:[{value:1,label:"\u671D\u9633\u8857"}]},{value:2,label:"\u6D77\u6DC0\u533A"},{value:3,label:"\u5927\u5174\u533A"},{value:4,label:"\u4E1C\u57CE\u533A"},{value:5,label:"\u897F\u57CE\u533A"},{value:6,label:"\u4E30\u53F0\u533A"}]},{value:2,label:"\u4E0A\u6D77",children:[{value:1,label:"\u9EC4\u57D4\u533A"},{value:2,label:"\u957F\u5B81\u533A"},{value:3,label:"\u666E\u9640\u533A"},{value:4,label:"\u6768\u6D66\u533A"},{value:5,label:"\u6D66\u4E1C\u65B0\u533A"},{value:6,label:"\u5F90\u6C47\u533A",children:[{value:1,label:"\u9F99\u8000\u8DEF"},{value:2,label:"\u4E91\u9526\u8DEF"}]}]}]}))}});case 12:case"end":return f.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-picker-demo-en-us-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Picker, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  const [val, setVal] = useState<(string | number)[]>([2, 100]);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        \u6253\u5F00\u9009\u62E9\u5668
      </Button>
      <Picker
        open={open}
        onConfirm={(e, data) => {
          console.log('onConfirm', e, data);
          const { value } = data;
          setVal(value);
        }}
        value={val}
        onClose={(e, data) => {
          setOpen(false);
        }}
        options={[
          {
            value: 1,
            label: '\u5317\u4EAC',
            children: [
              {
                value: 1,
                label: '\u671D\u9633\u533A',
                children: [
                  {
                    value: 1,
                    label: '\u671D\u9633\u8857',
                  },
                ],
              },
              {
                value: 2,
                label: '\u6D77\u6DC0\u533A',
              },
              {
                value: 3,
                label: '\u5927\u5174\u533A',
              },
              {
                value: 4,
                label: '\u4E1C\u57CE\u533A',
              },
              {
                value: 5,
                label: '\u897F\u57CE\u533A',
              },
              {
                value: 6,
                label: '\u4E30\u53F0\u533A',
              },
            ],
          },
          {
            value: 2,
            label: '\u4E0A\u6D77',
            children: [
              {
                value: 1,
                label: '\u9EC4\u57D4\u533A',
              },
              {
                value: 2,
                label: '\u957F\u5B81\u533A',
              },
              {
                value: 3,
                label: '\u666E\u9640\u533A',
              },
              {
                value: 4,
                label: '\u6768\u6D66\u533A',
              },
              {
                value: 5,
                label: '\u6D66\u4E1C\u65B0\u533A',
              },
              {
                value: 6,
                label: '\u5F90\u6C47\u533A',
                children: [
                  {
                    value: 1,
                    label: '\u9F99\u8000\u8DEF',
                  },
                  {
                    value: 2,
                    label: '\u4E91\u9526\u8DEF',
                  },
                ],
              },
            ],
          },
        ]}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(i,2))},renderOpts:{compile:function(){var a=I()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}},"packages-bui-core-src-picker-demo-en-us-9":{component:i.memo(i.lazy(I()(p()().mark(function a(){var r,t,l,n,d,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=f.sent,t=r.Button,l=r.Picker,n=r.Stack,f.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return d=f.sent,s=d.default,m=d.useState,f.abrupt("return",{default:function(){var b=m(!1),E=x()(b,2),P=E[0],C=E[1];return s.createElement(n,null,s.createElement(t,{onClick:function(){C(!0)}},"\u6253\u5F00\u9009\u62E9\u5668"),s.createElement(l,{open:P,onClose:function(T,B){C(!1)},onOptionChange:function(T,B){console.log("onOptionChange",T,B)},options:[{value:1,label:"\u5317\u4EAC",children:[{value:1,label:"\u671D\u9633\u533A",children:[{value:1,label:"\u671D\u9633\u8857"}]},{value:2,label:"\u6D77\u6DC0\u533A"},{value:3,label:"\u5927\u5174\u533A"},{value:4,label:"\u4E1C\u57CE\u533A"},{value:5,label:"\u897F\u57CE\u533A"},{value:6,label:"\u4E30\u53F0\u533A"}]},{value:2,label:"\u4E0A\u6D77",children:[{value:1,label:"\u9EC4\u57D4\u533A"},{value:2,label:"\u957F\u5B81\u533A"},{value:3,label:"\u666E\u9640\u533A"},{value:4,label:"\u6768\u6D66\u533A"},{value:5,label:"\u6D66\u4E1C\u65B0\u533A"},{value:6,label:"\u5F90\u6C47\u533A",children:[{value:1,label:"\u9F99\u8000\u8DEF"},{value:2,label:"\u4E91\u9526\u8DEF"}]}]}]}))}});case 12:case"end":return f.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-picker-demo-en-us-9",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Picker, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        \u6253\u5F00\u9009\u62E9\u5668
      </Button>
      <Picker
        open={open}
        onClose={(e, data) => {
          setOpen(false);
        }}
        onOptionChange={(e, data) => {
          console.log('onOptionChange', e, data);
        }}
        options={[
          {
            value: 1,
            label: '\u5317\u4EAC',
            children: [
              {
                value: 1,
                label: '\u671D\u9633\u533A',
                children: [
                  {
                    value: 1,
                    label: '\u671D\u9633\u8857',
                  },
                ],
              },
              {
                value: 2,
                label: '\u6D77\u6DC0\u533A',
              },
              {
                value: 3,
                label: '\u5927\u5174\u533A',
              },
              {
                value: 4,
                label: '\u4E1C\u57CE\u533A',
              },
              {
                value: 5,
                label: '\u897F\u57CE\u533A',
              },
              {
                value: 6,
                label: '\u4E30\u53F0\u533A',
              },
            ],
          },
          {
            value: 2,
            label: '\u4E0A\u6D77',
            children: [
              {
                value: 1,
                label: '\u9EC4\u57D4\u533A',
              },
              {
                value: 2,
                label: '\u957F\u5B81\u533A',
              },
              {
                value: 3,
                label: '\u666E\u9640\u533A',
              },
              {
                value: 4,
                label: '\u6768\u6D66\u533A',
              },
              {
                value: 5,
                label: '\u6D66\u4E1C\u65B0\u533A',
              },
              {
                value: 6,
                label: '\u5F90\u6C47\u533A',
                children: [
                  {
                    value: 1,
                    label: '\u9F99\u8000\u8DEF',
                  },
                  {
                    value: 2,
                    label: '\u4E91\u9526\u8DEF',
                  },
                ],
              },
            ],
          },
        ]}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(i,2))},renderOpts:{compile:function(){var a=I()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}},"packages-bui-core-src-picker-demo-en-us-10":{component:i.memo(i.lazy(I()(p()().mark(function a(){var r,t,l,n,d,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=f.sent,t=r.Button,l=r.Picker,n=r.Stack,f.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return d=f.sent,s=d.default,m=d.useState,f.abrupt("return",{default:function(){var b=m(!1),E=x()(b,2),P=E[0],C=E[1];return s.createElement(n,null,s.createElement(t,{onClick:function(){C(!0)}},"\u6253\u5F00\u9009\u62E9\u5668"),s.createElement(l,{open:P,onCancel:function(T){console.log("onCancel",T)},onClose:function(){C(!1)},options:[{value:1,label:"\u5317\u4EAC",children:[{value:1,label:"\u671D\u9633\u533A",children:[{value:1,label:"\u671D\u9633\u8857"}]},{value:2,label:"\u6D77\u6DC0\u533A"},{value:3,label:"\u5927\u5174\u533A"},{value:4,label:"\u4E1C\u57CE\u533A"},{value:5,label:"\u897F\u57CE\u533A"},{value:6,label:"\u4E30\u53F0\u533A"}]},{value:2,label:"\u4E0A\u6D77",children:[{value:1,label:"\u9EC4\u57D4\u533A"},{value:2,label:"\u957F\u5B81\u533A"},{value:3,label:"\u666E\u9640\u533A"},{value:4,label:"\u6768\u6D66\u533A"},{value:5,label:"\u6D66\u4E1C\u65B0\u533A"},{value:6,label:"\u5F90\u6C47\u533A",children:[{value:1,label:"\u9F99\u8000\u8DEF"},{value:2,label:"\u4E91\u9526\u8DEF"}]}]}]}))}});case 12:case"end":return f.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-picker-demo-en-us-10",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Picker, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        \u6253\u5F00\u9009\u62E9\u5668
      </Button>
      <Picker
        open={open}
        onCancel={(e) => {
          console.log('onCancel', e);
        }}
        onClose={() => {
          setOpen(false);
        }}
        options={[
          {
            value: 1,
            label: '\u5317\u4EAC',
            children: [
              {
                value: 1,
                label: '\u671D\u9633\u533A',
                children: [
                  {
                    value: 1,
                    label: '\u671D\u9633\u8857',
                  },
                ],
              },
              {
                value: 2,
                label: '\u6D77\u6DC0\u533A',
              },
              {
                value: 3,
                label: '\u5927\u5174\u533A',
              },
              {
                value: 4,
                label: '\u4E1C\u57CE\u533A',
              },
              {
                value: 5,
                label: '\u897F\u57CE\u533A',
              },
              {
                value: 6,
                label: '\u4E30\u53F0\u533A',
              },
            ],
          },
          {
            value: 2,
            label: '\u4E0A\u6D77',
            children: [
              {
                value: 1,
                label: '\u9EC4\u57D4\u533A',
              },
              {
                value: 2,
                label: '\u957F\u5B81\u533A',
              },
              {
                value: 3,
                label: '\u666E\u9640\u533A',
              },
              {
                value: 4,
                label: '\u6768\u6D66\u533A',
              },
              {
                value: 5,
                label: '\u6D66\u4E1C\u65B0\u533A',
              },
              {
                value: 6,
                label: '\u5F90\u6C47\u533A',
                children: [
                  {
                    value: 1,
                    label: '\u9F99\u8000\u8DEF',
                  },
                  {
                    value: 2,
                    label: '\u4E91\u9526\u8DEF',
                  },
                ],
              },
            ],
          },
        ]}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(i,2))},renderOpts:{compile:function(){var a=I()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}},"packages-bui-core-src-picker-demo-en-us-11":{component:i.memo(i.lazy(I()(p()().mark(function a(){var r,t,l,n,d,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=f.sent,t=r.Button,l=r.Picker,n=r.Stack,f.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return d=f.sent,s=d.default,m=d.useState,f.abrupt("return",{default:function(){var b=m(!1),E=x()(b,2),P=E[0],C=E[1];return s.createElement(n,null,s.createElement(t,{onClick:function(){C(!0)}},"\u6253\u5F00\u9009\u62E9\u5668"),s.createElement(l,{style:{"--panel-container-height":"500px","--indicator-top":"207px","--option-height":"70px"},open:P,onClose:function(){C(!1)},options:[{value:1,label:"\u5317\u4EAC",children:[{value:1,label:"\u671D\u9633\u533A",children:[{value:1,label:"\u671D\u9633\u8857"}]},{value:2,label:"\u6D77\u6DC0\u533A"},{value:3,label:"\u5927\u5174\u533A"},{value:4,label:"\u4E1C\u57CE\u533A"},{value:5,label:"\u897F\u57CE\u533A"},{value:6,label:"\u4E30\u53F0\u533A"}]},{value:2,label:"\u4E0A\u6D77",children:[{value:1,label:"\u9EC4\u57D4\u533A"},{value:2,label:"\u957F\u5B81\u533A"},{value:3,label:"\u666E\u9640\u533A"},{value:4,label:"\u6768\u6D66\u533A"},{value:5,label:"\u6D66\u4E1C\u65B0\u533A"},{value:6,label:"\u5F90\u6C47\u533A",children:[{value:1,label:"\u9F99\u8000\u8DEF"},{value:2,label:"\u4E91\u9526\u8DEF"}]}]}]}))}});case 12:case"end":return f.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-picker-demo-en-us-11",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Picker, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        \u6253\u5F00\u9009\u62E9\u5668
      </Button>
      <Picker
        style={{
          '--panel-container-height': '500px',
          '--indicator-top': '207px',
          '--option-height': '70px',
        }}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        options={[
          {
            value: 1,
            label: '\u5317\u4EAC',
            children: [
              {
                value: 1,
                label: '\u671D\u9633\u533A',
                children: [
                  {
                    value: 1,
                    label: '\u671D\u9633\u8857',
                  },
                ],
              },
              {
                value: 2,
                label: '\u6D77\u6DC0\u533A',
              },
              {
                value: 3,
                label: '\u5927\u5174\u533A',
              },
              {
                value: 4,
                label: '\u4E1C\u57CE\u533A',
              },
              {
                value: 5,
                label: '\u897F\u57CE\u533A',
              },
              {
                value: 6,
                label: '\u4E30\u53F0\u533A',
              },
            ],
          },
          {
            value: 2,
            label: '\u4E0A\u6D77',
            children: [
              {
                value: 1,
                label: '\u9EC4\u57D4\u533A',
              },
              {
                value: 2,
                label: '\u957F\u5B81\u533A',
              },
              {
                value: 3,
                label: '\u666E\u9640\u533A',
              },
              {
                value: 4,
                label: '\u6768\u6D66\u533A',
              },
              {
                value: 5,
                label: '\u6D66\u4E1C\u65B0\u533A',
              },
              {
                value: 6,
                label: '\u5F90\u6C47\u533A',
                children: [
                  {
                    value: 1,
                    label: '\u9F99\u8000\u8DEF',
                  },
                  {
                    value: 2,
                    label: '\u4E91\u9526\u8DEF',
                  },
                ],
              },
            ],
          },
        ]}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(i,2))},renderOpts:{compile:function(){var a=I()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}}}},82636:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return I}});var M=e(48305),c=e.n(M),A=e(90228),p=e.n(A),y=e(87999),x=e.n(y),u=e(75271),I={"packages-bui-core-src-popover-demo-en-us-0":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=n.sent,a=o.Popover,n.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){return t.createElement(a,{title:t.createElement("div",{style:{padding:"2px 8px"}},"This is a title"),content:t.createElement("div",{style:{padding:"2px 8px"}},"This is a content")},t.createElement("span",null,"click\u663E\u793A"))}});case 9:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-popover-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Popover
      title={<div style={{ padding: '2px 8px' }}>This is a title</div>}
      content={<div style={{ padding: '2px 8px' }}>This is a content</div>}
    >
      <span>click\u663E\u793A</span>
    </Popover>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-popover-demo-en-us-1":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l;return p()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=d.sent,a=o.Popover,d.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return r=d.sent,t=r.default,l=r.useState,d.abrupt("return",{default:function(){var m=l(!0),h=c()(m,2),f=h[0],g=h[1];return t.createElement(a,{title:t.createElement("div",{style:{padding:"2px 8px"}},"This is a popover"),open:f},t.createElement("span",{onClick:function(){return g(!f)}},"open\u63A7\u5236\u663E\u9690"))}});case 10:case"end":return d.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-popover-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Popover } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(true);
  return (
    <Popover
      title={<div style={{ padding: '2px 8px' }}>This is a popover</div>}
      open={open}
    >
      <span onClick={() => setOpen(!open)}>open\u63A7\u5236\u663E\u9690</span>
    </Popover>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-popover-demo-en-us-2":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=n.sent,a=o.Popover,n.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){return t.createElement(a,{title:t.createElement("div",{style:{padding:"2px 8px"}},"This is a popover"),defaultOpen:!0},t.createElement("span",null,"defaultOpen\u9ED8\u8BA4\u663E\u793A"))}});case 9:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-popover-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Popover
      title={<div style={{ padding: '2px 8px' }}>This is a popover</div>}
      defaultOpen
    >
      <span>defaultOpen\u9ED8\u8BA4\u663E\u793A</span>
    </Popover>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-popover-demo-en-us-3":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=n.sent,a=o.Popover,n.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){return t.createElement(a,{title:t.createElement("div",{style:{padding:"2px 8px"}},"This is a popover"),defaultOpen:!0,hideArrow:!0},t.createElement("span",null,"defaultOpen\u9ED8\u8BA4\u663E\u793A"))}});case 9:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-popover-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Popover
      title={<div style={{ padding: '2px 8px' }}>This is a popover</div>}
      defaultOpen
      hideArrow
    >
      <span>defaultOpen\u9ED8\u8BA4\u663E\u793A</span>
    </Popover>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-popover-demo-en-us-4":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l;return p()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=d.sent,a=o.Popover,r=o.Button,d.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=d.sent,l=t.default,d.abrupt("return",{default:function(){var m=function(f){return l.createElement(r,{style:{borderRadius:0,marginTop:"4px",width:"80px"}},f)};return l.createElement("div",null,l.createElement("div",{style:{display:"flex",width:"300px",marginLeft:"100px",justifyContent:"space-between"}},l.createElement(a,{trigger:"hover",title:l.createElement("div",{style:{padding:"2px 8px"}},"This is a popover"),placement:"topLeft"},m(l.createElement("span",null,"topLeft"))),l.createElement(a,{trigger:"hover",title:l.createElement("div",{style:{padding:"2px 8px"}},"This is a popover"),placement:"top"},m(l.createElement("span",null,"top"))),l.createElement(a,{trigger:"hover",title:l.createElement("div",{style:{padding:"2px 8px"}},"This is a popover"),placement:"topRight"},m(l.createElement("span",null,"topRight")))),l.createElement("div",{style:{marginTop:"20px",display:"inline-flex",width:"100px",flexDirection:"column"}},l.createElement(a,{trigger:"hover",title:l.createElement("div",{style:{padding:"2px 8px"}},"This is a popover"),placement:"leftTop"},m(l.createElement("span",null,"leftTop"))),l.createElement(a,{trigger:"hover",title:l.createElement("div",{style:{padding:"2px 8px"}},"This is a popover"),placement:"left"},m(l.createElement("span",null,"left"))),l.createElement(a,{trigger:"hover",title:l.createElement("div",{style:{padding:"2px 8px"}},"This is a popover"),placement:"leftBottom"},m(l.createElement("span",null,"leftBottom")))),l.createElement("div",{style:{marginLeft:"300px",display:"inline-flex",width:"100px",flexDirection:"column"}},l.createElement(a,{trigger:"hover",title:l.createElement("div",{style:{padding:"2px 8px"}},"This is a popover"),placement:"rightTop"},m(l.createElement("span",null,"rightTop"))),l.createElement(a,{trigger:"hover",title:l.createElement("div",{style:{padding:"2px 8px"}},"This is a popover"),placement:"right"},m(l.createElement("span",null,"right"))),l.createElement(a,{trigger:"hover",title:l.createElement("div",{style:{padding:"2px 8px"}},"This is a popover"),placement:"rightBottom"},m(l.createElement("span",null,"rightBottom")))),l.createElement("div",{style:{marginLeft:"100px",marginTop:"20px",display:"flex",width:"300px",justifyContent:"space-between"}},l.createElement(a,{trigger:"hover",title:l.createElement("div",{style:{padding:"2px 8px"}},"This is a popover"),placement:"bottomLeft"},m(l.createElement("span",null,"bottomLeft"))),l.createElement(a,{trigger:"hover",title:l.createElement("div",{style:{padding:"2px 8px"}},"This is a popover"),placement:"bottom"},m(l.createElement("span",null,"bottom"))),l.createElement(a,{trigger:"hover",title:l.createElement("div",{style:{padding:"2px 8px"}},"This is a popover"),placement:"bottomRight"},m(l.createElement("span",null,"bottomRight")))))}});case 10:case"end":return d.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-popover-demo-en-us-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Popover, Button } from '@bifrostui/react';
import React from 'react';

export default () => {
  const packageButton = (inner) => {
    return (
      <Button style={{ borderRadius: 0, marginTop: '4px', width: '80px' }}>
        {inner}
      </Button>
    );
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          width: '300px',
          marginLeft: '100px',
          justifyContent: 'space-between',
        }}
      >
        <Popover
          trigger="hover"
          title={<div style={{ padding: '2px 8px' }}>This is a popover</div>}
          placement="topLeft"
        >
          {packageButton(<span>topLeft</span>)}
        </Popover>
        <Popover
          trigger="hover"
          title={<div style={{ padding: '2px 8px' }}>This is a popover</div>}
          placement="top"
        >
          {packageButton(<span>top</span>)}
        </Popover>
        <Popover
          trigger="hover"
          title={<div style={{ padding: '2px 8px' }}>This is a popover</div>}
          placement="topRight"
        >
          {packageButton(<span>topRight</span>)}
        </Popover>
      </div>
      <div
        style={{
          marginTop: '20px',
          display: 'inline-flex',
          width: '100px',
          flexDirection: 'column',
        }}
      >
        <Popover
          trigger="hover"
          title={<div style={{ padding: '2px 8px' }}>This is a popover</div>}
          placement="leftTop"
        >
          {packageButton(<span>leftTop</span>)}
        </Popover>
        <Popover
          trigger="hover"
          title={<div style={{ padding: '2px 8px' }}>This is a popover</div>}
          placement="left"
        >
          {packageButton(<span>left</span>)}
        </Popover>
        <Popover
          trigger="hover"
          title={<div style={{ padding: '2px 8px' }}>This is a popover</div>}
          placement="leftBottom"
        >
          {packageButton(<span>leftBottom</span>)}
        </Popover>
      </div>
      <div
        style={{
          marginLeft: '300px',
          display: 'inline-flex',
          width: '100px',
          flexDirection: 'column',
        }}
      >
        <Popover
          trigger="hover"
          title={<div style={{ padding: '2px 8px' }}>This is a popover</div>}
          placement="rightTop"
        >
          {packageButton(<span>rightTop</span>)}
        </Popover>
        <Popover
          trigger="hover"
          title={<div style={{ padding: '2px 8px' }}>This is a popover</div>}
          placement="right"
        >
          {packageButton(<span>right</span>)}
        </Popover>
        <Popover
          trigger="hover"
          title={<div style={{ padding: '2px 8px' }}>This is a popover</div>}
          placement="rightBottom"
        >
          {packageButton(<span>rightBottom</span>)}
        </Popover>
      </div>
      <div
        style={{
          marginLeft: '100px',
          marginTop: '20px',
          display: 'flex',
          width: '300px',
          justifyContent: 'space-between',
        }}
      >
        <Popover
          trigger="hover"
          title={<div style={{ padding: '2px 8px' }}>This is a popover</div>}
          placement="bottomLeft"
        >
          {packageButton(<span>bottomLeft</span>)}
        </Popover>
        <Popover
          trigger="hover"
          title={<div style={{ padding: '2px 8px' }}>This is a popover</div>}
          placement="bottom"
        >
          {packageButton(<span>bottom</span>)}
        </Popover>
        <Popover
          trigger="hover"
          title={<div style={{ padding: '2px 8px' }}>This is a popover</div>}
          placement="bottomRight"
        >
          {packageButton(<span>bottomRight</span>)}
        </Popover>
      </div>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-popover-demo-en-us-5":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=n.sent,a=o.Popover,n.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){return t.createElement(a,{title:t.createElement("div",{style:{padding:"2px 8px"}},"This is a popover"),trigger:"hover"},t.createElement("span",null,"hover\u89E6\u53D1\u65B9\u5F0F"))}});case 9:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-popover-demo-en-us-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Popover
      title={<div style={{ padding: '2px 8px' }}>This is a popover</div>}
      trigger="hover"
    >
      <span>hover\u89E6\u53D1\u65B9\u5F0F</span>
    </Popover>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-popover-demo-en-us-6":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=n.sent,a=o.Popover,n.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){var s=function(h,f){console.log(JSON.stringify(f))};return t.createElement(a,{title:t.createElement("div",{style:{padding:"2px 8px"}},"This is a popover"),trigger:"hover",onOpenChange:s},t.createElement("span",null,"onOpenChange \u56DE\u8C03\u65B9\u6CD5"))}});case 9:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-popover-demo-en-us-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Popover } from '@bifrostui/react';
import React from 'react';

export default () => {
  const onOpenChange = (event, data) => {
    console.log(JSON.stringify(data));
  };
  return (
    <Popover
      title={<div style={{ padding: '2px 8px' }}>This is a popover</div>}
      trigger="hover"
      onOpenChange={onOpenChange}
    >
      <span>onOpenChange \u56DE\u8C03\u65B9\u6CD5</span>
    </Popover>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}}}},29461:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return I}});var M=e(90228),c=e.n(M),A=e(48305),p=e.n(A),y=e(87999),x=e.n(y),u=e(75271),I={"packages-bui-core-src-portal-demo-en-us-0":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d,s,m;return c()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=f.sent,a=o.default,r=o.useState,t=o.useRef,l=o.useLayoutEffect,f.next=9,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 9:return n=f.sent,d=n.Portal,s=n.Button,m=n.Stack,f.abrupt("return",{default:function(){var b=t(null),E=t(null),P=r({current:null}),C=p()(P,2),O=C[0],T=C[1];return l(function(){T(b)},[]),a.createElement(m,null,a.createElement(s,{onClick:function(){return T(b)}},"\u8282\u70B91\u6E32\u67D3Portal\u5B50\u8282\u70B9"),a.createElement(s,{onClick:function(){return T(E)}},"\u8282\u70B92\u6E32\u67D3Portal\u5B50\u8282\u70B9"),a.createElement("div",{style:{width:200,height:100,background:"red",marginTop:10},ref:b},"\u8282\u70B91"),a.createElement("div",{style:{width:200,height:100,background:"green"},ref:E},"\u8282\u70B92"),a.createElement(d,{container:O.current},"\u6E32\u67D3Portal\u5B50\u8282\u70B9"))}});case 14:case"end":return f.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-portal-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useRef, useLayoutEffect } from 'react';
import { Portal, Button, Stack } from '@bifrostui/react';

export default () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [container, setContainer] = useState({ current: null });
  useLayoutEffect(() => {
    setContainer(ref1);
  }, []);
  return (
    <Stack>
      <Button onClick={() => setContainer(ref1)}>\u8282\u70B91\u6E32\u67D3Portal\u5B50\u8282\u70B9</Button>
      <Button onClick={() => setContainer(ref2)}>\u8282\u70B92\u6E32\u67D3Portal\u5B50\u8282\u70B9</Button>
      <div
        style={{ width: 200, height: 100, background: 'red', marginTop: 10 }}
        ref={ref1}
      >
        \u8282\u70B91
      </div>
      <div style={{ width: 200, height: 100, background: 'green' }} ref={ref2}>
        \u8282\u70B92
      </div>
      <Portal container={container.current}>\u6E32\u67D3Portal\u5B50\u8282\u70B9</Portal>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-portal-demo-en-us-1":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l;return c()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=d.sent,a=o.default,d.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=d.sent,t=r.Portal,l=r.Stack,d.abrupt("return",{default:function(){return a.createElement(l,null,a.createElement("div",{style:{width:200,height:100,background:"green",marginTop:10}},"Portal\u7236\u8282\u70B9",a.createElement(t,{disablePortal:!0},a.createElement("div",null,"Portal\u5B50\u8282\u70B9\u6302\u8F7D\u5728\u7236\u8282\u70B9\u4E0A"))))}});case 10:case"end":return d.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-portal-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Portal, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <div
        style={{ width: 200, height: 100, background: 'green', marginTop: 10 }}
      >
        Portal\u7236\u8282\u70B9
        <Portal disablePortal>
          <div>Portal\u5B50\u8282\u70B9\u6302\u8F7D\u5728\u7236\u8282\u70B9\u4E0A</div>
        </Portal>
      </div>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}}}},67802:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return x}});var M=e(90228),c=e.n(M),A=e(87999),p=e.n(A),y=e(75271),x={"packages-bui-core-src-progress-demo-en-us-0":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=t.sent,i=I.default,t.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=t.sent,a=o.Progress,t.abrupt("return",{default:function(){return i.createElement(a,{percent:40})}});case 9:case"end":return t.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-progress-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Progress } from '@bifrostui/react';
export default () => {
  return <Progress percent={40} />;
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-progress-demo-en-us-1":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=l.sent,i=I.default,l.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=l.sent,a=o.Progress,r=o.Stack,l.abrupt("return",{default:function(){return i.createElement(r,{direction:"column",spacing:"5px"},i.createElement(a,{percent:40,strokeColor:"var(--bui-color-primary)"}),i.createElement(a,{percent:50,strokeColor:"var(--bui-color-info)"}),i.createElement(a,{percent:30,strokeColor:"var(--bui-color-success)"}),i.createElement(a,{percent:80,strokeColor:"var(--bui-color-warning)"}),i.createElement(a,{percent:90,strokeColor:"var(--bui-color-vip)"}))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-progress-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Progress, Stack } from '@bifrostui/react';
export default () => {
  return (
    <Stack direction="column" spacing="5px">
      <Progress percent={40} strokeColor="var(--bui-color-primary)" />
      <Progress percent={50} strokeColor="var(--bui-color-info)" />
      <Progress percent={30} strokeColor="var(--bui-color-success)" />
      <Progress percent={80} strokeColor="var(--bui-color-warning)" />
      <Progress percent={90} strokeColor="var(--bui-color-vip)" />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-progress-demo-en-us-2":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=l.sent,i=I.default,l.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=l.sent,a=o.Progress,r=o.Stack,l.abrupt("return",{default:function(){return i.createElement(r,{direction:"column",alignItems:"flex-start",spacing:"10px"},i.createElement(a,{percent:60,strokeColor:"var(--bui-color-warning)",strokeWidth:10}),i.createElement(a,{percent:60,strokeColor:"var(--bui-color-warning)",strokeWidth:15}))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-progress-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Progress, Stack } from '@bifrostui/react';
export default () => {
  return (
    <Stack direction="column" alignItems="flex-start" spacing="10px">
      <Progress
        percent={60}
        strokeColor="var(--bui-color-warning)"
        strokeWidth={10}
      />
      <Progress
        percent={60}
        strokeColor="var(--bui-color-warning)"
        strokeWidth={15}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-progress-demo-en-us-3":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=l.sent,i=I.default,l.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=l.sent,a=o.Progress,r=o.Stack,l.abrupt("return",{default:function(){return i.createElement(r,{direction:"column",alignItems:"flex-start",spacing:"10px"},i.createElement(a,{percent:60,strokeColor:{from:"var(--bui-color-red)",to:"var(--bui-color-red-light)"}}),i.createElement(a,{percent:90,strokeColor:{"0%":"var(--bui-color-orange)","100%":"var(--bui-color-orange-light)"}}))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-progress-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Progress, Stack } from '@bifrostui/react';
export default () => {
  return (
    <Stack direction="column" alignItems="flex-start" spacing="10px">
      <Progress
        percent={60}
        strokeColor={{
          from: 'var(--bui-color-red)',
          to: 'var(--bui-color-red-light)',
        }}
      />
      <Progress
        percent={90}
        strokeColor={{
          '0%': 'var(--bui-color-orange)',
          '100%': 'var(--bui-color-orange-light)',
        }}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-progress-demo-en-us-4":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=t.sent,i=I.default,t.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=t.sent,a=o.Progress,t.abrupt("return",{default:function(){return i.createElement(a,{percent:60,trailColor:"var(--bui-color-red-light)"})}});case 9:case"end":return t.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-progress-demo-en-us-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Progress } from '@bifrostui/react';
export default () => {
  return <Progress percent={60} trailColor="var(--bui-color-red-light)" />;
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}}}},51935:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return I}});var M=e(90228),c=e.n(M),A=e(48305),p=e.n(A),y=e(87999),x=e.n(y),u=e(75271),I={"packages-bui-core-src-radio-demo-en-us-0":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=s.sent,a=o.Radio,r=o.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(!1),f=p()(h,2),g=f[0],b=f[1];return l.createElement(r,null,l.createElement(a,{checked:g,onChange:function(P,C){b(C.checked)}},"Radio"))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-radio-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Radio, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Radio
        checked={checked}
        onChange={(e, data) => {
          setChecked(data.checked);
        }}
      >
        Radio
      </Radio>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-radio-demo-en-us-1":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=s.sent,a=o.Radio,r=o.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(!1),f=p()(h,2),g=f[0],b=f[1];return l.createElement(r,null,l.createElement(a,{checked:g,onChange:function(P,C){b(C.checked)},inputProps:{className:"my-input"}},"Radio"))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-radio-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Radio, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Radio
        checked={checked}
        onChange={(e, data) => {
          setChecked(data.checked);
        }}
        inputProps={{
          className: 'my-input',
        }}
      >
        Radio
      </Radio>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-radio-demo-en-us-2":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=s.sent,a=o.Radio,r=o.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(!1),f=p()(h,2),g=f[0],b=f[1];return l.createElement(r,null,l.createElement(a,{checked:g,onChange:function(P,C){b(C.checked)},name:"myRadio",value:"tpp"},"Radio"))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-radio-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Radio, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Radio
        checked={checked}
        onChange={(e, data) => {
          setChecked(data.checked);
        }}
        name="myRadio"
        value="tpp"
      >
        Radio
      </Radio>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-radio-demo-en-us-3":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=s.sent,a=o.Radio,r=o.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(!1),f=p()(h,2),g=f[0],b=f[1],E=n(!1),P=p()(E,2),C=P[0],O=P[1],T=n(!1),B=p()(T,2),L=B[0],D=B[1],k=n(!1),$=p()(k,2),F=$[0],z=$[1];return l.createElement(r,null,l.createElement("div",{style:{width:"100px"}},l.createElement(a,{labelPlacement:"top",checked:g,onChange:function(V,j){var X=j.checked;b(X)}},"\u6587\u6848\u5728\u4E0A\u8FB9"),l.createElement(a,{labelPlacement:"right",checked:C,onChange:function(V,j){var X=j.checked;O(X)}},"\u6587\u6848\u5728\u53F3\u8FB9"),l.createElement(a,{labelPlacement:"bottom",checked:L,onChange:function(V,j){var X=j.checked;D(X)}},"\u6587\u6848\u5728\u4E0B\u8FB9"),l.createElement(a,{labelPlacement:"left",checked:F,onChange:function(V,j){var X=j.checked;z(X)}},"\u6587\u6848\u5728\u5DE6\u8FB9")))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-radio-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Radio, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  return (
    <Stack>
      <div style={{ width: '100px' }}>
        <Radio
          labelPlacement="top"
          checked={checked1}
          onChange={(e, { checked }) => {
            setChecked1(checked);
          }}
        >
          \u6587\u6848\u5728\u4E0A\u8FB9
        </Radio>
        <Radio
          labelPlacement="right"
          checked={checked2}
          onChange={(e, { checked }) => {
            setChecked2(checked);
          }}
        >
          \u6587\u6848\u5728\u53F3\u8FB9
        </Radio>
        <Radio
          labelPlacement="bottom"
          checked={checked3}
          onChange={(e, { checked }) => {
            setChecked3(checked);
          }}
        >
          \u6587\u6848\u5728\u4E0B\u8FB9
        </Radio>
        <Radio
          labelPlacement="left"
          checked={checked4}
          onChange={(e, { checked }) => {
            setChecked4(checked);
          }}
        >
          \u6587\u6848\u5728\u5DE6\u8FB9
        </Radio>
      </div>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-radio-demo-en-us-4":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d,s,m;return c()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=f.sent,a=o.default,r=o.useState,f.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=f.sent,l=t.Radio,n=t.Stack,f.next=12,e.e(9975).then(e.bind(e,29975));case 12:return d=f.sent,s=d.HeartFilledIcon,m=d.HeartOutlinedIcon,f.abrupt("return",{default:function(){var b=r(!1),E=p()(b,2),P=E[0],C=E[1];return a.createElement(n,null,a.createElement(l,{checked:P,onChange:function(T,B){C(B.checked)},icon:a.createElement(m,{htmlColor:"#ccc"}),checkedIcon:a.createElement(s,{color:"primary"})},"Radio"))}});case 16:case"end":return f.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-radio-demo-en-us-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Radio, Stack } from '@bifrostui/react';
import { HeartFilledIcon, HeartOutlinedIcon } from '@bifrostui/icons';

export default () => {
  const [checked, setChecked] = useState(false);
  return (
    <Stack>
      <Radio
        checked={checked}
        onChange={(e, data) => {
          setChecked(data.checked);
        }}
        icon={<HeartOutlinedIcon htmlColor="#ccc" />}
        checkedIcon={<HeartFilledIcon color="primary" />}
      >
        Radio
      </Radio>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-radio-demo-en-us-5":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=s.sent,a=o.Radio,r=o.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(!1),f=p()(h,1),g=f[0];return l.createElement(r,null,l.createElement(a,{checked:g,disabled:!0},"Radio"))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-radio-demo-en-us-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Radio, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [checked] = useState(false);
  return (
    <Stack>
      <Radio checked={checked} disabled>
        Radio
      </Radio>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-radio-demo-en-us-6":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=m.sent,a=o.Radio,r=o.RadioGroup,t=o.Stack,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,d=l.useState,m.abrupt("return",{default:function(){var f=d(""),g=p()(f,2),b=g[0],E=g[1],P=function(O,T){console.log("handleGroupChange",O,T),E(T.value)};return n.createElement(t,null,n.createElement(r,{value:b,onChange:P},n.createElement(a,{value:"\u6C34\u95E8\u6865"},"\u6C34\u95E8\u6865"),n.createElement(a,{value:"\u6DD8\u7968\u7968"},"\u6DD8\u7968\u7968"),n.createElement(a,{value:"\u559C\u6D0B\u6D0B"},"\u559C\u6D0B\u6D0B")))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-radio-demo-en-us-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Radio, RadioGroup, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');
  const handleGroupChange = (e, data) => {
    console.log('handleGroupChange', e, data);
    setValue(data.value);
  };
  return (
    <Stack>
      <RadioGroup value={value} onChange={handleGroupChange}>
        <Radio value="\u6C34\u95E8\u6865">\u6C34\u95E8\u6865</Radio>
        <Radio value="\u6DD8\u7968\u7968">\u6DD8\u7968\u7968</Radio>
        <Radio value="\u559C\u6D0B\u6D0B">\u559C\u6D0B\u6D0B</Radio>
      </RadioGroup>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-radio-demo-en-us-7":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d,s;return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=h.sent,a=o.Button,r=o.Radio,t=o.RadioGroup,l=o.Stack,h.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return n=h.sent,d=n.default,s=n.useState,h.abrupt("return",{default:function(){var g=s("\u6DD8\u7968\u7968"),b=p()(g,2),E=b[0],P=b[1],C=s(!0),O=p()(C,2),T=O[0],B=O[1];return d.createElement(l,null,d.createElement("div",{style:{width:"100px"}},d.createElement(a,{onClick:function(){var D=E?"":"\u6DD8\u7968\u7968";P(D)}},E.length?"\u53D6\u6D88":"\u9009\u62E9"," \u6DD8\u7968\u7968"),d.createElement(t,{value:E},d.createElement(r,{value:"\u6C34\u95E8\u6865"},"\u6C34\u95E8\u6865"),d.createElement(r,{value:"\u6DD8\u7968\u7968"},"\u6DD8\u7968\u7968"),d.createElement(r,{value:"\u559C\u6D0B\u6D0B"},"\u559C\u6D0B\u6D0B"))),d.createElement("div",{style:{width:"100px"}},d.createElement(a,{onClick:function(){B(!T)}},T?"\u53D6\u6D88":"\u9009\u4E2D"),d.createElement(r,{checked:T},"\u6DD8\u7968\u7968")))}});case 13:case"end":return h.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-radio-demo-en-us-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Radio, RadioGroup, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('\u6DD8\u7968\u7968');
  const [checked, setChecked] = useState(true);
  return (
    <Stack>
      <div style={{ width: '100px' }}>
        <Button
          onClick={() => {
            const data = value ? '' : '\u6DD8\u7968\u7968';
            setValue(data);
          }}
        >
          {value.length ? '\u53D6\u6D88' : '\u9009\u62E9'} \u6DD8\u7968\u7968
        </Button>
        <RadioGroup value={value}>
          <Radio value="\u6C34\u95E8\u6865">\u6C34\u95E8\u6865</Radio>
          <Radio value="\u6DD8\u7968\u7968">\u6DD8\u7968\u7968</Radio>
          <Radio value="\u559C\u6D0B\u6D0B">\u559C\u6D0B\u6D0B</Radio>
        </RadioGroup>
      </div>
      <div style={{ width: '100px' }}>
        <Button
          onClick={() => {
            setChecked(!checked);
          }}
        >
          {checked ? '\u53D6\u6D88' : '\u9009\u4E2D'}
        </Button>
        <Radio checked={checked}>\u6DD8\u7968\u7968</Radio>
      </div>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-radio-demo-en-us-8":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=s.sent,a=o.Radio,r=o.RadioGroup,t=o.Stack,s.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=s.sent,n=l.default,s.abrupt("return",{default:function(){return n.createElement(t,null,n.createElement("div",{style:{width:"100px"}},n.createElement("div",null,"RadioGroup\uFF1A"),n.createElement(r,{defaultValue:"\u6DD8\u7968\u7968"},n.createElement(a,{value:"\u6C34\u95E8\u6865"},"\u6C34\u95E8\u6865"),n.createElement(a,{value:"\u6DD8\u7968\u7968"},"\u6DD8\u7968\u7968"),n.createElement(a,{value:"\u559C\u6D0B\u6D0B"},"\u559C\u6D0B\u6D0B"))),n.createElement("div",null,n.createElement("div",null,"Radio\uFF1A"),n.createElement(a,{defaultChecked:!0},"\u6DD8\u7968\u7968")))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-radio-demo-en-us-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Radio, RadioGroup, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <div style={{ width: '100px' }}>
        <div>RadioGroup\uFF1A</div>
        <RadioGroup defaultValue="\u6DD8\u7968\u7968">
          <Radio value="\u6C34\u95E8\u6865">\u6C34\u95E8\u6865</Radio>
          <Radio value="\u6DD8\u7968\u7968">\u6DD8\u7968\u7968</Radio>
          <Radio value="\u559C\u6D0B\u6D0B">\u559C\u6D0B\u6D0B</Radio>
        </RadioGroup>
      </div>

      <div>
        <div>Radio\uFF1A</div>
        <Radio defaultChecked>\u6DD8\u7968\u7968</Radio>
      </div>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}}}},86847:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return I}});var M=e(48305),c=e.n(M),A=e(90228),p=e.n(A),y=e(87999),x=e.n(y),u=e(75271),I={"packages-bui-core-src-rating-demo-en-us-0":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=s.sent,a=o.Rating,r=o.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useRef,s.abrupt("return",{default:function(){var h=n(null);return l.createElement(r,{spacing:"8px"},l.createElement(a,null),l.createElement(a,{defaultValue:3,ref:h}))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-rating-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rating, Stack } from '@bifrostui/react';
import React, { useRef } from 'react';
export default () => {
  const ref = useRef(null);
  return (
    <Stack spacing="8px">
      <Rating />
      <Rating defaultValue={3} ref={ref} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-rating-demo-en-us-1":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=s.sent,a=o.Rating,r=o.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(3),f=c()(h,2),g=f[0],b=f[1];return l.createElement(r,null,l.createElement(a,{value:g,onChange:function(P,C){b(C.value)}}))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-rating-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rating, Stack } from '@bifrostui/react';
import React, { useState } from 'react';
export default () => {
  const [value, setValue] = useState(3);
  return (
    <Stack>
      <Rating
        value={value}
        onChange={(_, data) => {
          setValue(data.value);
        }}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-rating-demo-en-us-2":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l;return p()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=d.sent,a=o.Rating,r=o.Stack,d.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=d.sent,l=t.default,d.abrupt("return",{default:function(){return l.createElement(r,{spacing:"8px"},l.createElement(a,{allowHalf:!0}),l.createElement(a,{defaultValue:3,allowHalf:!0}))}});case 10:case"end":return d.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-rating-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rating, Stack } from '@bifrostui/react';
import React from 'react';
export default () => {
  return (
    <Stack spacing="8px">
      <Rating allowHalf />
      <Rating defaultValue={3} allowHalf />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-rating-demo-en-us-3":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l;return p()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=d.sent,a=o.Rating,r=o.Stack,d.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=d.sent,l=t.default,d.abrupt("return",{default:function(){return l.createElement(r,{spacing:"8px"},l.createElement(a,{readOnly:!0}),l.createElement(a,{defaultValue:3,readOnly:!0}))}});case 10:case"end":return d.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-rating-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rating, Stack } from '@bifrostui/react';
import React from 'react';
export default () => {
  return (
    <Stack spacing="8px">
      <Rating readOnly />
      <Rating defaultValue={3} readOnly />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-rating-demo-en-us-4":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l;return p()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=d.sent,a=o.Rating,r=o.Stack,d.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=d.sent,l=t.default,d.abrupt("return",{default:function(){return l.createElement(r,{spacing:"8px"},l.createElement(a,{size:"xsmall",defaultValue:3}),l.createElement(a,{size:"small",defaultValue:3}),l.createElement(a,{size:"medium",defaultValue:3}),l.createElement(a,{size:"large",defaultValue:3}))}});case 10:case"end":return d.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-rating-demo-en-us-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rating, Stack } from '@bifrostui/react';
import React from 'react';
export default () => {
  return (
    <Stack spacing="8px">
      <Rating size="xsmall" defaultValue={3} />
      <Rating size="small" defaultValue={3} />
      <Rating size="medium" defaultValue={3} />
      <Rating size="large" defaultValue={3} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-rating-demo-en-us-5":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l;return p()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=d.sent,a=o.Rating,r=o.Stack,d.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=d.sent,l=t.default,d.abrupt("return",{default:function(){return l.createElement(r,null,l.createElement(a,{defaultValue:3,count:8}))}});case 10:case"end":return d.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-rating-demo-en-us-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rating, Stack } from '@bifrostui/react';
import React from 'react';
export default () => {
  return (
    <Stack>
      <Rating defaultValue={3} count={8} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-rating-demo-en-us-6":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l;return p()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=d.sent,a=o.Rating,r=o.Stack,d.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=d.sent,l=t.default,d.abrupt("return",{default:function(){return l.createElement(r,{spacing:"8px"},l.createElement(a,{defaultValue:3,disabled:!0}))}});case 10:case"end":return d.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-rating-demo-en-us-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rating, Stack } from '@bifrostui/react';
import React from 'react';
export default () => {
  return (
    <Stack spacing="8px">
      <Rating defaultValue={3} disabled />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-rating-demo-en-us-7":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d,s;return p()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=h.sent,a=o.Rating,r=o.Stack,h.next=7,e.e(9975).then(e.bind(e,29975));case 7:return t=h.sent,l=t.HeartFilledIcon,n=t.HeartOutlinedIcon,h.next=12,Promise.resolve().then(e.t.bind(e,75271,19));case 12:return d=h.sent,s=d.default,h.abrupt("return",{default:function(){return s.createElement(r,{spacing:"8px"},s.createElement(a,{checkedIcon:s.createElement(l,{color:"info"}),defaultValue:3}),s.createElement(a,{checkedIcon:"A",icon:"B",defaultValue:3}),s.createElement(a,{checkedIcon:s.createElement(n,{color:"success"}),icon:s.createElement(l,{color:"primary"}),defaultValue:3}))}});case 15:case"end":return h.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-rating-demo-en-us-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Rating, Stack } from '@bifrostui/react';
import { HeartFilledIcon, HeartOutlinedIcon } from '@bifrostui/icons';
import React from 'react';

export default () => {
  return (
    <Stack spacing="8px">
      <Rating checkedIcon={<HeartFilledIcon color="info" />} defaultValue={3} />
      <Rating checkedIcon="A" icon="B" defaultValue={3} />
      <Rating
        checkedIcon={<HeartOutlinedIcon color="success" />}
        icon={<HeartFilledIcon color="primary" />}
        defaultValue={3}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}}}},46608:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return o}});var M=e(48305),c=e.n(M),A=e(90228),p=e.n(A),y=e(15558),x=e.n(y),u=e(87999),I=e.n(u),i=e(75271),o={"packages-bui-core-src-scroll-view-demo-en-us-0":{component:i.memo(i.lazy(I()(p()().mark(function a(){var r,t,l,n,d;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=m.sent,t=r.ScrollView,l=r.Stack,m.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return n=m.sent,d=n.default,m.abrupt("return",{default:function(){return d.createElement(l,null,d.createElement(t,{scrollY:!0,style:{width:"100%",height:"400px"}},x()(new Array(100)).map(function(f,g){return d.createElement("div",{className:"item",key:g},g)})))}});case 10:case"end":return m.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-scroll-view-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ScrollView, Button, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  return (
    <Stack>
      <ScrollView scrollY style={{ width: '100%', height: '400px' }}>
        {[...new Array(100)].map((_, index) => (
          <div className="item" key={index}>
            {index}
          </div>
        ))}
      </ScrollView>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(i,2))},renderOpts:{compile:function(){var a=I()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}},"packages-bui-core-src-scroll-view-demo-en-us-1":{component:i.memo(i.lazy(I()(p()().mark(function a(){var r,t,l,n,d;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return r=m.sent,t=r.default,m.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return l=m.sent,n=l.ScrollView,d=l.Stack,m.abrupt("return",{default:function(){return t.createElement(n,{scrollX:!0,style:{width:"50vw"}},t.createElement(d,{direction:"row",spacing:"8px",flexWrap:"nowrap",style:{width:"max-content"}},x()(new Array(100)).map(function(f,g){return t.createElement("div",{className:"item",style:{marginRight:"10px"},key:g},g)})))}});case 10:case"end":return m.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-scroll-view-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { ScrollView, Stack } from '@bifrostui/react';

export default () => {
  return (
    <ScrollView scrollX style={{ width: '50vw' }}>
      <Stack
        direction="row"
        spacing="8px"
        flexWrap="nowrap"
        style={{ width: 'max-content' }}
      >
        {[...new Array(100)].map((_, index) => (
          <div className="item" style={{ marginRight: '10px' }} key={index}>
            {index}
          </div>
        ))}
      </Stack>
    </ScrollView>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(i,2))},renderOpts:{compile:function(){var a=I()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}},"packages-bui-core-src-scroll-view-demo-en-us-2":{component:i.memo(i.lazy(I()(p()().mark(function a(){var r,t,l,n,d,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=f.sent,t=r.ScrollView,l=r.Button,n=r.Stack,f.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return d=f.sent,s=d.default,m=d.useState,f.abrupt("return",{default:function(){var b=function(){console.log("\u6EDA\u52A8\u5230\u5E95\u90E8\u4E86")},E=function(){console.log("\u6EDA\u52A8\u5230\u9876\u90E8\u4E86")},P=m(void 0),C=c()(P,2),O=C[0],T=C[1],B=m(void 0),L=c()(B,2),D=L[0],k=L[1];return s.createElement(n,null,s.createElement(l,{onClick:function(){k(void 0),T(0)}},"\u56DE\u5230\u9876\u90E8"),s.createElement(l,{onClick:function(){k(void 0),T(200)}},"\u6EDA\u52A8\u5230200px"),s.createElement(l,{onClick:function(){k("d50"),T(void 0)}},"\u6EDA\u52A8\u5230[50]\u6587\u672C\u5904"),s.createElement(t,{scrollY:!0,scrollTop:O,scrollIntoView:D,scrollIntoViewAlignment:"nearest",onScrollToLower:b,onScrollToUpper:E,onScroll:function(F){console.log(F),k(void 0),T(void 0)},scrollWithAnimation:!0,style:{width:"100%",height:"400px"}},x()(new Array(100)).map(function($,F){return s.createElement("div",{className:"item",key:F,id:"d".concat(F)},F)})))}});case 12:case"end":return f.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-scroll-view-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ScrollView, Button, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const onScrollToLower = () => {
    console.log('\u6EDA\u52A8\u5230\u5E95\u90E8\u4E86');
  };
  const onScrollToUpper = () => {
    console.log('\u6EDA\u52A8\u5230\u9876\u90E8\u4E86');
  };
  const [h, sH] = useState(undefined);
  const [id, sId] = useState(undefined);
  return (
    <Stack>
      <Button
        onClick={() => {
          sId(undefined);
          sH(0);
        }}
      >
        \u56DE\u5230\u9876\u90E8
      </Button>
      <Button
        onClick={() => {
          sId(undefined);
          sH(200);
        }}
      >
        \u6EDA\u52A8\u5230200px
      </Button>
      <Button
        onClick={() => {
          sId('d50');
          sH(undefined);
        }}
      >
        \u6EDA\u52A8\u5230[50]\u6587\u672C\u5904
      </Button>
      <ScrollView
        scrollY
        scrollTop={h}
        scrollIntoView={id}
        scrollIntoViewAlignment={'nearest'}
        onScrollToLower={onScrollToLower}
        onScrollToUpper={onScrollToUpper}
        onScroll={(e) => {
          console.log(e);
          sId(undefined);
          sH(undefined);
        }}
        scrollWithAnimation
        style={{ width: '100%', height: '400px' }}
      >
        {[...new Array(100)].map((_, index) => (
          <div className="item" key={index} id={\`d\${index}\`}>
            {index}
          </div>
        ))}
      </ScrollView>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(i,2))},renderOpts:{compile:function(){var a=I()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}}}},31985:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return I}});var M=e(48305),c=e.n(M),A=e(90228),p=e.n(A),y=e(87999),x=e.n(y),u=e(75271),I={"packages-bui-core-src-select-demo-en-us-0":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=m.sent,a=o.Select,r=o.SelectOption,t=o.Stack,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,d=[{label:"option 1",value:1},{label:"option 2",value:2},{label:"option 3",value:3}],m.abrupt("return",{default:function(){return n.createElement(t,{alignItems:"stretch",style:{background:"#eee",padding:"50px"}},n.createElement(a,null,d.map(function(f,g){return n.createElement(r,{key:g,value:f.value,label:f.label})})))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-select-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Select, SelectOption, Stack } from '@bifrostui/react';
import React from 'react';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Select>
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-select-demo-en-us-1":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=m.sent,a=o.Select,r=o.SelectOption,t=o.Stack,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,d=[{label:"option 1",value:1},{label:"option 2",value:2},{label:"option 3",value:3}],m.abrupt("return",{default:function(){return n.createElement(t,{alignItems:"stretch",style:{background:"#eee",padding:"50px"}},n.createElement(a,{placeholder:"\u4E0B\u62C9\u9009\u62E9"},d.map(function(f,g){return n.createElement(r,{key:g,value:f.value,label:f.label})})))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-select-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Select, SelectOption, Stack } from '@bifrostui/react';
import React from 'react';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Select placeholder="\u4E0B\u62C9\u9009\u62E9">
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-select-demo-en-us-2":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=m.sent,a=o.Select,r=o.SelectOption,t=o.Stack,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,d=[{label:"option 1",value:1},{label:"option 2",value:2},{label:"option 3",value:3}],m.abrupt("return",{default:function(){return n.createElement(t,{alignItems:"stretch",style:{background:"#eee",padding:"50px"}},n.createElement(a,{defaultValue:2},d.map(function(f,g){return n.createElement(r,{key:g,value:f.value,label:f.label})})))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-select-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Select, SelectOption, Stack } from '@bifrostui/react';
import React from 'react';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Select defaultValue={2}>
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-select-demo-en-us-3":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d,s,m,h,f;return p()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=b.sent,a=o.Alert,r=o.Button,t=o.Select,l=o.SelectOption,n=o.Stack,b.next=10,Promise.resolve().then(e.t.bind(e,75271,19));case 10:return d=b.sent,s=d.default,m=d.useRef,h=d.useState,f=[{label:"option 1",value:1},{label:"option 2",value:2},{label:"option 3",value:3}],b.abrupt("return",{default:function(){var P=h(""),C=c()(P,2),O=C[0],T=C[1],B=m(null),L=h(!1),D=c()(L,2),k=D[0],$=D[1];return s.createElement(s.Fragment,null,k&&s.createElement(a,{color:"success"},"\u9009\u62E9\u5668A\u503C\uFF1A".concat(O||"","; \u9009\u62E9\u5668B\u503C: ").concat(B.current.value)),s.createElement(n,{spacing:"20px",alignItems:"stretch",style:{background:"#eee",padding:"50px"}},s.createElement(t,{placeholder:"\u9009\u62E9\u5668A",value:O,onChange:function(z,U){var V=U.value,j=V===void 0?"":V;T(j)}},f.map(function(F,z){return s.createElement(l,{key:z,value:F.value,label:F.label})})),s.createElement(t,{placeholder:"\u9009\u62E9\u5668B",inputRef:B},f.map(function(F,z){return s.createElement(l,{key:z,value:F.value,label:F.label})})),s.createElement(r,{onClick:function(z){$(!0),setTimeout(function(){$(!1)},1e3)}},"\u63D0\u4EA4")))}});case 16:case"end":return b.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-select-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Alert, Button, Select, SelectOption, Stack } from '@bifrostui/react';
import React, { useRef, useState } from 'react';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  const [curValue, setCurValue] = useState('');
  const selectRef = useRef(null);
  const [alert, setAlert] = useState(false);

  return (
    <>
      {alert && (
        <Alert color="success">{\`\u9009\u62E9\u5668A\u503C\uFF1A\${curValue || ''}; \u9009\u62E9\u5668B\u503C: \${
          selectRef.current.value
        }\`}</Alert>
      )}
      <Stack
        spacing="20px"
        alignItems="stretch"
        style={{ background: '#eee', padding: '50px' }}
      >
        <Select
          placeholder="\u9009\u62E9\u5668A"
          value={curValue}
          onChange={(e, { value = '' }) => {
            setCurValue(value);
          }}
        >
          {options.map((item, index) => (
            <SelectOption key={index} value={item.value} label={item.label} />
          ))}
        </Select>
        <Select placeholder="\u9009\u62E9\u5668B" inputRef={selectRef}>
          {options.map((item, index) => (
            <SelectOption key={index} value={item.value} label={item.label} />
          ))}
        </Select>
        <Button
          onClick={(e) => {
            setAlert(true);
            setTimeout(() => {
              setAlert(false);
            }, 1000);
          }}
        >
          \u63D0\u4EA4
        </Button>
      </Stack>
    </>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-select-demo-en-us-4":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=m.sent,a=o.Select,r=o.SelectOption,t=o.Stack,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,d=[{label:"option 1",value:1},{label:"option 2",value:2},{label:"option 3",value:3}],m.abrupt("return",{default:function(){return n.createElement(t,{spacing:"20px",alignItems:"stretch",style:{background:"#eee",padding:"50px"}},n.createElement(a,{disabled:!0,placeholder:"\u7981\u7528"},d.map(function(f,g){return n.createElement(r,{key:g,value:f.value,label:f.label})})),n.createElement(a,{defaultValue:1},d.map(function(f,g){return n.createElement(r,{key:g,value:f.value,label:f.label,disabled:g===2})})))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-select-demo-en-us-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Select, SelectOption, Stack } from '@bifrostui/react';
import React from 'react';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  return (
    <Stack
      spacing="20px"
      alignItems="stretch"
      style={{ background: '#eee', padding: '50px' }}
    >
      <Select disabled placeholder="\u7981\u7528">
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
      <Select defaultValue={1}>
        {options.map((item, index) => (
          <SelectOption
            key={index}
            value={item.value}
            label={item.label}
            disabled={index === 2}
          />
        ))}
      </Select>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-select-demo-en-us-5":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=f.sent,a=o.default,f.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=f.sent,t=r.Select,l=r.SelectOption,n=r.Stack,f.next=12,e.e(9975).then(e.bind(e,29975));case 12:return d=f.sent,s=d.ArrowDownwardIcon,m=[{label:"option 1",value:1},{label:"option 2",value:2},{label:"option 3",value:3}],f.abrupt("return",{default:function(){return a.createElement(n,{alignItems:"stretch",style:{background:"#eee",padding:"50px"}},a.createElement(t,{icon:a.createElement(s,null),placeholder:"\u81EA\u5B9A\u4E49\u56FE\u6807"},m.map(function(b,E){return a.createElement(l,{key:E,value:b.value,label:b.label})})))}});case 16:case"end":return f.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-select-demo-en-us-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Select, SelectOption, Stack } from '@bifrostui/react';
import { ArrowDownwardIcon } from '@bifrostui/icons';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Select icon={<ArrowDownwardIcon />} placeholder="\u81EA\u5B9A\u4E49\u56FE\u6807">
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-select-demo-en-us-6":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d;return p()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=m.sent,a=o.Select,r=o.SelectOption,t=o.Stack,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,d=[{label:"option 1",value:1},{label:"option 2",value:2},{label:"option 3",value:3}],m.abrupt("return",{default:function(){return n.createElement(t,{alignItems:"stretch",style:{background:"#eee",padding:"50px"}},n.createElement(a,{defaultValue:2},d.map(function(f,g){var b=f.value,E=f.label;return n.createElement(r,{value:b,label:E,key:g},"\u9009\u9879 - ",E)})))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-select-demo-en-us-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Select, SelectOption, Stack } from '@bifrostui/react';
import React from 'react';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Select defaultValue={2}>
        {options.map((option, index) => {
          const { value, label } = option;

          return (
            <SelectOption value={value} label={label} key={index}>
              \u9009\u9879 - {label}
            </SelectOption>
          );
        })}
      </Select>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-select-demo-en-us-7":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=f.sent,a=o.default,f.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=f.sent,t=r.Select,l=r.SelectOption,n=r.Stack,f.next=12,e.e(9975).then(e.bind(e,29975));case 12:return d=f.sent,s=d.SettingsOutlinedIcon,m=[{label:"option 1",value:1},{label:"option 2",value:2},{label:"option 3",value:3}],f.abrupt("return",{default:function(){return a.createElement(n,{alignItems:"stretch",style:{background:"#eee",padding:"50px"}},a.createElement(t,{defaultValue:2},m.map(function(b,E){var P=b.value,C=b.label,O=a.createElement(n,{direction:"row",spacing:"10px"},a.createElement(s,null),C);return a.createElement(l,{label:O,value:P,key:E},"\u9009\u9879-",C)})))}});case 16:case"end":return f.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-select-demo-en-us-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Select, SelectOption, Stack } from '@bifrostui/react';
import { SettingsOutlinedIcon } from '@bifrostui/icons';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Select defaultValue={2}>
        {options.map((option, index) => {
          const { value, label } = option;
          const customLabel = (
            <Stack direction="row" spacing="10px">
              <SettingsOutlinedIcon />
              {label}
            </Stack>
          );

          return (
            <SelectOption label={customLabel} value={value} key={index}>
              \u9009\u9879-{label}
            </SelectOption>
          );
        })}
      </Select>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-select-demo-en-us-8":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=f.sent,a=o.Alert,r=o.Select,t=o.SelectOption,l=o.Stack,f.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return n=f.sent,d=n.default,s=n.useState,m=[{label:"option 1",value:1},{label:"option 2",value:2},{label:"option 3",value:3}],f.abrupt("return",{default:function(){var b=s("\u521D\u59CB\u5316"),E=c()(b,2),P=E[0],C=E[1];return d.createElement(l,{alignItems:"stretch",style:{background:"#eee",padding:"50px"}},d.createElement(a,{color:"info"},"\u5F53\u524D\u72B6\u6001\uFF1A",P),d.createElement(r,{onOpen:function(){C("\u6253\u5F00\u4E0B\u62C9\u9009\u62E9\u5668")},onClose:function(){C("\u5173\u95ED\u4E0B\u62C9\u9009\u62E9\u5668")},placeholder:"\u4E0B\u62C9\u9009\u62E9"},m.map(function(O,T){return d.createElement(t,{key:T,value:O.value,label:O.label})})))}});case 14:case"end":return f.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-select-demo-en-us-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Alert, Select, SelectOption, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

export default () => {
  const [curValue, setCurValue] = useState('\u521D\u59CB\u5316');

  return (
    <Stack alignItems="stretch" style={{ background: '#eee', padding: '50px' }}>
      <Alert color="info">\u5F53\u524D\u72B6\u6001\uFF1A{curValue}</Alert>
      <Select
        onOpen={() => {
          setCurValue('\u6253\u5F00\u4E0B\u62C9\u9009\u62E9\u5668');
        }}
        onClose={() => {
          setCurValue('\u5173\u95ED\u4E0B\u62C9\u9009\u62E9\u5668');
        }}
        placeholder="\u4E0B\u62C9\u9009\u62E9"
      >
        {options.map((item, index) => (
          <SelectOption key={index} value={item.value} label={item.label} />
        ))}
      </Select>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}}}},77995:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return x}});var M=e(90228),c=e.n(M),A=e(87999),p=e.n(A),y=e(75271),x={"packages-bui-core-src-skeleton-demo-en-us-0":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=l.sent,i=I.default,l.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=l.sent,a=o.Skeleton,r=o.Stack,l.abrupt("return",{default:function(){return i.createElement(r,null,i.createElement(a,{width:210}),i.createElement(a,{width:240}))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-skeleton-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Skeleton, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Skeleton width={210} />
      <Skeleton width={240} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-skeleton-demo-en-us-1":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=l.sent,i=I.default,l.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=l.sent,a=o.Skeleton,r=o.Stack,l.abrupt("return",{default:function(){return i.createElement(r,{spacing:"10px"},i.createElement(a,{variant:"text",width:210}),i.createElement(a,{variant:"circular",width:48,height:48}),i.createElement(a,{variant:"rectangular",width:210,height:40}),i.createElement(a,{variant:"rounded",width:210,height:40}))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-skeleton-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Skeleton, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Stack spacing="10px">
      <Skeleton variant="text" width={210} />
      <Skeleton variant="circular" width={48} height={48} />
      <Skeleton variant="rectangular" width={210} height={40} />
      <Skeleton variant="rounded" width={210} height={40} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-skeleton-demo-en-us-2":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=l.sent,i=I.default,l.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=l.sent,a=o.Skeleton,r=o.Stack,l.abrupt("return",{default:function(){return i.createElement(r,null,i.createElement(a,{width:210}),i.createElement(a,{animation:"pulse",width:210}),i.createElement(a,{animation:!1,width:210}))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-skeleton-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Skeleton, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <Skeleton width={210} />
      <Skeleton animation="pulse" width={210} />
      <Skeleton animation={false} width={210} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-skeleton-demo-en-us-3":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=l.sent,i=I.default,l.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=l.sent,a=o.Skeleton,r=o.Stack,l.abrupt("return",{default:function(){return i.createElement(r,null,i.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:"12px"}},i.createElement(a,{variant:"circular",style:{margin:"0 6px 0 0",width:"48px",height:"48px"}}),i.createElement("div",null,i.createElement(a,{width:"50%",style:{width:"210px"}}),i.createElement(a,{width:"50%",style:{width:"210px"}}))))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-skeleton-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Skeleton, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Stack>
      <div
        style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}
      >
        <Skeleton
          variant="circular"
          style={{ margin: '0 6px 0 0', width: '48px', height: '48px' }}
        />
        <div>
          <Skeleton width="50%" style={{ width: '210px' }} />
          <Skeleton width="50%" style={{ width: '210px' }} />
        </div>
      </div>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-skeleton-demo-en-us-4":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=l.sent,i=I.default,l.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=l.sent,a=o.Skeleton,r=o.Stack,l.abrupt("return",{default:function(){return i.createElement(r,{spacing:"10px"},i.createElement(a,{variant:"circular"},i.createElement("div",{style:{height:"80px",width:"80px"}})),i.createElement(a,{variant:"circular"},i.createElement("div",{style:{height:"100px",width:"100px"}})))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-skeleton-demo-en-us-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Skeleton, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Stack spacing="10px">
      <Skeleton variant="circular">
        <div style={{ height: '80px', width: '80px' }} />
      </Skeleton>
      <Skeleton variant="circular">
        <div style={{ height: '100px', width: '100px' }} />
      </Skeleton>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}}}},22206:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return I}});var M=e(90228),c=e.n(M),A=e(48305),p=e.n(A),y=e(87999),x=e.n(y),u=e(75271),I={"packages-bui-core-src-slide-demo-en-us-0":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=m.sent,a=o.default,r=o.useState,m.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=m.sent,l=t.Button,n=t.Slide,d=t.Stack,m.abrupt("return",{default:function(){var f=r(!1),g=p()(f,2),b=g[0],E=g[1];return a.createElement(d,null,a.createElement(l,{onClick:function(){E(function(C){return!C})}},"\u70B9\u51FB\u6539\u53D8in\u5C5E\u6027"),a.createElement(d,null,["down","left","right","up"].map(function(P,C){return a.createElement("div",{style:{overflow:"hidden"}},a.createElement(n,{in:b,direction:P,timeout:{enter:800,exit:1e3},delay:200*C},a.createElement("div",null,"\u6ED1\u52A8\u6548\u679C",P)))})))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-slide-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Button, Slide, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        \u70B9\u51FB\u6539\u53D8in\u5C5E\u6027
      </Button>
      <Stack>
        {['down', 'left', 'right', 'up'].map((direction, index) => (
          <div style={{ overflow: 'hidden' }}>
            <Slide
              in={open}
              direction={direction}
              timeout={{
                enter: 800,
                exit: 1000,
              }}
              delay={200 * index}
            >
              <div>\u6ED1\u52A8\u6548\u679C{direction}</div>
            </Slide>
          </div>
        ))}
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-slide-demo-en-us-1":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=m.sent,a=o.default,r=o.useState,m.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=m.sent,l=t.Button,n=t.Slide,d=t.Stack,m.abrupt("return",{default:function(){var f=r(!0),g=p()(f,2),b=g[0],E=g[1];return a.createElement(d,null,a.createElement(l,{onClick:function(){E(function(C){return!C})}},"\u70B9\u51FB\u6302\u8F7D/\u5378\u8F7D\u7EC4\u4EF6"),b&&a.createElement(n,{appear:!0,in:!0,direction:"up",timeout:{enter:2e3,exit:1e3}},a.createElement("div",null,"\u6ED1\u52A8\u6548\u679CAppear")))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-slide-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Button, Slide, Stack } from '@bifrostui/react';

export default () => {
  const [open, setOpen] = useState(true);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        \u70B9\u51FB\u6302\u8F7D/\u5378\u8F7D\u7EC4\u4EF6
      </Button>
      {open && (
        <Slide
          appear
          in
          direction="up"
          timeout={{
            enter: 2000,
            exit: 1000,
          }}
        >
          <div>\u6ED1\u52A8\u6548\u679CAppear</div>
        </Slide>
      )}
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}}}},31035:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return I}});var M=e(90228),c=e.n(M),A=e(48305),p=e.n(A),y=e(87999),x=e.n(y),u=e(75271),I={"packages-bui-core-src-slider-demo-en-us-0":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=s.sent,a=o.Slider,r=o.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(18),f=p()(h,2),g=f[0],b=f[1],E=function(C,O){b(O.value)};return l.createElement(r,{style:{padding:"0 30px"}},l.createElement(a,{value:g,onChange:E}))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-slider-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Slider, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(18);
  const handleChange = (e, data) => {
    setValue(data.value);
  };

  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider value={value} onChange={handleChange} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-slider-demo-en-us-1":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=s.sent,a=o.Slider,r=o.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(29),f=p()(h,2),g=f[0],b=f[1],E=function(C,O){b(O.value)};return l.createElement(r,{style:{padding:"0 30px"}},l.createElement(a,{value:g,min:10,max:60,onChange:E}))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-slider-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Slider, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(29);
  const handleChange = (e, data) => {
    setValue(data.value);
  };

  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider value={value} min={10} max={60} onChange={handleChange} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-slider-demo-en-us-2":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=s.sent,a=o.Slider,r=o.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(0),f=p()(h,2),g=f[0],b=f[1],E=function(C,O){b(O.value)};return l.createElement(r,{style:{padding:"0 30px"}},l.createElement(a,{value:g,step:10,onChange:E}))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-slider-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Slider, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(0);
  const handleChange = (e, data) => {
    setValue(data.value);
  };

  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider value={value} step={10} onChange={handleChange} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-slider-demo-en-us-3":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=s.sent,a=o.Slider,r=o.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(29),f=p()(h,2),g=f[0],b=f[1],E=function(C,O){b(O.value)};return l.createElement(r,{style:{padding:"0 30px"}},l.createElement(a,{value:g,tipVisible:!0,onChange:E}))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-slider-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Slider, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState(29);
  const handleChange = (e, data) => {
    setValue(data.value);
  };

  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider value={value} tipVisible onChange={handleChange} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-slider-demo-en-us-4":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=s.sent,a=o.Slider,r=o.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n([0,20]),f=p()(h,2),g=f[0],b=f[1],E=function(C,O){b(O.value)};return l.createElement(r,{style:{padding:"0 30px"}},l.createElement(a,{value:g,onChange:E}))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-slider-demo-en-us-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Slider, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState<[number, number]>([0, 20]);
  const handleChange = (e, data) => {
    setValue(data.value);
  };

  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider value={value} onChange={handleChange} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-slider-demo-en-us-5":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=s.sent,a=o.Slider,r=o.Stack,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n([0,20]),f=p()(h,2),g=f[0],b=f[1],E=function(C,O){console.log("123",O.value),b(O.value)};return l.createElement(r,{style:{padding:"0 30px"}},l.createElement(a,{value:g,disableSwap:!0,onChange:E}))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-slider-demo-en-us-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Slider, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState<[number, number]>([0, 20]);
  const handleChange = (e, data) => {
    console.log('123', data.value);
    setValue(data.value);
  };

  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider value={value} disableSwap onChange={handleChange} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-slider-demo-en-us-6":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d,s;return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=h.sent,a=o.default,h.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=h.sent,t=r.Slider,l=r.Stack,h.next=11,e.e(9975).then(e.bind(e,29975));case 11:return n=h.sent,d=n.StarFilledIcon,s=n.StarOutlinedIcon,h.abrupt("return",{default:function(){var g=[20,60];return a.createElement(l,{style:{padding:"0 30px"}},a.createElement(t,{startIcon:a.createElement(d,{htmlColor:"#ff335c"}),endIcon:a.createElement(s,{htmlColor:"#00d68f"}),defaultValue:g}))}});case 15:case"end":return h.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-slider-demo-en-us-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Slider, SliderValue, Stack } from '@bifrostui/react';
import { StarFilledIcon, StarOutlinedIcon } from '@bifrostui/icons';

export default () => {
  const defaultValue: SliderValue = [20, 60];
  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider
        startIcon={<StarFilledIcon htmlColor="#ff335c" />}
        endIcon={<StarOutlinedIcon htmlColor="#00d68f" />}
        defaultValue={defaultValue}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-slider-demo-en-us-7":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l;return c()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=d.sent,a=o.Slider,r=o.Stack,d.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=d.sent,l=t.default,d.abrupt("return",{default:function(){return l.createElement(r,{style:{padding:"0 30px"}},l.createElement(a,{defaultValue:50,disabled:!0}))}});case 10:case"end":return d.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-slider-demo-en-us-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Slider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider defaultValue={50} disabled />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-slider-demo-en-us-8":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=m.sent,a=o.Slider,r=o.Stack,m.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=m.sent,l=t.default,n=t.useState,d=function(f){var g=Math.floor(f),b=g>=10?g:"0".concat(g),E=f%1===0?"00":"30";return"".concat(b,":").concat(E)},m.abrupt("return",{default:function(){var f=n(24),g=p()(f,2),b=g[0],E=g[1],P=function(O,T){E(T==null?void 0:T.value)};return l.createElement(r,{style:{padding:"0 30px"}},l.createElement(a,{min:0,max:24,step:.5,value:b,tooltipRender:d,onChange:P}))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-slider-demo-en-us-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Slider, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

const tooltipRender = (value) => {
  const temp = Math.floor(value);
  const hour = temp >= 10 ? temp : \`0\${temp}\`;
  const min = value % 1 === 0 ? '00' : '30';
  return \`\${hour}:\${min}\`;
};

export default () => {
  const [value, setValue] = useState(24);
  const handleChange = (e, data) => {
    setValue(data?.value);
  };

  return (
    <Stack style={{ padding: '0 30px' }}>
      <Slider
        min={0}
        max={24}
        step={0.5}
        value={value}
        tooltipRender={tooltipRender}
        onChange={handleChange}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}}}},74745:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return u}});var M=e(90228),c=e.n(M),A=e(87999),p=e.n(A),y=e(75271),x=e(22100),u={"packages-bui-core-src-stack-demo-stackdemo":{component:y.memo(y.lazy(function(){return Promise.all([e.e(3605),e.e(7040),e.e(2433)]).then(e.bind(e,74558))})),asset:{type:"BLOCK",id:"packages-bui-core-src-stack-demo-stackdemo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(37794).Z},react:{type:"NPM",value:"18.3.1"},"./index.less":{type:"FILE",value:e(72483).Z}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2)),"/home/runner/work/bifrostui/bifrostui/packages/bui-core/src/Stack/demo/index.less":x},renderOpts:{compile:function(){var I=p()(c()().mark(function o(){var a,r=arguments;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(1212).then(e.bind(e,61212));case 2:return l.abrupt("return",(a=l.sent).default.apply(a,r));case 3:case"end":return l.stop()}},o)}));function i(){return I.apply(this,arguments)}return i}()}},"packages-bui-core-src-stack-demo-en-us-0":{component:y.memo(y.lazy(p()(c()().mark(function I(){var i,o,a,r,t,l;return c()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return i=d.sent,o=i.Button,a=i.Divider,r=i.Stack,d.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return t=d.sent,l=t.default,d.abrupt("return",{default:function(){return l.createElement(r,null,l.createElement(r,{divider:l.createElement(a,{direction:"horizontal"}),spacing:"10px",style:{width:"100px"}},l.createElement(o,null,"\u6309\u94AE1"),l.createElement(o,null,"\u6309\u94AE2"),l.createElement(o,null,"\u6309\u94AE3")))}});case 11:case"end":return d.stop()}},I)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-stack-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Divider, Stack } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Stack
        divider={<Divider direction="horizontal" />}
        spacing="10px"
        style={{ width: '100px' }}
      >
        <Button>\u6309\u94AE1</Button>
        <Button>\u6309\u94AE2</Button>
        <Button>\u6309\u94AE3</Button>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var I=p()(c()().mark(function o(){var a,r=arguments;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(1212).then(e.bind(e,61212));case 2:return l.abrupt("return",(a=l.sent).default.apply(a,r));case 3:case"end":return l.stop()}},o)}));function i(){return I.apply(this,arguments)}return i}()}}}},89165:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return x}});var M=e(90228),c=e.n(M),A=e(87999),p=e.n(A),y=e(75271),x={"packages-bui-core-src-steps-demo-en-us-0":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=n.sent,i=I.Stack,o=I.Step,a=I.Steps,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){var s=function(h,f){console.log(h,f)};return t.createElement(i,null,t.createElement("div",{style:{width:"120px"}},t.createElement(a,{onChange:s},t.createElement(o,{key:1,title:"\u7B2C\u4E00\u6B65"}),t.createElement(o,{key:2,title:"\u7B2C\u4E8C\u6B65"}),t.createElement(o,{key:3,title:"\u7B2C\u4E09\u6B65"}))))}});case 11:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-steps-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

export default () => {
  const handleChange = (e, data) => {
    console.log(e, data);
  };

  return (
    <Stack>
      <div style={{ width: '120px' }}>
        <Steps onChange={handleChange}>
          <Step key={1} title="\u7B2C\u4E00\u6B65" />
          <Step key={2} title="\u7B2C\u4E8C\u6B65" />
          <Step key={3} title="\u7B2C\u4E09\u6B65" />
        </Steps>
      </div>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-steps-demo-en-us-1":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=n.sent,i=I.Stack,o=I.Step,a=I.Steps,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){return t.createElement(i,null,t.createElement(a,{direction:"horizontal"},t.createElement(o,{key:1,title:"\u7B2C\u4E00\u6B65"}),t.createElement(o,{key:2,title:"\u7B2C\u4E8C\u6B65"}),t.createElement(o,{key:3,title:"\u7B2C\u4E09\u6B65"})))}});case 11:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-steps-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Steps direction="horizontal">
        <Step key={1} title="\u7B2C\u4E00\u6B65" />
        <Step key={2} title="\u7B2C\u4E8C\u6B65" />
        <Step key={3} title="\u7B2C\u4E09\u6B65" />
      </Steps>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-steps-demo-en-us-2":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=n.sent,i=I.Stack,o=I.Step,a=I.Steps,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){return t.createElement(i,null,t.createElement(a,null,t.createElement(o,{key:1,title:"\u7B2C\u4E00\u6B65",subtitle:"\u526F\u6807\u9898 1"}),t.createElement(o,{key:2,title:"\u7B2C\u4E8C\u6B65",subtitle:"\u526F\u6807\u9898 2"}),t.createElement(o,{key:3,title:"\u7B2C\u4E09\u6B65",subtitle:"\u526F\u6807\u9898 3"})),t.createElement(a,{labelPlacement:"vertical"},t.createElement(o,{key:1,title:"\u7B2C\u4E00\u6B65",subtitle:"\u526F\u6807\u9898 1"}),t.createElement(o,{key:2,title:"\u7B2C\u4E8C\u6B65",subtitle:"\u526F\u6807\u9898 2"}),t.createElement(o,{key:3,title:"\u7B2C\u4E09\u6B65",subtitle:"\u526F\u6807\u9898 3"})))}});case 11:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-steps-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Steps>
        <Step key={1} title="\u7B2C\u4E00\u6B65" subtitle="\u526F\u6807\u9898 1" />
        <Step key={2} title="\u7B2C\u4E8C\u6B65" subtitle="\u526F\u6807\u9898 2" />
        <Step key={3} title="\u7B2C\u4E09\u6B65" subtitle="\u526F\u6807\u9898 3" />
      </Steps>
      <Steps labelPlacement="vertical">
        <Step key={1} title="\u7B2C\u4E00\u6B65" subtitle="\u526F\u6807\u9898 1" />
        <Step key={2} title="\u7B2C\u4E8C\u6B65" subtitle="\u526F\u6807\u9898 2" />
        <Step key={3} title="\u7B2C\u4E09\u6B65" subtitle="\u526F\u6807\u9898 3" />
      </Steps>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-steps-demo-en-us-3":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=n.sent,i=I.Stack,o=I.Step,a=I.Steps,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){return t.createElement(i,null,t.createElement(a,null,t.createElement(o,{key:1,title:"\u6807\u9898 1",subtitle:"\u526F\u6807\u9898 1",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"}),t.createElement(o,{key:2,title:"\u6807\u9898 2",subtitle:"\u526F\u6807\u9898 2",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"}),t.createElement(o,{key:3,title:"\u6807\u9898 3",subtitle:"\u526F\u6807\u9898 3",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"}),t.createElement(o,{key:4,title:"\u6807\u9898 4",subtitle:"\u526F\u6807\u9898 4",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"})))}});case 11:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-steps-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Steps>
        <Step
          key={1}
          title="\u6807\u9898 1"
          subtitle="\u526F\u6807\u9898 1"
          description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"
        />
        <Step
          key={2}
          title="\u6807\u9898 2"
          subtitle="\u526F\u6807\u9898 2"
          description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"
        />
        <Step
          key={3}
          title="\u6807\u9898 3"
          subtitle="\u526F\u6807\u9898 3"
          description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"
        />
        <Step
          key={4}
          title="\u6807\u9898 4"
          subtitle="\u526F\u6807\u9898 4"
          description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"
        />
      </Steps>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-steps-demo-en-us-4":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=n.sent,i=I.Stack,o=I.Step,a=I.Steps,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){return t.createElement(i,null,t.createElement(a,null,t.createElement(o,{key:1,title:"\u6807\u9898 1",subtitle:"\u526F\u6807\u9898 1",status:"error",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"}),t.createElement(o,{key:2,title:"\u6807\u9898 2",subtitle:"\u526F\u6807\u9898 2",status:"finish",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"}),t.createElement(o,{key:3,title:"\u6807\u9898 3",subtitle:"\u526F\u6807\u9898 3",status:"active",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"}),t.createElement(o,{key:4,title:"\u6807\u9898 4",subtitle:"\u526F\u6807\u9898 4",status:"wait",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"})))}});case 11:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-steps-demo-en-us-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Steps>
        <Step
          key={1}
          title="\u6807\u9898 1"
          subtitle="\u526F\u6807\u9898 1"
          status="error"
          description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"
        />
        <Step
          key={2}
          title="\u6807\u9898 2"
          subtitle="\u526F\u6807\u9898 2"
          status="finish"
          description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"
        />
        <Step
          key={3}
          title="\u6807\u9898 3"
          subtitle="\u526F\u6807\u9898 3"
          status="active"
          description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"
        />
        <Step
          key={4}
          title="\u6807\u9898 4"
          subtitle="\u526F\u6807\u9898 4"
          status="wait"
          description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"
        />
      </Steps>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-steps-demo-en-us-5":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t,l,n,d,s,m;return c()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return I=f.sent,i=I.default,f.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return o=f.sent,a=o.Stack,r=o.Step,t=o.Steps,f.next=12,e.e(9975).then(e.bind(e,29975));case 12:return l=f.sent,n=l.AccessTimeCircleFilledIcon,d=l.ErrorCircleOutlinedIcon,s=l.HeartFilledIcon,m=l.LocationFilledIcon,f.abrupt("return",{default:function(){return i.createElement(a,null,i.createElement(t,null,i.createElement(r,{key:1,title:"\u6807\u9898 1",subtitle:"\u526F\u6807\u9898 1",icon:i.createElement(s,{color:"primary"}),description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"}),i.createElement(r,{key:2,title:"\u6807\u9898 2",subtitle:"\u526F\u6807\u9898 2",status:"active",icon:i.createElement(m,{color:"primary"}),description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"}),i.createElement(r,{key:3,title:"\u6807\u9898 3",subtitle:"\u526F\u6807\u9898 3",status:"error",icon:i.createElement(d,{color:"primary"}),description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"}),i.createElement(r,{key:4,title:"\u6807\u9898 4",subtitle:"\u526F\u6807\u9898 4",status:"wait",icon:i.createElement(n,{color:"primary"}),description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"})))}});case 18:case"end":return f.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-steps-demo-en-us-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, Step, Steps } from '@bifrostui/react';
import {
  AccessTimeCircleFilledIcon,
  ErrorCircleOutlinedIcon,
  HeartFilledIcon,
  LocationFilledIcon,
} from '@bifrostui/icons';

export default () => {
  return (
    <Stack>
      <Steps>
        <Step
          key={1}
          title="\u6807\u9898 1"
          subtitle="\u526F\u6807\u9898 1"
          icon={<HeartFilledIcon color="primary" />}
          description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"
        />
        <Step
          key={2}
          title="\u6807\u9898 2"
          subtitle="\u526F\u6807\u9898 2"
          status="active"
          icon={<LocationFilledIcon color="primary" />}
          description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"
        />
        <Step
          key={3}
          title="\u6807\u9898 3"
          subtitle="\u526F\u6807\u9898 3"
          status="error"
          icon={<ErrorCircleOutlinedIcon color="primary" />}
          description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"
        />
        <Step
          key={4}
          title="\u6807\u9898 4"
          subtitle="\u526F\u6807\u9898 4"
          status="wait"
          icon={<AccessTimeCircleFilledIcon color="primary" />}
          description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"
        />
      </Steps>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-steps-demo-en-us-6":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=n.sent,i=I.Stack,o=I.Step,a=I.Steps,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){var s=function(h,f){console.log(h,f)};return t.createElement(i,null,t.createElement(a,{direction:"horizontal",current:1,onChange:s},t.createElement(o,{key:1,title:"\u7B2C\u4E00\u6B65",status:"error",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848",disabled:!0}),t.createElement(o,{key:2,title:"\u7B2C\u4E8C\u6B65"}),t.createElement(o,{key:3,title:"\u7B2C\u4E09\u6B65",subtitle:"\u526F\u6807\u9898 3",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848",disabled:!0})))}});case 11:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-steps-demo-en-us-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

export default () => {
  const handleChange = (e, data) => {
    console.log(e, data);
  };

  return (
    <Stack>
      <Steps direction="horizontal" current={1} onChange={handleChange}>
        <Step
          key={1}
          title="\u7B2C\u4E00\u6B65"
          status="error"
          description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"
          disabled
        />
        <Step key={2} title="\u7B2C\u4E8C\u6B65" />
        <Step
          key={3}
          title="\u7B2C\u4E09\u6B65"
          subtitle="\u526F\u6807\u9898 3"
          description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u6587\u6848"
          disabled
        />
      </Steps>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-steps-demo-en-us-7":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t,l;return c()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=d.sent,i=I.Stack,o=I.Step,a=I.Steps,d.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return r=d.sent,t=r.default,l=function(){return t.createElement(i,{style:{"--align-items":"flex-start"}},t.createElement("div",{style:{backgroundColor:"var(--bui-color-bg-view)",width:"220px",height:"80px",borderRadius:"10px",display:"flex",flexDirection:"column",justifyContent:"space-around",padding:"5px 10px",margin:"5px 0 20px"}},t.createElement("div",null,t.createElement("span",{style:{color:"#5F6672"}},"\u9000\u7968\u7535\u5F71"),t.createElement("span",{style:{color:"#2E333E",paddingLeft:"20px"}},"\u590D\u4EC7\u8005\u8054\u76DF3\uFF083\u5F20\uFF09")),t.createElement("div",null,t.createElement("span",{style:{color:"#5F6672"}},"\u9000\u7968\u91D1\u989D"),t.createElement("span",{style:{color:"#2E333E",paddingLeft:"20px"}},"38.9\u5143")),t.createElement("div",null,t.createElement("span",{style:{color:"#5F6672"}},"\u670D\u52A1\u8D39"),t.createElement("span",{style:{color:"#2E333E",paddingLeft:"34px"}},"4\u5143\uFF08\u5F71\u9662\u3001\u6DD8\u7968\u7968\u6536\u53D6\uFF09"))))},d.abrupt("return",{default:function(){return t.createElement(a,{labelPlacement:"vertical"},t.createElement(o,{key:1,title:"\u9000\u6B3E\u7533\u8BF7 \u5DF2\u63D0\u4EA4",subtitle:"2021-03-30 19:00 ",description:l()}),t.createElement(o,{key:2,title:"\u9000\u6B3E\u7533\u8BF7 \u5DF2\u63D0\u4EA4",subtitle:"2021-03-30 19:08 ",description:"\u6B63\u5728\u5904\u7406\u9000\u6B3E\u7533\u8BF7\uFF0C\u9884\u8BA11-3\u5929\u539F\u8DEF\u8FD4\u56DE\u81F3\u4F60\u7684\u4ED8\u6B3E\u8D26\u6237\u3002"}),t.createElement(o,{key:3,title:"\u9000\u6B3E\u5B8C\u6210",subtitle:"2021-03-30 19:08 ",description:"\u9000\u6B3E\u5230\u8D26\u540E\uFF0C\u5C06\u7ED3\u675F\u672C\u6B21\u9000\u6B3E\u6D41\u7A0B\u3002"}))}});case 12:case"end":return d.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-steps-demo-en-us-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

const detail = () => {
  return (
    <Stack style={{ '--align-items': 'flex-start' }}>
      <div
        style={{
          backgroundColor: 'var(--bui-color-bg-view)',
          width: '220px',
          height: '80px',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          padding: '5px 10px',
          margin: '5px 0 20px',
        }}
      >
        <div>
          <span style={{ color: '#5F6672' }}>\u9000\u7968\u7535\u5F71</span>
          <span style={{ color: '#2E333E', paddingLeft: '20px' }}>
            \u590D\u4EC7\u8005\u8054\u76DF3\uFF083\u5F20\uFF09
          </span>
        </div>
        <div>
          <span style={{ color: '#5F6672' }}>\u9000\u7968\u91D1\u989D</span>
          <span style={{ color: '#2E333E', paddingLeft: '20px' }}>38.9\u5143</span>
        </div>
        <div>
          <span style={{ color: '#5F6672' }}>\u670D\u52A1\u8D39</span>
          <span style={{ color: '#2E333E', paddingLeft: '34px' }}>
            4\u5143\uFF08\u5F71\u9662\u3001\u6DD8\u7968\u7968\u6536\u53D6\uFF09
          </span>
        </div>
      </div>
    </Stack>
  );
};

export default () => {
  return (
    <Steps labelPlacement="vertical">
      <Step
        key={1}
        title="\u9000\u6B3E\u7533\u8BF7 \u5DF2\u63D0\u4EA4"
        subtitle="2021-03-30 19:00 "
        description={detail()}
      />
      <Step
        key={2}
        title="\u9000\u6B3E\u7533\u8BF7 \u5DF2\u63D0\u4EA4"
        subtitle="2021-03-30 19:08 "
        description="\u6B63\u5728\u5904\u7406\u9000\u6B3E\u7533\u8BF7\uFF0C\u9884\u8BA11-3\u5929\u539F\u8DEF\u8FD4\u56DE\u81F3\u4F60\u7684\u4ED8\u6B3E\u8D26\u6237\u3002"
      />
      <Step
        key={3}
        title="\u9000\u6B3E\u5B8C\u6210"
        subtitle="2021-03-30 19:08 "
        description="\u9000\u6B3E\u5230\u8D26\u540E\uFF0C\u5C06\u7ED3\u675F\u672C\u6B21\u9000\u6B3E\u6D41\u7A0B\u3002"
      />
    </Steps>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-steps-demo-en-us-8":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=n.sent,i=I.Stack,o=I.Step,a=I.Steps,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){return t.createElement(i,null,t.createElement("div",{style:{width:"176px"}},t.createElement(a,{style:{"--title-font-size":"30px","--step-icon-margin":"12px 4px 0 0","--step-line-padding":"36px 0 0 0"}},t.createElement(o,{key:1,title:"\u7B2C\u4E00\u6B65"}),t.createElement(o,{key:2,title:"\u7B2C\u4E8C\u6B65"}),t.createElement(o,{key:3,title:"\u7B2C\u4E09\u6B65"}))))}});case 11:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-steps-demo-en-us-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Step, Steps } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack>
      <div style={{ width: '176px' }}>
        <Steps
          style={{
            '--title-font-size': '30px',
            '--step-icon-margin': '12px 4px 0 0',
            '--step-line-padding': '36px 0 0 0',
          }}
        >
          <Step key={1} title="\u7B2C\u4E00\u6B65" />
          <Step key={2} title="\u7B2C\u4E8C\u6B65" />
          <Step key={3} title="\u7B2C\u4E09\u6B65" />
        </Steps>
      </div>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}}}},27561:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return I}});var M=e(48305),c=e.n(M),A=e(90228),p=e.n(A),y=e(87999),x=e.n(y),u=e(75271),I={"packages-bui-core-src-swiper-demo-en-us-0":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=s.sent,a=o.default,s.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=s.sent,t=r.Swiper,l=r.SwiperItem,n=r.Stack,s.abrupt("return",{default:function(){return a.createElement(t,{style:{width:"300px",height:"200px"}},a.createElement(l,null,a.createElement(n,{style:{background:"lightgray",width:"100%",height:"100%"}},"1")),a.createElement(l,null,a.createElement(n,{style:{background:"gray",width:"100%",height:"100%"}},"2")),a.createElement(l,null,a.createElement(n,{style:{background:"darkgray",width:"100%",height:"100%"}},"3")))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-swiper-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Swiper, SwiperItem, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Swiper style={{ width: '300px', height: '200px' }}>
      <SwiperItem>
        <Stack
          style={{ background: 'lightgray', width: '100%', height: '100%' }}
        >
          1
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack style={{ background: 'gray', width: '100%', height: '100%' }}>
          2
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack
          style={{ background: 'darkgray', width: '100%', height: '100%' }}
        >
          3
        </Stack>
      </SwiperItem>
    </Swiper>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-swiper-demo-en-us-1":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d,s;return p()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=h.sent,a=o.default,r=o.useState,h.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=h.sent,l=t.Swiper,n=t.SwiperItem,d=t.Stack,s=t.Button,h.abrupt("return",{default:function(){var g=r(1),b=c()(g,2),E=b[0],P=b[1];return a.createElement(a.Fragment,null,a.createElement(d,{direction:"row",spacing:"8px"},a.createElement(s,{onClick:function(){return P(0)}},"\u5207\u6362\u52301"),a.createElement(s,{onClick:function(){return P(1)}},"\u5207\u6362\u52302"),a.createElement(s,{onClick:function(){return P(2)}},"\u5207\u6362\u52303")),a.createElement(l,{current:E,onChange:function(O){P(O.detail.current)},style:{width:"300px",height:"200px"}},a.createElement(n,null,a.createElement(d,{style:{background:"lightgray",width:"100%",height:"100%"}},"1")),a.createElement(n,null,a.createElement(d,{style:{background:"gray",width:"100%",height:"100%"}},"2")),a.createElement(n,null,a.createElement(d,{style:{background:"darkgray",width:"100%",height:"100%"}},"3"))))}});case 13:case"end":return h.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-swiper-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Swiper, SwiperItem, Stack, Button } from '@bifrostui/react';

export default () => {
  const [cur, setCur] = useState(1);
  return (
    <>
      <Stack direction="row" spacing="8px">
        <Button onClick={() => setCur(0)}>\u5207\u6362\u52301</Button>
        <Button onClick={() => setCur(1)}>\u5207\u6362\u52302</Button>
        <Button onClick={() => setCur(2)}>\u5207\u6362\u52303</Button>
      </Stack>
      <Swiper
        current={cur}
        onChange={(e) => {
          setCur(e.detail.current);
        }}
        style={{ width: '300px', height: '200px' }}
      >
        <SwiperItem>
          <Stack
            style={{ background: 'lightgray', width: '100%', height: '100%' }}
          >
            1
          </Stack>
        </SwiperItem>
        <SwiperItem>
          <Stack style={{ background: 'gray', width: '100%', height: '100%' }}>
            2
          </Stack>
        </SwiperItem>
        <SwiperItem>
          <Stack
            style={{ background: 'darkgray', width: '100%', height: '100%' }}
          >
            3
          </Stack>
        </SwiperItem>
      </Swiper>
    </>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-swiper-demo-en-us-2":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=s.sent,a=o.default,s.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=s.sent,t=r.Swiper,l=r.SwiperItem,n=r.Stack,s.abrupt("return",{default:function(){return a.createElement(t,{interval:500,autoplay:!0,style:{width:"300px",height:"200px"}},a.createElement(l,null,a.createElement(n,{style:{background:"lightgray",width:"100%",height:"100%"}},"1")),a.createElement(l,null,a.createElement(n,{style:{background:"gray",width:"100%",height:"100%"}},"2")),a.createElement(l,null,a.createElement(n,{style:{background:"darkgray",width:"100%",height:"100%"}},"3")))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-swiper-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Swiper, SwiperItem, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Swiper interval={500} autoplay style={{ width: '300px', height: '200px' }}>
      <SwiperItem>
        <Stack
          style={{ background: 'lightgray', width: '100%', height: '100%' }}
        >
          1
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack style={{ background: 'gray', width: '100%', height: '100%' }}>
          2
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack
          style={{ background: 'darkgray', width: '100%', height: '100%' }}
        >
          3
        </Stack>
      </SwiperItem>
    </Swiper>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-swiper-demo-en-us-3":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=s.sent,a=o.default,s.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=s.sent,t=r.Swiper,l=r.SwiperItem,n=r.Stack,s.abrupt("return",{default:function(){return a.createElement(t,{circular:!0,interval:500,autoplay:!0,style:{width:"300px",height:"200px"}},a.createElement(l,null,a.createElement(n,{style:{background:"lightgray",width:"100%",height:"100%"}},"1")),a.createElement(l,null,a.createElement(n,{style:{background:"gray",width:"100%",height:"100%"}},"2")),a.createElement(l,null,a.createElement(n,{style:{background:"darkgray",width:"100%",height:"100%"}},"3")))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-swiper-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Swiper, SwiperItem, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Swiper
      circular
      interval={500}
      autoplay
      style={{ width: '300px', height: '200px' }}
    >
      <SwiperItem>
        <Stack
          style={{ background: 'lightgray', width: '100%', height: '100%' }}
        >
          1
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack style={{ background: 'gray', width: '100%', height: '100%' }}>
          2
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack
          style={{ background: 'darkgray', width: '100%', height: '100%' }}
        >
          3
        </Stack>
      </SwiperItem>
    </Swiper>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-swiper-demo-en-us-4":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=s.sent,a=o.default,s.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=s.sent,t=r.Swiper,l=r.SwiperItem,n=r.Stack,s.abrupt("return",{default:function(){return a.createElement(t,{circular:!0,interval:500,autoplay:!0,effect:"fade",style:{width:"300px",height:"200px"}},a.createElement(l,null,a.createElement(n,{style:{background:"lightgray",width:"100%",height:"100%"}},"1")),a.createElement(l,null,a.createElement(n,{style:{background:"gray",width:"100%",height:"100%"}},"2")),a.createElement(l,null,a.createElement(n,{style:{background:"darkgray",width:"100%",height:"100%"}},"3")))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-swiper-demo-en-us-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Swiper, SwiperItem, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Swiper
      circular
      interval={500}
      autoplay
      effect={'fade'}
      style={{ width: '300px', height: '200px' }}
    >
      <SwiperItem>
        <Stack
          style={{ background: 'lightgray', width: '100%', height: '100%' }}
        >
          1
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack style={{ background: 'gray', width: '100%', height: '100%' }}>
          2
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack
          style={{ background: 'darkgray', width: '100%', height: '100%' }}
        >
          3
        </Stack>
      </SwiperItem>
    </Swiper>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-swiper-demo-en-us-5":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=s.sent,a=o.default,s.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=s.sent,t=r.Swiper,l=r.SwiperItem,n=r.Stack,s.abrupt("return",{default:function(){return a.createElement(t,{vertical:!0,interval:500,autoplay:!0,style:{width:"300px",height:"200px"}},a.createElement(l,null,a.createElement(n,{style:{background:"lightgray",width:"100%",height:"100%"}},"1")),a.createElement(l,null,a.createElement(n,{style:{background:"gray",width:"100%",height:"100%"}},"2")),a.createElement(l,null,a.createElement(n,{style:{background:"darkgray",width:"100%",height:"100%"}},"3")))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-swiper-demo-en-us-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Swiper, SwiperItem, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Swiper
      vertical
      interval={500}
      autoplay
      style={{ width: '300px', height: '200px' }}
    >
      <SwiperItem>
        <Stack
          style={{ background: 'lightgray', width: '100%', height: '100%' }}
        >
          1
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack style={{ background: 'gray', width: '100%', height: '100%' }}>
          2
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack
          style={{ background: 'darkgray', width: '100%', height: '100%' }}
        >
          3
        </Stack>
      </SwiperItem>
    </Swiper>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-swiper-demo-en-us-6":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=s.sent,a=o.default,s.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=s.sent,t=r.Swiper,l=r.SwiperItem,n=r.Stack,s.abrupt("return",{default:function(){return a.createElement(t,{interval:500,autoplay:!0,indicatorDots:!0,indicatorColor:"#880000",indicatorActiveColor:"#FF0000",style:{width:"300px",height:"200px"}},a.createElement(l,null,a.createElement(n,{style:{background:"lightgray",width:"100%",height:"100%"}},"1")),a.createElement(l,null,a.createElement(n,{style:{background:"gray",width:"100%",height:"100%"}},"2")),a.createElement(l,null,a.createElement(n,{style:{background:"darkgray",width:"100%",height:"100%"}},"3")))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-swiper-demo-en-us-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Swiper, SwiperItem, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Swiper
      interval={500}
      autoplay
      indicatorDots
      indicatorColor={'#880000'}
      indicatorActiveColor={'#FF0000'}
      style={{ width: '300px', height: '200px' }}
    >
      <SwiperItem>
        <Stack
          style={{ background: 'lightgray', width: '100%', height: '100%' }}
        >
          1
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack style={{ background: 'gray', width: '100%', height: '100%' }}>
          2
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack
          style={{ background: 'darkgray', width: '100%', height: '100%' }}
        >
          3
        </Stack>
      </SwiperItem>
    </Swiper>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-swiper-demo-en-us-7":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=s.sent,a=o.default,s.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=s.sent,t=r.Swiper,l=r.SwiperItem,n=r.Stack,s.abrupt("return",{default:function(){return a.createElement(t,{onChange:console.log,onAnimationFinish:console.log,style:{width:"300px",height:"200px"}},a.createElement(l,null,a.createElement(n,{style:{background:"lightgray",width:"100%",height:"100%"}},"1")),a.createElement(l,null,a.createElement(n,{style:{background:"gray",width:"100%",height:"100%"}},"2")),a.createElement(l,null,a.createElement(n,{style:{background:"darkgray",width:"100%",height:"100%"}},"3")))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-swiper-demo-en-us-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Swiper, SwiperItem, Stack } from '@bifrostui/react';

export default () => {
  return (
    <Swiper
      onChange={console.log}
      onAnimationFinish={console.log}
      style={{ width: '300px', height: '200px' }}
    >
      <SwiperItem>
        <Stack
          style={{ background: 'lightgray', width: '100%', height: '100%' }}
        >
          1
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack style={{ background: 'gray', width: '100%', height: '100%' }}>
          2
        </Stack>
      </SwiperItem>
      <SwiperItem>
        <Stack
          style={{ background: 'darkgray', width: '100%', height: '100%' }}
        >
          3
        </Stack>
      </SwiperItem>
    </Swiper>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}}}},33813:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return I}});var M=e(48305),c=e.n(M),A=e(90228),p=e.n(A),y=e(87999),x=e.n(y),u=e(75271),I={"packages-bui-core-src-switch-demo-en-us-0":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l;return p()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=d.sent,a=o.default,d.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=d.sent,t=r.Stack,l=r.Switch,d.abrupt("return",{default:function(){return a.createElement(t,null,a.createElement(l,null))}});case 10:case"end":return d.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-switch-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, Switch } from '@bifrostui/react';
export default () => {
  return (
    <Stack>
      <Switch />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-switch-demo-en-us-1":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l;return p()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=d.sent,a=o.default,d.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=d.sent,t=r.Stack,l=r.Switch,d.abrupt("return",{default:function(){return a.createElement(t,{spacing:"5px"},a.createElement(l,{color:"primary",defaultChecked:!0}),a.createElement(l,{color:"info",defaultChecked:!0}),a.createElement(l,{color:"success",defaultChecked:!0}),a.createElement(l,{color:"warning",defaultChecked:!0}),a.createElement(l,{color:"danger",defaultChecked:!0}))}});case 10:case"end":return d.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-switch-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, Switch } from '@bifrostui/react';
export default () => {
  return (
    <Stack spacing="5px">
      <Switch color="primary" defaultChecked />
      <Switch color="info" defaultChecked />
      <Switch color="success" defaultChecked />
      <Switch color="warning" defaultChecked />
      <Switch color="danger" defaultChecked />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-switch-demo-en-us-2":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l;return p()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=d.sent,a=o.default,d.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=d.sent,t=r.Stack,l=r.Switch,d.abrupt("return",{default:function(){return a.createElement(t,{spacing:"10px",direction:"row"},a.createElement(l,{size:"small"}),a.createElement(l,{size:"medium"}),a.createElement(l,{size:"large"}))}});case 10:case"end":return d.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-switch-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, Switch } from '@bifrostui/react';
export default () => {
  return (
    <Stack spacing="10px" direction="row">
      <Switch size="small" />
      <Switch size="medium" />
      <Switch size="large" />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-switch-demo-en-us-3":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d,s;return p()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=h.sent,a=o.default,h.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=h.sent,t=r.Stack,l=r.Switch,h.next=11,e.e(9975).then(e.bind(e,29975));case 11:return n=h.sent,d=n.MoonOutlinedIcon,s=n.SunOutlinedIcon,h.abrupt("return",{default:function(){return a.createElement(t,{spacing:"10px",direction:"row"},a.createElement(l,{defaultChecked:!0,checkedChildren:"\u5F00",unCheckedChildren:"\u5173"}),a.createElement(l,{defaultChecked:!0,checkedChildren:a.createElement(d,{htmlColor:"#fff"}),unCheckedChildren:a.createElement(s,{htmlColor:"#fff"})}),a.createElement(l,{defaultChecked:!0,checkedChildren:a.createElement(d,{htmlColor:"#fff"}),unCheckedChildren:a.createElement(s,{htmlColor:"#fff"}),size:"large"}))}});case 15:case"end":return h.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-switch-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, Switch } from '@bifrostui/react';
import { MoonOutlinedIcon, SunOutlinedIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack spacing="10px" direction="row">
      <Switch defaultChecked checkedChildren="\u5F00" unCheckedChildren="\u5173" />
      <Switch
        defaultChecked
        checkedChildren={<MoonOutlinedIcon htmlColor="#fff" />}
        unCheckedChildren={<SunOutlinedIcon htmlColor="#fff" />}
      />
      <Switch
        defaultChecked
        checkedChildren={<MoonOutlinedIcon htmlColor="#fff" />}
        unCheckedChildren={<SunOutlinedIcon htmlColor="#fff" />}
        size="large"
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-switch-demo-en-us-4":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=s.sent,a=o.default,r=o.useState,s.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=s.sent,l=t.Stack,n=t.Switch,s.abrupt("return",{default:function(){var h=r(!0),f=c()(h,2),g=f[0],b=f[1],E=function(C,O){b(O==null?void 0:O.checked),console.log("onChange",O)};return a.createElement(l,null,a.createElement(n,{checked:g,onChange:E}))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-switch-demo-en-us-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Stack, Switch } from '@bifrostui/react';

export default () => {
  const [checked, setChecked] = useState(true);
  const handleChange = (e, data) => {
    setChecked(data?.checked);
    console.log('onChange', data);
  };
  return (
    <Stack>
      <Switch checked={checked} onChange={handleChange} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-switch-demo-en-us-5":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=s.sent,a=o.default,r=o.useState,s.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=s.sent,l=t.Stack,n=t.Switch,s.abrupt("return",{default:function(){var h=r(!0),f=c()(h,2),g=f[0],b=f[1],E=function(C,O){b(O==null?void 0:O.checked),console.log("onChange",O)};return a.createElement(l,null,a.createElement(n,{checked:g,onChange:E,inputProps:{className:"my-input"}}))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-switch-demo-en-us-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Stack, Switch } from '@bifrostui/react';

export default () => {
  const [checked, setChecked] = useState(true);
  const handleChange = (e, data) => {
    setChecked(data?.checked);
    console.log('onChange', data);
  };
  return (
    <Stack>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ className: 'my-input' }}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-switch-demo-en-us-6":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l;return p()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=d.sent,a=o.default,d.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return r=d.sent,t=r.Stack,l=r.Switch,d.abrupt("return",{default:function(){return a.createElement(t,{spacing:"5px"},a.createElement(l,{disabled:!0}),a.createElement(l,{defaultChecked:!0,disabled:!0}))}});case 10:case"end":return d.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-switch-demo-en-us-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack, Switch } from '@bifrostui/react';

export default () => {
  return (
    <Stack spacing="5px">
      <Switch disabled />
      <Switch defaultChecked disabled />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}}}},77412:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return I}});var M=e(90228),c=e.n(M),A=e(48305),p=e.n(A),y=e(87999),x=e.n(y),u=e(75271),I={"packages-bui-core-src-tab-bar-demo-en-us-0":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=m.sent,a=o.default,r=o.useState,m.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=m.sent,l=t.Stack,n=t.TabBar,d=t.TabBarItem,m.abrupt("return",{default:function(){var f=r(0),g=p()(f,2),b=g[0],E=g[1],P=function(O,T){var B=T.value;E(B)};return a.createElement(l,{style:{background:"#eee",padding:"20px 0 10px"}},a.createElement(n,{current:b,onChange:P},a.createElement(d,{title:"\u4E3B\u9875"}),a.createElement(d,{title:"\u5546\u5E97"}),a.createElement(d,{title:"\u5E2E\u52A9"})))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tab-bar-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Stack, TabBar, TabBarItem } from '@bifrostui/react';

export default () => {
  const [active, setActive] = useState(0);
  const handleChange = (e, { value }) => {
    setActive(value);
  };
  return (
    <Stack style={{ background: '#eee', padding: '20px 0 10px' }}>
      <TabBar current={active} onChange={handleChange}>
        <TabBarItem title="\u4E3B\u9875" />
        <TabBarItem title="\u5546\u5E97" />
        <TabBarItem title="\u5E2E\u52A9" />
      </TabBar>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-tab-bar-demo-en-us-1":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d,s,m,h,f;return c()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=b.sent,a=o.default,r=o.useState,b.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=b.sent,l=t.Stack,n=t.TabBar,d=t.TabBarItem,b.next=13,e.e(9975).then(e.bind(e,29975));case 13:return s=b.sent,m=s.PhoneFilledIcon,h=s.StoreFilledIcon,f=s.HomeFilledIcon,b.abrupt("return",{default:function(){var P=r(0),C=p()(P,2),O=C[0],T=C[1],B=function(D,k){var $=k.value;T($)};return a.createElement(l,{style:{background:"#eee",padding:"20px 0 10px"}},a.createElement(n,{current:O,onChange:B},a.createElement(d,{title:"\u4E3B\u9875",icon:a.createElement(f,null),activeIcon:a.createElement(f,{color:"primary"})}),a.createElement(d,{title:"\u5546\u5E97",icon:a.createElement(h,null),activeIcon:a.createElement(h,{color:"primary"})}),a.createElement(d,{title:"\u5E2E\u52A9",icon:a.createElement(m,null),activeIcon:a.createElement(m,{color:"primary"})})))}});case 18:case"end":return b.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tab-bar-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Stack, TabBar, TabBarItem } from '@bifrostui/react';
import {
  PhoneFilledIcon,
  StoreFilledIcon,
  HomeFilledIcon,
  HomeOutlinedIcon,
} from '@bifrostui/icons';

export default () => {
  const [active, setActive] = useState(0);
  const handleChange = (e, { value }) => {
    setActive(value);
  };

  return (
    <Stack style={{ background: '#eee', padding: '20px 0 10px' }}>
      <TabBar current={active} onChange={handleChange}>
        <TabBarItem
          title="\u4E3B\u9875"
          icon={<HomeFilledIcon />}
          activeIcon={<HomeFilledIcon color="primary" />}
        />
        <TabBarItem
          title="\u5546\u5E97"
          icon={<StoreFilledIcon />}
          activeIcon={<StoreFilledIcon color="primary" />}
        />
        <TabBarItem
          title="\u5E2E\u52A9"
          icon={<PhoneFilledIcon />}
          activeIcon={<PhoneFilledIcon color="primary" />}
        />
      </TabBar>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-tab-bar-demo-en-us-2":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=m.sent,a=o.default,r=o.useState,m.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=m.sent,l=t.Stack,n=t.TabBar,d=t.TabBarItem,m.abrupt("return",{default:function(){var f=r(0),g=p()(f,2),b=g[0],E=g[1],P=r(0),C=p()(P,2),O=C[0],T=C[1],B=function(k,$){var F=$.value;E(F)},L=function(k,$){var F=$.value;T(F)};return a.createElement(a.Fragment,null,a.createElement(l,{style:{background:"#eee",padding:"20px 0 10px"},alignItems:"flex-start"},a.createElement("div",{style:{margin:"8px"}},"\u81EA\u5B9A\u4E49\u9009\u4E2D\u4E3B\u9898\u8272: "),a.createElement(n,{current:b,onChange:B},a.createElement(d,{title:"\u4E3B\u9875"}),a.createElement(d,{title:"\u5546\u5E97"}),a.createElement(d,{title:"\u5E2E\u52A9"}))),a.createElement(l,{style:{background:"#eee",padding:"20px 0 10px"},alignItems:"flex-start"},a.createElement("div",{style:{margin:"8px"}},"\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u4E3B\u9898\u8272: "),a.createElement(n,{current:O,onChange:L,color:"info",activeColor:"primary"},a.createElement(d,{title:"\u4E3B\u9875"}),a.createElement(d,{title:"\u5546\u5E97"}),a.createElement(d,{title:"\u5E2E\u52A9"}))))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tab-bar-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Stack, TabBar, TabBarItem } from '@bifrostui/react';

export default () => {
  const [active, setActive] = useState(0);
  const [active2, setActive2] = useState(0);
  const handleChange = (e, { value }) => {
    setActive(value);
  };
  const handleChange2 = (e, { value }) => {
    setActive2(value);
  };
  return (
    <>
      <Stack
        style={{ background: '#eee', padding: '20px 0 10px' }}
        alignItems="flex-start"
      >
        <div style={{ margin: '8px' }}>\u81EA\u5B9A\u4E49\u9009\u4E2D\u4E3B\u9898\u8272: </div>
        <TabBar current={active} onChange={handleChange}>
          <TabBarItem title="\u4E3B\u9875" />
          <TabBarItem title="\u5546\u5E97" />
          <TabBarItem title="\u5E2E\u52A9" />
        </TabBar>
      </Stack>
      <Stack
        style={{ background: '#eee', padding: '20px 0 10px' }}
        alignItems="flex-start"
      >
        <div style={{ margin: '8px' }}>\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u4E3B\u9898\u8272: </div>
        <TabBar
          current={active2}
          onChange={handleChange2}
          color="info"
          activeColor="primary"
        >
          <TabBarItem title="\u4E3B\u9875" />
          <TabBarItem title="\u5546\u5E97" />
          <TabBarItem title="\u5E2E\u52A9" />
        </TabBar>
      </Stack>
    </>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-tab-bar-demo-en-us-3":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d,s,m,h,f;return c()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return o=b.sent,a=o.default,r=o.useState,b.next=7,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 7:return t=b.sent,l=t.Stack,n=t.TabBar,d=t.TabBarItem,b.next=13,e.e(9975).then(e.bind(e,29975));case 13:return s=b.sent,m=s.PhoneFilledIcon,h=s.StoreFilledIcon,f=s.HomeFilledIcon,b.abrupt("return",{default:function(){var P=r(0),C=p()(P,2),O=C[0],T=C[1],B=function(D,k){var $=k.value;T($)};return a.createElement(l,{style:{background:"#eee",padding:"20px 0 10px"}},a.createElement(n,{current:O,onChange:B},a.createElement(d,{title:"\u4E3B\u9875",icon:a.createElement(f,null),activeIcon:a.createElement(f,{color:"primary"})}),a.createElement(d,{title:"\u5546\u5E97",icon:a.createElement(h,null),activeIcon:a.createElement(h,{color:"primary"}),BadgeProps:{type:"dot"}}),a.createElement(d,{title:"\u5E2E\u52A9",icon:a.createElement(m,null),activeIcon:a.createElement(m,{color:"primary"}),BadgeProps:{content:"20"}})))}});case 18:case"end":return b.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tab-bar-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Stack, TabBar, TabBarItem } from '@bifrostui/react';
import {
  PhoneFilledIcon,
  StoreFilledIcon,
  HomeFilledIcon,
} from '@bifrostui/icons';

export default () => {
  const [active, setActive] = useState(0);
  const handleChange = (e, { value }) => {
    setActive(value);
  };
  return (
    <Stack style={{ background: '#eee', padding: '20px 0 10px' }}>
      <TabBar current={active} onChange={handleChange}>
        <TabBarItem
          title="\u4E3B\u9875"
          icon={<HomeFilledIcon />}
          activeIcon={<HomeFilledIcon color="primary" />}
        />
        <TabBarItem
          title="\u5546\u5E97"
          icon={<StoreFilledIcon />}
          activeIcon={<StoreFilledIcon color="primary" />}
          BadgeProps={{ type: 'dot' }}
        />
        <TabBarItem
          title="\u5E2E\u52A9"
          icon={<PhoneFilledIcon />}
          activeIcon={<PhoneFilledIcon color="primary" />}
          BadgeProps={{ content: '20' }}
        />
      </TabBar>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}}}},38770:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return o}});var M=e(26068),c=e.n(M),A=e(90228),p=e.n(A),y=e(48305),x=e.n(y),u=e(87999),I=e.n(u),i=e(75271),o={"packages-bui-core-src-tabs-demo-en-us-0":{component:i.memo(i.lazy(I()(p()().mark(function a(){var r,t,l,n,d,s,m,h;return p()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=g.sent,t=r.Stack,l=r.Tab,n=r.TabPanel,d=r.Tabs,g.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return s=g.sent,m=s.default,h=s.useState,g.abrupt("return",{default:function(){var E=h("fruits"),P=x()(E,2),C=P[0],O=P[1],T=[{title:"\u6C34\u679C",index:"fruits"},{title:"\u852C\u83DC",index:"vegetables"},{title:"\u52A8\u7269",index:"animals"}],B=function(D,k){var $=k.index;console.log("Click Tab, value index is: ".concat($)),O($)};return m.createElement(t,{alignItems:"stretch"},m.createElement(d,{style:{marginBottom:"12px"},value:C},T.map(function(L){return m.createElement(l,{key:L.index,index:L.index,onClick:B},L.title)})),m.createElement(n,{value:C,index:"fruits"},"\u83E0\u841D"),m.createElement(n,{value:C,index:"vegetables"},"\u897F\u7EA2\u67FF"),m.createElement(n,{value:C,index:"animals"},"\u8682\u8681"))}});case 13:case"end":return g.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tabs-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Tab, TabPanel, Tabs } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('fruits');
  const tabList = [
    { title: '\u6C34\u679C', index: 'fruits' },
    { title: '\u852C\u83DC', index: 'vegetables' },
    { title: '\u52A8\u7269', index: 'animals' },
  ];
  const handleClick = (e, { index }) => {
    console.log(\`Click Tab, value index is: \${index}\`);
    setValue(index);
  };

  return (
    <Stack alignItems="stretch">
      <Tabs style={{ marginBottom: '12px' }} value={value}>
        {tabList.map((item) => (
          <Tab key={item.index} index={item.index} onClick={handleClick}>
            {item.title}
          </Tab>
        ))}
      </Tabs>
      <TabPanel value={value} index="fruits">
        \u83E0\u841D
      </TabPanel>
      <TabPanel value={value} index="vegetables">
        \u897F\u7EA2\u67FF
      </TabPanel>
      <TabPanel value={value} index="animals">
        \u8682\u8681
      </TabPanel>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(i,2))},renderOpts:{compile:function(){var a=I()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}},"packages-bui-core-src-tabs-demo-en-us-1":{component:i.memo(i.lazy(I()(p()().mark(function a(){var r,t,l,n,d,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=f.sent,t=r.Stack,l=r.TabPanel,n=r.Tabs,f.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return d=f.sent,s=d.default,m=d.useState,f.abrupt("return",{default:function(){var b=m("fruits"),E=x()(b,2),P=E[0],C=E[1],O=function(B,L){var D=L.index;console.log("Tabs change, value index is: ".concat(D)),C(D)};return s.createElement(t,null,s.createElement(n,{style:{marginBottom:"12px"},onChange:O,value:P,tabs:[{title:"\u6C34\u679C",index:"fruits"},{title:"\u852C\u83DC",index:"vegetables",disabled:!0},{title:"\u52A8\u7269",index:"animals"}]}),s.createElement(l,{value:P,index:"fruits"},"\u83E0\u841D"),s.createElement(l,{value:P,index:"vegetables"},"\u897F\u7EA2\u67FF"),s.createElement(l,{value:P,index:"animals"},"\u8682\u8681"))}});case 12:case"end":return f.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tabs-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, TabPanel, Tabs } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('fruits');
  const handleChange = (e, { index }) => {
    console.log(\`Tabs change, value index is: \${index}\`);
    setValue(index);
  };

  return (
    <Stack>
      <Tabs
        style={{ marginBottom: '12px' }}
        onChange={handleChange}
        value={value}
        tabs={[
          { title: '\u6C34\u679C', index: 'fruits' },
          { title: '\u852C\u83DC', index: 'vegetables', disabled: true },
          { title: '\u52A8\u7269', index: 'animals' },
        ]}
      />
      <TabPanel value={value} index="fruits">
        \u83E0\u841D
      </TabPanel>
      <TabPanel value={value} index="vegetables">
        \u897F\u7EA2\u67FF
      </TabPanel>
      <TabPanel value={value} index="animals">
        \u8682\u8681
      </TabPanel>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(i,2))},renderOpts:{compile:function(){var a=I()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}},"packages-bui-core-src-tabs-demo-en-us-2":{component:i.memo(i.lazy(I()(p()().mark(function a(){var r,t,l,n,d,s,m,h;return p()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=g.sent,t=r.Stack,l=r.Tab,n=r.TabPanel,d=r.Tabs,g.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return s=g.sent,m=s.default,h=s.useState,g.abrupt("return",{default:function(){var E=h("fruits"),P=x()(E,2),C=P[0],O=P[1],T=[{title:"\u6C34\u679C",index:"fruits"},{title:"\u852C\u83DC",index:"vegetables"},{title:"\u52A8\u7269",index:"animals"}],B=function(D,k){var $=k.index;console.log("Click Tab, value index is: ".concat($)),O($)};return m.createElement(t,null,m.createElement(d,{style:{marginBottom:"12px"},value:C},T.map(function(L){return m.createElement(l,{key:L.index,index:L.index,disabled:!0,onClick:B},L.title)})),m.createElement(n,{value:C,index:"fruits"},"\u83E0\u841D"),m.createElement(n,{value:C,index:"vegetables"},"\u897F\u7EA2\u67FF"),m.createElement(n,{value:C,index:"animals"},"\u8682\u8681"))}});case 13:case"end":return g.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tabs-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Tab, TabPanel, Tabs } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('fruits');
  const tabList = [
    { title: '\u6C34\u679C', index: 'fruits' },
    { title: '\u852C\u83DC', index: 'vegetables' },
    { title: '\u52A8\u7269', index: 'animals' },
  ];
  const handleClick = (e, { index }) => {
    console.log(\`Click Tab, value index is: \${index}\`);
    setValue(index);
  };

  return (
    <Stack>
      <Tabs style={{ marginBottom: '12px' }} value={value}>
        {tabList.map((item) => (
          <Tab
            key={item.index}
            index={item.index}
            disabled
            onClick={handleClick}
          >
            {item.title}
          </Tab>
        ))}
      </Tabs>
      <TabPanel value={value} index="fruits">
        \u83E0\u841D
      </TabPanel>
      <TabPanel value={value} index="vegetables">
        \u897F\u7EA2\u67FF
      </TabPanel>
      <TabPanel value={value} index="animals">
        \u8682\u8681
      </TabPanel>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(i,2))},renderOpts:{compile:function(){var a=I()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}},"packages-bui-core-src-tabs-demo-en-us-3":{component:i.memo(i.lazy(I()(p()().mark(function a(){var r,t,l,n,d,s,m,h,f;return p()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=b.sent,t=r.Button,l=r.Stack,n=r.Tab,d=r.TabPanel,s=r.Tabs,b.next=10,Promise.resolve().then(e.t.bind(e,75271,19));case 10:return m=b.sent,h=m.default,f=m.useState,b.abrupt("return",{default:function(){var P=f("fruits"),C=x()(P,2),O=C[0],T=C[1],B=[{title:"\u6C34\u679C",index:"fruits"},{title:"\u852C\u83DC",index:"vegetables"},{title:"\u52A8\u7269",index:"animals"}],L=function($,F){var z=F.index;console.log($,"Tab change, value index is: ".concat(z)),T(z)},D=function($){T($)};return h.createElement(l,null,h.createElement(s,{style:{marginBottom:"12px"},align:"start",onChange:L,value:O},B.map(function(k){return h.createElement(n,c()({key:k.index},k),k.title)})),h.createElement(d,{value:O,index:"fruits"},h.createElement("div",null,"\u83E0\u841D"),h.createElement(t,{onClick:function(){D("animals")}},"\u6211\u8981\u8682\u8681"),h.createElement(t,{onClick:function(){D("vegetables")}},"\u6211\u8981\u897F\u7EA2\u67FF")),h.createElement(d,{value:O,index:"vegetables"},h.createElement("div",null,"\u897F\u7EA2\u67FF"),h.createElement(t,{onClick:function(){D("fruits")}},"\u6211\u8981\u83E0\u841D"),h.createElement(t,{onClick:function(){D("animals")}},"\u6211\u8981\u8682\u8681")),h.createElement(d,{value:O,index:"animals"},h.createElement("div",null,"\u8682\u8681"),h.createElement(t,{onClick:function(){D("fruits")}},"\u6211\u8981\u83E0\u841D"),h.createElement(t,{onClick:function(){D("vegetables")}},"\u6211\u8981\u897F\u7EA2\u67FF")))}});case 14:case"end":return b.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tabs-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Stack, Tab, TabPanel, Tabs } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('fruits');
  const tabList = [
    { title: '\u6C34\u679C', index: 'fruits' },
    { title: '\u852C\u83DC', index: 'vegetables' },
    { title: '\u52A8\u7269', index: 'animals' },
  ];
  const handleChange = (e, { index }) => {
    console.log(e, \`Tab change, value index is: \${index}\`);
    setValue(index);
  };

  const handleButton = (index) => {
    setValue(index);
  };

  return (
    <Stack>
      <Tabs
        style={{ marginBottom: '12px' }}
        align="start"
        onChange={handleChange}
        value={value}
      >
        {tabList.map((item) => (
          <Tab key={item.index} {...item}>
            {item.title}
          </Tab>
        ))}
      </Tabs>
      <TabPanel value={value} index="fruits">
        <div>\u83E0\u841D</div>
        <Button
          onClick={() => {
            handleButton('animals');
          }}
        >
          \u6211\u8981\u8682\u8681
        </Button>
        <Button
          onClick={() => {
            handleButton('vegetables');
          }}
        >
          \u6211\u8981\u897F\u7EA2\u67FF
        </Button>
      </TabPanel>
      <TabPanel value={value} index="vegetables">
        <div>\u897F\u7EA2\u67FF</div>
        <Button
          onClick={() => {
            handleButton('fruits');
          }}
        >
          \u6211\u8981\u83E0\u841D
        </Button>
        <Button
          onClick={() => {
            handleButton('animals');
          }}
        >
          \u6211\u8981\u8682\u8681
        </Button>
      </TabPanel>
      <TabPanel value={value} index="animals">
        <div>\u8682\u8681</div>
        <Button
          onClick={() => {
            handleButton('fruits');
          }}
        >
          \u6211\u8981\u83E0\u841D
        </Button>
        <Button
          onClick={() => {
            handleButton('vegetables');
          }}
        >
          \u6211\u8981\u897F\u7EA2\u67FF
        </Button>
      </TabPanel>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(i,2))},renderOpts:{compile:function(){var a=I()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}},"packages-bui-core-src-tabs-demo-en-us-4":{component:i.memo(i.lazy(I()(p()().mark(function a(){var r,t,l,n,d,s,m,h;return p()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=g.sent,t=r.Stack,l=r.Tab,n=r.TabPanel,d=r.Tabs,g.next=9,Promise.resolve().then(e.t.bind(e,75271,19));case 9:return s=g.sent,m=s.default,h=s.useState,g.abrupt("return",{default:function(){var E=h("2"),P=x()(E,2),C=P[0],O=P[1],T=[{title:"\u957F\u6D25\u6E56",index:"1"},{title:"\u6218\u72FC2",index:"2"},{title:"\u4F60\u597D\uFF0C\u674E\u7115\u82F1",index:"3"},{title:"\u54EA\u5412\u4E4B\u9B54\u7AE5\u964D\u4E16",index:"4"},{title:"\u6D41\u6D6A\u5730\u7403",index:"5"},{title:"\u5510\u4EBA\u8857\u63A2\u68483",index:"6"},{title:"\u590D\u4EC7\u8005\u8054\u76DF4\uFF1A\u7EC8\u5C40\u4E4B\u6218",index:"7"},{title:"\u957F\u6D25\u6E56\u4E4B\u6C34\u95E8\u6865",index:"8"},{title:"\u7EA2\u6D77\u884C\u52A8",index:"9"}],B=function(D,k){var $=k.index;console.log(D,"Tab Change, value index is: ".concat($)),O($)};return m.createElement(t,null,m.createElement("div",{style:{width:"325px"}},m.createElement(d,{style:{marginTop:"20px",marginBottom:"12px"},value:C,onChange:B},T.map(function(L){return m.createElement(l,c()({key:L.index},L),L.title)})),T.map(function(L){return m.createElement(n,{key:L.index,value:C,index:L.index},L.index)})))}});case 13:case"end":return g.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tabs-demo-en-us-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Tab, TabPanel, Tabs } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('2');
  const tabList = [
    { title: '\u957F\u6D25\u6E56', index: '1' },
    { title: '\u6218\u72FC2', index: '2' },
    { title: '\u4F60\u597D\uFF0C\u674E\u7115\u82F1', index: '3' },
    { title: '\u54EA\u5412\u4E4B\u9B54\u7AE5\u964D\u4E16', index: '4' },
    { title: '\u6D41\u6D6A\u5730\u7403', index: '5' },
    { title: '\u5510\u4EBA\u8857\u63A2\u68483', index: '6' },
    { title: '\u590D\u4EC7\u8005\u8054\u76DF4\uFF1A\u7EC8\u5C40\u4E4B\u6218', index: '7' },
    { title: '\u957F\u6D25\u6E56\u4E4B\u6C34\u95E8\u6865', index: '8' },
    { title: '\u7EA2\u6D77\u884C\u52A8', index: '9' },
  ];
  const handleChange = (e, { index }) => {
    console.log(e, \`Tab Change, value index is: \${index}\`);
    setValue(index);
  };

  return (
    <Stack>
      <div style={{ width: '325px' }}>
        <Tabs
          style={{ marginTop: '20px', marginBottom: '12px' }}
          value={value}
          onChange={handleChange}
        >
          {tabList.map((item) => (
            <Tab key={item.index} {...item}>
              {item.title}
            </Tab>
          ))}
        </Tabs>
        {tabList.map((item) => (
          <TabPanel key={item.index} value={value} index={item.index}>
            {item.index}
          </TabPanel>
        ))}
      </div>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(i,2))},renderOpts:{compile:function(){var a=I()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}}}},99133:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return x}});var M=e(90228),c=e.n(M),A=e(87999),p=e.n(A),y=e(75271),x={"packages-bui-core-src-tag-demo-en-us-0":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=l.sent,i=I.Stack,o=I.Tag,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,r=a.default,l.abrupt("return",{default:function(){return r.createElement(i,{direction:"row",spacing:"10px"},r.createElement(o,null,"\u9ED8\u8BA4\u6807\u7B7E"),r.createElement(o,{variant:"contained"},"\u586B\u5145\u6807\u7B7E"),r.createElement(o,{variant:"light"},"\u6D45\u4EAE\u6807\u7B7E"))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tag-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Tag } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Tag>\u9ED8\u8BA4\u6807\u7B7E</Tag>
      <Tag variant="contained">\u586B\u5145\u6807\u7B7E</Tag>
      <Tag variant="light">\u6D45\u4EAE\u6807\u7B7E</Tag>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-tag-demo-en-us-1":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=l.sent,i=I.Stack,o=I.Tag,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,r=a.default,l.abrupt("return",{default:function(){return r.createElement(i,{spacing:"10px"},r.createElement(i,{direction:"row",spacing:"10px"},r.createElement(o,{variant:"outlined",color:"primary"},"\u9650\u65F6\u7279\u4EF7"),r.createElement(o,{variant:"outlined",color:"info"},"\u97F3\u4E50\u5267"),r.createElement(o,{variant:"outlined",color:"success"},"\u97F3\u4E50\u5267"),r.createElement(o,{variant:"outlined",color:"warning"},"\u70B9\u6620"),r.createElement(o,{variant:"outlined",color:"danger"},"\u9650\u65F6\u4F18\u60E0"),r.createElement(o,{variant:"outlined",color:"vip"},"\u4F1A\u5458")),r.createElement(i,{direction:"row",spacing:"10px"},r.createElement(o,{variant:"contained",color:"primary"},"\u65E9\u9E1F\u4F18\u60E0"),r.createElement(o,{variant:"contained",color:"info"},"\u97F3\u4E50\u5267"),r.createElement(o,{variant:"contained",color:"success"},"\u5F71\u57CE\u5361"),r.createElement(o,{variant:"contained",color:"warning"},"\u70B9\u6620"),r.createElement(o,{variant:"contained",color:"danger"},"\u9650\u65F6\u4F18\u60E0"),r.createElement(o,{variant:"contained",color:"vip"},"\u4F1A\u5458")),r.createElement(i,{direction:"row",spacing:"10px"},r.createElement(o,{variant:"light",color:"primary"},"\u65E9\u9E1F\u4F18\u60E0"),r.createElement(o,{variant:"light",color:"info"},"\u97F3\u4E50\u5267"),r.createElement(o,{variant:"light",color:"success"},"\u5F71\u57CE\u5361"),r.createElement(o,{variant:"light",color:"warning"},"\u70B9\u6620"),r.createElement(o,{variant:"light",color:"danger"},"\u9650\u65F6\u4F18\u60E0"),r.createElement(o,{variant:"light",color:"vip"},"\u4F1A\u5458")))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tag-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Tag } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="10px">
      <Stack direction="row" spacing="10px">
        <Tag variant="outlined" color="primary">
          \u9650\u65F6\u7279\u4EF7
        </Tag>
        <Tag variant="outlined" color="info">
          \u97F3\u4E50\u5267
        </Tag>
        <Tag variant="outlined" color="success">
          \u97F3\u4E50\u5267
        </Tag>
        <Tag variant="outlined" color="warning">
          \u70B9\u6620
        </Tag>
        <Tag variant="outlined" color="danger">
          \u9650\u65F6\u4F18\u60E0
        </Tag>
        <Tag variant="outlined" color="vip">
          \u4F1A\u5458
        </Tag>
      </Stack>
      <Stack direction="row" spacing="10px">
        <Tag variant="contained" color="primary">
          \u65E9\u9E1F\u4F18\u60E0
        </Tag>
        <Tag variant="contained" color="info">
          \u97F3\u4E50\u5267
        </Tag>
        <Tag variant="contained" color="success">
          \u5F71\u57CE\u5361
        </Tag>
        <Tag variant="contained" color="warning">
          \u70B9\u6620
        </Tag>
        <Tag variant="contained" color="danger">
          \u9650\u65F6\u4F18\u60E0
        </Tag>
        <Tag variant="contained" color="vip">
          \u4F1A\u5458
        </Tag>
      </Stack>
      <Stack direction="row" spacing="10px">
        <Tag variant="light" color="primary">
          \u65E9\u9E1F\u4F18\u60E0
        </Tag>
        <Tag variant="light" color="info">
          \u97F3\u4E50\u5267
        </Tag>
        <Tag variant="light" color="success">
          \u5F71\u57CE\u5361
        </Tag>
        <Tag variant="light" color="warning">
          \u70B9\u6620
        </Tag>
        <Tag variant="light" color="danger">
          \u9650\u65F6\u4F18\u60E0
        </Tag>
        <Tag variant="light" color="vip">
          \u4F1A\u5458
        </Tag>
      </Stack>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-tag-demo-en-us-2":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r;return c()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=l.sent,i=I.Stack,o=I.Tag,l.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return a=l.sent,r=a.default,l.abrupt("return",{default:function(){return r.createElement(i,{spacing:"10px"},r.createElement(o,{variant:"contained",htmlColor:"#69eeff"},"\u81EA\u5B9A\u4E49\u8272\u5F69"),r.createElement(o,{variant:"light",htmlColor:"#69eeff"},"\u81EA\u5B9A\u4E49\u8272\u5F69"),r.createElement(o,{variant:"outlined",htmlColor:"#69eeff"},"\u81EA\u5B9A\u4E49\u8272\u5F69"))}});case 10:case"end":return l.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tag-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Tag } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack spacing="10px">
      <Tag variant="contained" htmlColor="#69eeff">
        \u81EA\u5B9A\u4E49\u8272\u5F69
      </Tag>
      <Tag variant="light" htmlColor="#69eeff">
        \u81EA\u5B9A\u4E49\u8272\u5F69
      </Tag>
      <Tag variant="outlined" htmlColor="#69eeff">
        \u81EA\u5B9A\u4E49\u8272\u5F69
      </Tag>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}},"packages-bui-core-src-tag-demo-en-us-3":{component:y.memo(y.lazy(p()(c()().mark(function u(){var I,i,o,a,r,t;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return I=n.sent,i=I.Stack,o=I.Tag,a=I.TagGroup,n.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){return t.createElement(i,{direction:"row",spacing:"10px",flexWrap:"wrap"},t.createElement(a,null,t.createElement(o,{variant:"contained",color:"primary"},"primary"),t.createElement(o,{variant:"contained",color:"info"},"info")),t.createElement(a,null,t.createElement(o,{variant:"contained",color:"success"},"success"),t.createElement(o,{variant:"outlined",color:"warning"},"warning")),t.createElement(a,null,t.createElement(o,{variant:"outlined",color:"warning"},"warning"),t.createElement(o,{variant:"contained",color:"success"},"success")),t.createElement(a,null,t.createElement(o,{variant:"outlined",color:"primary"},"primary"),t.createElement(o,{variant:"outlined",color:"info"},"info")),t.createElement(a,null,t.createElement(o,{variant:"contained",color:"primary"},"primary"),t.createElement(o,{variant:"outlined",color:"info"},"info"),t.createElement(o,{variant:"outlined",color:"info"},"info")),t.createElement(a,null,t.createElement(o,{variant:"outlined",color:"primary"},"primary"),t.createElement(o,{variant:"contained",color:"info"},"info"),t.createElement(o,{variant:"outlined",color:"info"},"info")),t.createElement(a,null,t.createElement(o,{variant:"outlined",color:"primary"},"primary"),t.createElement(o,{variant:"outlined",color:"info"},"info"),t.createElement(o,{variant:"contained",color:"info"},"info")),t.createElement(a,null,t.createElement(o,{variant:"outlined",color:"primary"},"primary"),t.createElement(o,{variant:"outlined",color:"info"},"info"),t.createElement(o,{variant:"outlined",color:"info"},"info")),t.createElement(a,null,t.createElement(o,{variant:"contained",color:"primary"},"primary"),t.createElement(o,{variant:"outlined",color:"info"},"info"),t.createElement(o,{variant:"contained",color:"info"},"info")),t.createElement(a,null,t.createElement(o,{variant:"contained",color:"primary"},"primary"),t.createElement(o,{variant:"contained",color:"info"},"info"),t.createElement(o,{variant:"contained",color:"info"},"info")),t.createElement(a,null,t.createElement(o,{variant:"contained",color:"primary"},"primary"),t.createElement(o,{variant:"contained",color:"info"},"info"),t.createElement(o,{variant:"outlined",color:"info"},"info")),t.createElement(a,null,t.createElement(o,{variant:"outlined",color:"primary"},"primary"),t.createElement(o,{variant:"contained",color:"info"},"info"),t.createElement(o,{variant:"contained",color:"info"},"info")),t.createElement(a,null,t.createElement(o,{variant:"outlined",color:"warning"},"warning")))}});case 11:case"end":return n.stop()}},u)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tag-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Tag, TagGroup } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px" flexWrap="wrap">
      <TagGroup>
        <Tag variant="contained" color="primary">
          primary
        </Tag>
        <Tag variant="contained" color="info">
          info
        </Tag>
      </TagGroup>
      <TagGroup>
        <Tag variant="contained" color="success">
          success
        </Tag>
        <Tag variant="outlined" color="warning">
          warning
        </Tag>
      </TagGroup>
      <TagGroup>
        <Tag variant="outlined" color="warning">
          warning
        </Tag>
        <Tag variant="contained" color="success">
          success
        </Tag>
      </TagGroup>
      <TagGroup>
        <Tag variant="outlined" color="primary">
          primary
        </Tag>
        <Tag variant="outlined" color="info">
          info
        </Tag>
      </TagGroup>
      <TagGroup>
        <Tag variant="contained" color="primary">
          primary
        </Tag>
        <Tag variant="outlined" color="info">
          info
        </Tag>
        <Tag variant="outlined" color="info">
          info
        </Tag>
      </TagGroup>

      <TagGroup>
        <Tag variant="outlined" color="primary">
          primary
        </Tag>
        <Tag variant="contained" color="info">
          info
        </Tag>
        <Tag variant="outlined" color="info">
          info
        </Tag>
      </TagGroup>

      <TagGroup>
        <Tag variant="outlined" color="primary">
          primary
        </Tag>
        <Tag variant="outlined" color="info">
          info
        </Tag>
        <Tag variant="contained" color="info">
          info
        </Tag>
      </TagGroup>
      <TagGroup>
        <Tag variant="outlined" color="primary">
          primary
        </Tag>
        <Tag variant="outlined" color="info">
          info
        </Tag>
        <Tag variant="outlined" color="info">
          info
        </Tag>
      </TagGroup>
      <TagGroup>
        <Tag variant="contained" color="primary">
          primary
        </Tag>
        <Tag variant="outlined" color="info">
          info
        </Tag>
        <Tag variant="contained" color="info">
          info
        </Tag>
      </TagGroup>
      <TagGroup>
        <Tag variant="contained" color="primary">
          primary
        </Tag>
        <Tag variant="contained" color="info">
          info
        </Tag>
        <Tag variant="contained" color="info">
          info
        </Tag>
      </TagGroup>
      <TagGroup>
        <Tag variant="contained" color="primary">
          primary
        </Tag>
        <Tag variant="contained" color="info">
          info
        </Tag>
        <Tag variant="outlined" color="info">
          info
        </Tag>
      </TagGroup>
      <TagGroup>
        <Tag variant="outlined" color="primary">
          primary
        </Tag>
        <Tag variant="contained" color="info">
          info
        </Tag>
        <Tag variant="contained" color="info">
          info
        </Tag>
      </TagGroup>
      <TagGroup>
        <Tag variant="outlined" color="warning">
          warning
        </Tag>
      </TagGroup>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var u=p()(c()().mark(function i(){var o,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1212).then(e.bind(e,61212));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,a));case 3:case"end":return t.stop()}},i)}));function I(){return u.apply(this,arguments)}return I}()}}}},55289:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return I}});var M=e(90228),c=e.n(M),A=e(48305),p=e.n(A),y=e(87999),x=e.n(y),u=e(75271),I={"packages-bui-core-src-text-area-demo-en-us-0":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=s.sent,a=o.Stack,r=o.TextArea,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(""),f=p()(h,2),g=f[0],b=f[1],E=function(C,O){b(O==null?void 0:O.value),console.log("change",O==null?void 0:O.value)};return l.createElement(a,{alignItems:"stretch"},l.createElement(r,{value:g,placeholder:"\u9ED8\u8BA4",onChange:E}))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-text-area-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, TextArea } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');

  const handleChange = (e, data) => {
    setValue(data?.value);
    console.log('change', data?.value);
  };

  return (
    <Stack alignItems="stretch">
      <TextArea value={value} placeholder="\u9ED8\u8BA4" onChange={handleChange} />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-text-area-demo-en-us-1":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=s.sent,a=o.Stack,r=o.TextArea,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(""),f=p()(h,2),g=f[0],b=f[1];return l.createElement(a,{alignItems:"stretch"},l.createElement(r,{value:g,placeholder:"\u6700\u591A\u8F93\u516510\u4E2A\u5B57",onChange:function(P,C){return b(C==null?void 0:C.value)},maxLength:10,showCount:!0}))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-text-area-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, TextArea } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');

  return (
    <Stack alignItems="stretch">
      <TextArea
        value={value}
        placeholder="\u6700\u591A\u8F93\u516510\u4E2A\u5B57"
        onChange={(e, data) => setValue(data?.value)}
        maxLength={10}
        showCount
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-text-area-demo-en-us-2":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d,s;return c()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=h.sent,a=o.Button,r=o.Stack,t=o.TextArea,h.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=h.sent,n=l.default,d=l.useRef,s=l.useState,h.abrupt("return",{default:function(){var g=s("0"),b=p()(g,2),E=b[0],P=b[1],C=s("100"),O=p()(C,2),T=O[0],B=O[1],L=d(null),D=function(){P(function(z){return"".concat(Number(z)+10)})},k=function(){B(function(z){return"".concat(Number(z)-10)})},$=function(){var z=L.current;z.value=Number(z.value)*2};return n.createElement(r,{alignItems:"stretch"},n.createElement("div",{style:{display:"flex",flexDirection:"column",marginBottom:"40px"}},"\u53D7\u63A7\u7EC4\u4EF6\uFF1A",n.createElement(a,{onClick:D},"\u6570\u91CF\u52A010"),n.createElement("br",null),n.createElement(t,{value:E,onChange:function(z,U){return P(U.value)}})),n.createElement("div",{style:{display:"flex",flexDirection:"column"}},"\u975E\u53D7\u63A7\u7EC4\u4EF6\uFF1A",n.createElement("br",null),n.createElement(a,{onClick:k},"\u6570\u91CF\u51CF10(\u64CD\u4F5CdefaultValue\u65E0\u6548)"),n.createElement("br",null),n.createElement(a,{onClick:$},"\u6570\u91CF\u4E582(\u901A\u8FC7DOM\u64CD\u4F5Cvalue\u6709\u6548)"),n.createElement("br",null),n.createElement(t,{textareaRef:L,defaultValue:T})))}});case 13:case"end":return h.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-text-area-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Stack, TextArea } from '@bifrostui/react';
import React, { useRef, useState } from 'react';

export default () => {
  const [value, setValue] = useState('0');
  const [defaultValue, setDefaultValue] = useState('100');
  const reduceRef = useRef(null);

  const addTen = () => {
    setValue((prev) => \`\${Number(prev) + 10}\`);
  };

  const reduceTen = () => {
    setDefaultValue((prev) => \`\${Number(prev) - 10}\`);
  };

  const multiplyTwo = () => {
    const textarea = reduceRef.current;
    textarea.value = Number(textarea.value) * 2;
  };

  return (
    <Stack alignItems="stretch">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '40px',
        }}
      >
        \u53D7\u63A7\u7EC4\u4EF6\uFF1A
        <Button onClick={addTen}>\u6570\u91CF\u52A010</Button>
        <br />
        <TextArea value={value} onChange={(e, data) => setValue(data.value)} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        \u975E\u53D7\u63A7\u7EC4\u4EF6\uFF1A
        <br />
        <Button onClick={reduceTen}>\u6570\u91CF\u51CF10(\u64CD\u4F5CdefaultValue\u65E0\u6548)</Button>
        <br />
        <Button onClick={multiplyTwo}>\u6570\u91CF\u4E582(\u901A\u8FC7DOM\u64CD\u4F5Cvalue\u6709\u6548)</Button>
        <br />
        <TextArea textareaRef={reduceRef} defaultValue={defaultValue} />
      </div>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-text-area-demo-en-us-3":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n,d;return c()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return m.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=m.sent,a=o.Stack,r=o.TextArea,t=o.Button,m.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=m.sent,n=l.default,d=l.useState,m.abrupt("return",{default:function(){var f=d("123"),g=p()(f,2),b=g[0],E=g[1],P=d(!1),C=p()(P,2),O=C[0],T=C[1];return n.createElement(a,{alignItems:"stretch"},n.createElement(t,{onClick:function(){T(!O)}},O?"\u5931":"\u805A","\u7126"),n.createElement(r,{value:b,autoFocus:O,onChange:function(L,D){return E(D==null?void 0:D.value)}}))}});case 12:case"end":return m.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-text-area-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, TextArea, Button } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('123');
  const [autoFocus, setAutoFocus] = useState(false);

  return (
    <Stack alignItems="stretch">
      <Button
        onClick={() => {
          setAutoFocus(!autoFocus);
        }}
      >
        {autoFocus ? '\u5931' : '\u805A'}\u7126
      </Button>
      <TextArea
        value={value}
        autoFocus={autoFocus}
        onChange={(e, data) => setValue(data?.value)}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-text-area-demo-en-us-4":{component:u.memo(u.lazy(x()(c()().mark(function i(){var o,a,r,t,l,n;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=s.sent,a=o.Stack,r=o.TextArea,s.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=s.sent,l=t.default,n=t.useState,s.abrupt("return",{default:function(){var h=n(""),f=p()(h,2),g=f[0],b=f[1];return l.createElement(a,{alignItems:"stretch"},l.createElement(r,{value:g,placeholder:"\u6587\u6848\u8FC7\u591A\u4F1A\u81EA\u52A8\u6491\u9AD8",onChange:function(P,C){return b(C==null?void 0:C.value)},autoSize:{minHeight:50,maxHeight:100}}))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-text-area-demo-en-us-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, TextArea } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [value, setValue] = useState('');

  return (
    <Stack alignItems="stretch">
      <TextArea
        value={value}
        placeholder="\u6587\u6848\u8FC7\u591A\u4F1A\u81EA\u52A8\u6491\u9AD8"
        onChange={(e, data) => setValue(data?.value)}
        autoSize={{ minHeight: 50, maxHeight: 100 }}
      />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(c()().mark(function a(){var r,t=arguments;return c()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}}}},21894:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return i}});var M=e(48305),c=e.n(M),A=e(90228),p=e.n(A),y=e(87999),x=e.n(y),u=e(75271),I=e(40129),i={"packages-bui-core-src-theme-provider-demo-en-us-0":{component:u.memo(u.lazy(x()(p()().mark(function o(){var a,r,t,l,n,d,s,m,h;return p()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return a=g.sent,r=a.ThemeProvider,t=a.Button,g.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return l=g.sent,n=l.default,d={xs:{"--bui-button-border-radius":"2px"},sm:{"--bui-button-border-radius":"6px"},md:{"--bui-button-border-radius":"10px"},lg:{"--bui-button-border-radius":"14px"},xl:{"--bui-button-border-radius":"16px"}},s={"--bui-color-info-start":"#33a7ff","--bui-color-info-end":"#148aff"},m={"--bui-color-info-start":"#11caee","--bui-color-info-end":"#47bfbb"},h={"--bui-button-height":"34px"},g.abrupt("return",{default:function(){return n.createElement(r,{isRoot:!0,token:h,responsive:d,defaultLightToken:s,defaultDarkToken:m},n.createElement(t,{variant:"contained",color:"info"},"\u81EA\u5B9A\u4E49Tokens"))}});case 14:case"end":return g.stop()}},o)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-theme-provider-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ThemeProvider, Button } from '@bifrostui/react';
import React from 'react';

/**
 * \u54CD\u5E94\u5F0F\uFF1A\u4E0D\u540C\u5C4F\u5E55\u5C3A\u5BF8\u4E0B\u81EA\u5B9A\u4E49Tokens
 * \u53EF\u914D\u7F6E\u54CD\u5E94\u5F0F\u573A\u666F\u4E0B\u7684\u5185\u7F6ETokens\u548C\u7EC4\u4EF6\u7684\u5168\u5C40Tokens
 */
const responsive = {
  xs: {
    '--bui-button-border-radius': '2px',
  },
  sm: {
    '--bui-button-border-radius': '6px',
  },
  md: {
    '--bui-button-border-radius': '10px',
  },
  lg: {
    '--bui-button-border-radius': '14px',
  },
  xl: {
    '--bui-button-border-radius': '16px',
  },
};

/**
 * \u9ED8\u8BA4\u9AD8\u4EAE\u6A21\u5F0F\u81EA\u5B9A\u4E49Tokens
 * \u5E94\u914D\u7F6EBUI\u5185\u7F6E\u9ED8\u8BA4\u9AD8\u4EAE\u6A21\u5F0F\u5168\u5C40Tokens
 */
const defaultLightToken = {
  '--bui-color-info-start': '#33a7ff',
  '--bui-color-info-end': '#148aff',
};

/**
 * \u9ED8\u8BA4\u6697\u9ED1\u6A21\u5F0F\u81EA\u5B9A\u4E49Tokens
 * \u5E94\u914D\u7F6EBUI\u5185\u9ED8\u8BA4\u7F6E\u6697\u9ED1\u6A21\u5F0F\u5168\u5C40Tokens
 */
const defaultDarkToken = {
  '--bui-color-info-start': '#11caee',
  '--bui-color-info-end': '#47bfbb',
};

/**
 * \u81EA\u5B9A\u4E49\u7EC4\u4EF6Tokens
 * \u5E94\u914D\u7F6E\u7EC4\u4EF6\u7EA7\u522B\u7684\u5168\u5C40Tokens
 */
const token = {
  '--bui-button-height': '34px',
};

export default () => {
  return (
    <ThemeProvider
      isRoot
      token={token}
      responsive={responsive}
      defaultLightToken={defaultLightToken}
      defaultDarkToken={defaultDarkToken}
    >
      <Button variant="contained" color="info">
        \u81EA\u5B9A\u4E49Tokens
      </Button>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var o=x()(p()().mark(function r(){var t,l=arguments;return p()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(1212).then(e.bind(e,61212));case 2:return d.abrupt("return",(t=d.sent).default.apply(t,l));case 3:case"end":return d.stop()}},r)}));function a(){return o.apply(this,arguments)}return a}()}},"packages-bui-core-src-theme-provider-demo-en-us-1":{component:u.memo(u.lazy(x()(p()().mark(function o(){var a,r,t,l,n,d,s;return p()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return a=h.sent,r=a.ThemeProvider,t=a.Button,h.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return l=h.sent,n=l.default,d={"--bui-button-height":"34px"},s={"--bui-button-height":"28px"},h.abrupt("return",{default:function(){return n.createElement(r,{isRoot:!0,token:d},n.createElement(t,{variant:"contained",color:"info",style:{marginRight:"20px"}},"\u81EA\u5B9A\u4E49Tokens"),n.createElement(r,{token:s},n.createElement(t,{variant:"contained",color:"info",className:"test"},"\u5D4C\u5957\u7684Tokens")))}});case 12:case"end":return h.stop()}},o)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-theme-provider-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { ThemeProvider, Button } from '@bifrostui/react';
import React from 'react';

const token = {
  '--bui-button-height': '34px',
};

const internalToken = {
  '--bui-button-height': '28px',
  // \u4E0D\u63A8\u8350\u5728token\u4E2D\u590D\u5199\u5185\u7F6EToken\uFF0C\u5C3D\u91CF\u4F7F\u7528\u7EC4\u4EF6\u7684\u5168\u5C40\u53D8\u91CF\u6765\u5B9A\u5236\u6837\u5F0F
  // '--bui-color-info-end': '#148a00',
};

export default () => {
  return (
    <ThemeProvider isRoot token={token}>
      <Button variant="contained" color="info" style={{ marginRight: '20px' }}>
        \u81EA\u5B9A\u4E49Tokens
      </Button>
      <ThemeProvider token={internalToken}>
        <Button variant="contained" color="info" className="test">
          \u5D4C\u5957\u7684Tokens
        </Button>
      </ThemeProvider>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var o=x()(p()().mark(function r(){var t,l=arguments;return p()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(1212).then(e.bind(e,61212));case 2:return d.abrupt("return",(t=d.sent).default.apply(t,l));case 3:case"end":return d.stop()}},r)}));function a(){return o.apply(this,arguments)}return a}()}},"packages-bui-core-src-theme-provider-demo-en-us-2":{component:u.memo(u.lazy(x()(p()().mark(function o(){var a,r,t,l;return p()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return a=d.sent,r=a.Button,d.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return t=d.sent,l=t.default,d.abrupt("return",{default:function(){return l.createElement(r,{variant:"contained",color:"info",style:{"--bui-button-height":"28px"}},"\u81EA\u5B9A\u4E49Tokens")}});case 9:case"end":return d.stop()}},o)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-theme-provider-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button } from '@bifrostui/react';
import React from 'react';
/**
 * 1.\u5C0F\u7A0B\u5E8F\u5168\u5C40\u6216\u9875\u9762\u7EA7\u4E3B\u9898\uFF0C\u53EF\u5728\u5165\u53E3\u6216\u9875\u9762\u7EA7\u6837\u5F0F\u6587\u4EF6\u4E2D\u81EA\u884C\u4E66\u5199\u9009\u62E9\u5668\u5BF9\u5E94\u7684\u6837\u5F0F\u53D8\u91CF\uFF0C\u9875\u9762\u7EA7\u4F1A\u8986\u76D6\u5168\u5C40\u6837\u5F0F
 * app.less
 * page { --bui-button-height: 32px }
 */

// 2.\u5C0F\u7A0B\u5E8F\u5C40\u90E8\u4E3B\u9898
export default () => {
  return (
    <Button
      variant="contained"
      color="info"
      style={{ '--bui-button-height': '28px' }}
    >
      \u81EA\u5B9A\u4E49Tokens
    </Button>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var o=x()(p()().mark(function r(){var t,l=arguments;return p()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(1212).then(e.bind(e,61212));case 2:return d.abrupt("return",(t=d.sent).default.apply(t,l));case 3:case"end":return d.stop()}},r)}));function a(){return o.apply(this,arguments)}return a}()}},"packages-bui-core-src-theme-provider-demo-en-us-3":{component:u.memo(u.lazy(x()(p()().mark(function o(){var a,r,t,l,n,d,s,m,h,f,g,b,E,P,C,O,T,B,L,D,k,$,F;return p()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return U.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return a=U.sent,r=a.ThemeProvider,t=a.Button,l=a.Dialog,n=a.Stack,d=a.Picker,s=a.Calendar,m=a.Input,h=a.TextArea,f=a.Select,g=a.SelectOption,b=a.CitySelector,E=a.EN,P=a.CN,C=a.TW,U.next=19,Promise.resolve().then(e.t.bind(e,75271,19));case 19:return O=U.sent,T=O.default,B=O.useState,U.next=24,Promise.resolve().then(e.bind(e,40129));case 24:return L=U.sent,D=L.default,k=[{label:"option 1",value:1},{label:"option 2",value:2},{label:"option 3",value:3}],$=[{code:"110100",name:"\u5317\u4EAC"},{code:"310100",name:"\u4E0A\u6D77"},{code:"440100",name:"\u5E7F\u5DDE"}],F=[{groupName:"A",cities:[{code:"610900",name:"\u5B89\u5EB7"},{code:"210300",name:"\u978D\u5C71"}]},{groupName:"B",cities:[{code:"652800",name:"\u5DF4\u97F3\u90ED\u695E"},{code:"511900",name:"\u5DF4\u4E2D"}]},{groupName:"C",cities:[{code:"130900",name:"\u6CA7\u5DDE"},{code:"220100",name:"\u957F\u6625"}]},{groupName:"D",cities:[{code:"532900",name:"\u5927\u7406"},{code:"210200",name:"\u5927\u8FDE"}]}],U.abrupt("return",{default:function(){var j=B(!1),X=c()(j,2),Z=X[0],ee=X[1],ae=B(D().toDate()),ne=c()(ae,2),te=ne[0],ie=ne[1],se=B(""),re=c()(se,2),de=re[0],ue=re[1],ce=B(E),oe=c()(ce,2),pe=oe[0],me=oe[1],ve=l.useDialog(),le=c()(ve,2),Ie=le[0],fe=le[1],he=function(q,Q){console.log("date change:",Q),ie(Q.value)},ge=function(q,Q){ue(Q==null?void 0:Q.value),console.log("change",Q==null?void 0:Q.value)},xe={code:"110100",name:"\u5317\u4EAC"},ye={code:"310100",name:"\u4E0A\u6D77"},be=function(q){console.log(q)},Ee=function(){console.log("onHide")},Ce=[{label:"en-US",value:E},{label:"zh-CN",value:P},{label:"zh-TW",value:C}];return T.createElement(r,{locale:pe},fe,T.createElement(n,{spacing:"10px"},T.createElement("div",null,"\u8BED\u8A00\u9009\u62E9"),T.createElement(f,{defaultValue:E,onChange:function(q,Q){var Se=Q.value;me(Se)}},Ce.map(function(Y,q){return T.createElement(g,{key:q,value:Y.value,label:Y.label})})),T.createElement(t,{onClick:function(){Ie.confirm({message:"\u6D4B\u8BD5"})}},"Dialog"),T.createElement(t,{onClick:function(){ee(!0)}},"\u6253\u5F00picker"),T.createElement(d,{open:Z,onClose:function(q,Q){ee(!1),console.log("onClose",q,Q)},options:[[{value:1,label:"\u5468\u4E00"},{value:2,label:"\u5468\u4E8C"},{value:3,label:"\u5468\u4E09"},{value:4,label:"\u5468\u56DB"},{value:5,label:"\u5468\u4E94"},{value:6,label:"\u5468\u516D"},{value:7,label:"\u5468\u65E5"}]]}),T.createElement(s,{value:te,onChange:he}),T.createElement(m,{value:de,onChange:ge}),T.createElement(h,{style:{width:"300px"}}),T.createElement(f,null,k.map(function(Y,q){return T.createElement(g,{key:q,value:Y.value,label:Y.label})})),T.createElement(b,{cities:F,onSelect:be,selectedCity:xe,currentCity:ye,hotCities:$,onClose:Ee,style:{height:"500px"}})))}});case 30:case"end":return U.stop()}},o)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-theme-provider-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  ThemeProvider,
  Button,
  Dialog,
  Stack,
  Picker,
  Calendar,
  Input,
  TextArea,
  Select,
  SelectOption,
  CitySelector,
  EN,
  CN,
  TW,
} from '@bifrostui/react';
import React, { useState } from 'react';
import dayjs from 'dayjs/esm/index';

const options = [
  {
    label: 'option 1',
    value: 1,
  },
  {
    label: 'option 2',
    value: 2,
  },
  {
    label: 'option 3',
    value: 3,
  },
];

const hotCities = [
  {
    code: '110100',
    name: '\u5317\u4EAC',
  },
  {
    code: '310100',
    name: '\u4E0A\u6D77',
  },
  {
    code: '440100',
    name: '\u5E7F\u5DDE',
  },
];

const cities = [
  {
    groupName: 'A',
    cities: [
      {
        code: '610900',
        name: '\u5B89\u5EB7',
      },
      {
        code: '210300',
        name: '\u978D\u5C71',
      },
    ],
  },
  {
    groupName: 'B',
    cities: [
      {
        code: '652800',
        name: '\u5DF4\u97F3\u90ED\u695E',
      },
      {
        code: '511900',
        name: '\u5DF4\u4E2D',
      },
    ],
  },
  {
    groupName: 'C',
    cities: [
      {
        code: '130900',
        name: '\u6CA7\u5DDE',
      },
      {
        code: '220100',
        name: '\u957F\u6625',
      },
    ],
  },
  {
    groupName: 'D',
    cities: [
      {
        code: '532900',
        name: '\u5927\u7406',
      },
      {
        code: '210200',
        name: '\u5927\u8FDE',
      },
    ],
  },
];

export default () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(dayjs().toDate());
  const [inputValue, setInputValue] = useState('');
  const [curValue, setCurValue] = useState(EN);
  const [dialog, contextHolder] = Dialog.useDialog();
  const handleChange = (e, res) => {
    console.log('date change:', res);
    setValue(res.value);
  };
  const handleInputChange = (e, data) => {
    setInputValue(data?.value);
    console.log('change', data?.value);
  };
  const selectedCity = {
    code: '110100',
    name: '\u5317\u4EAC',
  };
  const currentCity = {
    code: '310100',
    name: '\u4E0A\u6D77',
  };
  const onSelect = (city) => {
    console.log(city);
  };

  const onHide = () => {
    console.log('onHide');
  };
  const optionInt = [
    {
      label: 'en-US',
      value: EN,
    },
    {
      label: 'zh-CN',
      value: CN,
    },
    {
      label: 'zh-TW',
      value: TW,
    },
  ];
  return (
    <ThemeProvider locale={curValue}>
      {contextHolder}
      <Stack spacing="10px">
        <div>\u8BED\u8A00\u9009\u62E9</div>
        <Select
          defaultValue={EN}
          onChange={(e, { value: locale }) => {
            setCurValue(locale);
          }}
        >
          {optionInt.map((item, index) => (
            <SelectOption key={index} value={item.value} label={item.label} />
          ))}
        </Select>
        <Button
          onClick={() => {
            dialog.confirm({
              message: '\u6D4B\u8BD5',
            });
          }}
        >
          Dialog
        </Button>
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          \u6253\u5F00picker
        </Button>
        <Picker
          open={open}
          onClose={(e, data) => {
            setOpen(false);
            console.log('onClose', e, data);
          }}
          options={[
            [
              {
                value: 1,
                label: '\u5468\u4E00',
              },
              {
                value: 2,
                label: '\u5468\u4E8C',
              },
              {
                value: 3,
                label: '\u5468\u4E09',
              },
              {
                value: 4,
                label: '\u5468\u56DB',
              },
              {
                value: 5,
                label: '\u5468\u4E94',
              },
              {
                value: 6,
                label: '\u5468\u516D',
              },
              {
                value: 7,
                label: '\u5468\u65E5',
              },
            ],
          ]}
        />
        <Calendar value={value} onChange={handleChange} />
        <Input value={inputValue} onChange={handleInputChange} />
        <TextArea style={{ width: '300px' }} />
        <Select>
          {options.map((item, index) => (
            <SelectOption key={index} value={item.value} label={item.label} />
          ))}
        </Select>
        <CitySelector
          cities={cities}
          onSelect={onSelect}
          selectedCity={selectedCity}
          currentCity={currentCity}
          hotCities={hotCities}
          onClose={onHide}
          style={{ height: '500px' }}
        />
      </Stack>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"},dayjs:{type:"NPM",value:"1.11.13"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2)),"dayjs/esm/index":I},renderOpts:{compile:function(){var o=x()(p()().mark(function r(){var t,l=arguments;return p()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,e.e(1212).then(e.bind(e,61212));case 2:return d.abrupt("return",(t=d.sent).default.apply(t,l));case 3:case"end":return d.stop()}},r)}));function a(){return o.apply(this,arguments)}return a}()}}}},28870:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return I}});var M=e(48305),c=e.n(M),A=e(90228),p=e.n(A),y=e(87999),x=e.n(y),u=e(75271),I={"packages-bui-core-src-toast-demo-en-us-0":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=s.sent,a=o.Stack,r=o.Button,t=o.Toast,s.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return l=s.sent,n=l.default,s.abrupt("return",{default:function(){return n.createElement(a,{direction:"row",spacing:"10px"},n.createElement(r,{onClick:function(){t("\u63D0\u793A\u5185\u5BB9")}},"toast"))}});case 11:case"end":return s.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-toast-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Stack, Button, Toast } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <Button
        onClick={() => {
          Toast('\u63D0\u793A\u5185\u5BB9');
        }}
      >
        toast
      </Button>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-toast-demo-en-us-1":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d,s;return p()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=h.sent,a=o.Stack,r=o.Button,t=o.Toast,l=o.ThemeProvider,n=o.useTheme,h.next=10,Promise.resolve().then(e.t.bind(e,75271,19));case 10:return d=h.sent,s=d.default,h.abrupt("return",{default:function(){var g=t.useToast(),b=c()(g,2),E=b[0],P=b[1],C=n();return s.createElement(l,{locale:C.locale},P,s.createElement(a,{direction:"row",spacing:"10px"},s.createElement(r,{onClick:function(){E("\u63D0\u793A\u5185\u5BB9")}},"toast")))}});case 13:case"end":return h.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-toast-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast('\u63D0\u793A\u5185\u5BB9');
          }}
        >
          toast
        </Button>
      </Stack>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-toast-demo-en-us-2":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d,s;return p()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=h.sent,a=o.Stack,r=o.Button,t=o.Toast,l=o.ThemeProvider,n=o.useTheme,h.next=10,Promise.resolve().then(e.t.bind(e,75271,19));case 10:return d=h.sent,s=d.default,h.abrupt("return",{default:function(){var g=t.useToast(),b=c()(g,2),E=b[0],P=b[1],C=n();return s.createElement(l,{locale:C.locale},P,s.createElement(a,{direction:"row",spacing:"10px"},s.createElement(r,{onClick:function(){E.warning("\u6821\u9A8C\u4E0D\u901A\u8FC7\uFF0C\u8BF7\u91CD\u8BD5")}},"warning"),s.createElement(r,{onClick:function(){E.loading("\u6B63\u5728\u52A0\u8F7D")}},"loading"),s.createElement(r,{onClick:function(){E.success("\u64CD\u4F5C\u6210\u529F")}},"success"),s.createElement(r,{onClick:function(){E.fail("\u64CD\u4F5C\u5931\u8D25")}},"fail")))}});case 13:case"end":return h.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-toast-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast.warning('\u6821\u9A8C\u4E0D\u901A\u8FC7\uFF0C\u8BF7\u91CD\u8BD5');
          }}
        >
          warning
        </Button>
        <Button
          onClick={() => {
            toast.loading('\u6B63\u5728\u52A0\u8F7D');
          }}
        >
          loading
        </Button>
        <Button
          onClick={() => {
            toast.success('\u64CD\u4F5C\u6210\u529F');
          }}
        >
          success
        </Button>
        <Button
          onClick={() => {
            toast.fail('\u64CD\u4F5C\u5931\u8D25');
          }}
        >
          fail
        </Button>
      </Stack>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-toast-demo-en-us-3":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d,s;return p()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=h.sent,a=o.Stack,r=o.Button,t=o.Toast,l=o.ThemeProvider,n=o.useTheme,h.next=10,Promise.resolve().then(e.t.bind(e,75271,19));case 10:return d=h.sent,s=d.default,h.abrupt("return",{default:function(){var g=t.useToast(),b=c()(g,2),E=b[0],P=b[1],C=n();return s.createElement(l,{locale:C.locale},P,s.createElement(a,{direction:"row",spacing:"10px"},s.createElement(r,{onClick:function(){E(`\u5C0F\u4E8C\u5F88\u5FD9
\u7CFB\u7EDF\u5F88\u7D2F\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF5E`)}},"toast")))}});case 13:case"end":return h.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-toast-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();
  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast('\u5C0F\u4E8C\u5F88\u5FD9\\n\u7CFB\u7EDF\u5F88\u7D2F\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF5E');
          }}
        >
          toast
        </Button>
      </Stack>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-toast-demo-en-us-4":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d,s;return p()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=h.sent,a=o.Stack,r=o.Button,t=o.Toast,l=o.ThemeProvider,n=o.useTheme,h.next=10,Promise.resolve().then(e.t.bind(e,75271,19));case 10:return d=h.sent,s=d.default,h.abrupt("return",{default:function(){var g=t.useToast(),b=c()(g,2),E=b[0],P=b[1],C=n(),O,T=function(){O=E({message:"\u6211\u4E0D\u4F1A\u81EA\u52A8\u5173\u95ED",duration:0})},B=function(){var D;(D=O)===null||D===void 0||D.close()};return s.createElement(l,{locale:C.locale},P,s.createElement(a,{direction:"row",spacing:"10px"},s.createElement(r,{onClick:function(){E({message:"\u6211\u4F1A\u5C55\u793A4\u79D2",duration:4e3})}},"\u5C55\u793A4\u79D2"),s.createElement(r,{onClick:T},"\u4E0D\u81EA\u52A8\u5173\u95ED(ToastA)"),s.createElement(r,{onClick:B},"\u624B\u52A8\u5173\u95EDToastA")))}});case 13:case"end":return h.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-toast-demo-en-us-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();

  let toastA;
  const showToastA = () => {
    toastA = toast({
      message: '\u6211\u4E0D\u4F1A\u81EA\u52A8\u5173\u95ED',
      duration: 0,
    });
  };

  const closeToastA = () => {
    toastA?.close();
  };

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast({
              message: '\u6211\u4F1A\u5C55\u793A4\u79D2',
              duration: 4000,
            });
          }}
        >
          \u5C55\u793A4\u79D2
        </Button>

        <Button onClick={showToastA}>\u4E0D\u81EA\u52A8\u5173\u95ED(ToastA)</Button>

        <Button onClick={closeToastA}>\u624B\u52A8\u5173\u95EDToastA</Button>
      </Stack>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-toast-demo-en-us-5":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d,s;return p()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=h.sent,a=o.Stack,r=o.Button,t=o.Toast,l=o.ThemeProvider,n=o.useTheme,h.next=10,Promise.resolve().then(e.t.bind(e,75271,19));case 10:return d=h.sent,s=d.default,h.abrupt("return",{default:function(){var g=t.useToast(),b=c()(g,2),E=b[0],P=b[1],C=n();return s.createElement(l,{locale:C.locale},P,s.createElement(a,{direction:"row",spacing:"10px"},s.createElement(r,{onClick:function(){E({message:"\u9876\u90E8\u5C55\u793A",position:"top"})}},"\u9876\u90E8\u5C55\u793A"),s.createElement(r,{onClick:function(){E({message:"\u5C45\u4E2D\u5C55\u793A",position:"center"})}},"\u5C45\u4E2D\u5C55\u793A"),s.createElement(r,{onClick:function(){E({message:"\u5E95\u90E8\u5C55\u793A",position:"bottom"})}},"\u5E95\u90E8\u5C55\u793A")))}});case 13:case"end":return h.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-toast-demo-en-us-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast({
              message: '\u9876\u90E8\u5C55\u793A',
              position: 'top',
            });
          }}
        >
          \u9876\u90E8\u5C55\u793A
        </Button>
        <Button
          onClick={() => {
            toast({
              message: '\u5C45\u4E2D\u5C55\u793A',
              position: 'center',
            });
          }}
        >
          \u5C45\u4E2D\u5C55\u793A
        </Button>
        <Button
          onClick={() => {
            toast({
              message: '\u5E95\u90E8\u5C55\u793A',
              position: 'bottom',
            });
          }}
        >
          \u5E95\u90E8\u5C55\u793A
        </Button>
      </Stack>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-toast-demo-en-us-6":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d,s;return p()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=h.sent,a=o.Stack,r=o.Button,t=o.Toast,l=o.ThemeProvider,n=o.useTheme,h.next=10,Promise.resolve().then(e.t.bind(e,75271,19));case 10:return d=h.sent,s=d.default,h.abrupt("return",{default:function(){var g=t.useToast(),b=c()(g,2),E=b[0],P=b[1],C=n();return s.createElement(l,{locale:C.locale},P,s.createElement(a,{direction:"row",spacing:"10px"},s.createElement(r,{onClick:function(){E({message:"\u9876\u90E8\u5C55\u793A",position:"top",allowMultiple:!0})}},"\u5141\u8BB8\u5B58\u5728\u5176\u4ED6Toast"),s.createElement(r,{onClick:function(){E({message:"\u5C45\u4E2D\u5C55\u793A",position:"center",allowMultiple:!0})}},"\u5141\u8BB8\u5B58\u5728\u5176\u4ED6Toast"),s.createElement(r,{onClick:function(){E({message:"\u5E95\u90E8\u5C55\u793A",position:"bottom",allowMultiple:!1})}},"\u4F1A\u6E05\u9664\u5176\u4ED6Toast")))}});case 13:case"end":return h.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-toast-demo-en-us-6",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast({
              message: '\u9876\u90E8\u5C55\u793A',
              position: 'top',
              allowMultiple: true,
            });
          }}
        >
          \u5141\u8BB8\u5B58\u5728\u5176\u4ED6Toast
        </Button>
        <Button
          onClick={() => {
            toast({
              message: '\u5C45\u4E2D\u5C55\u793A',
              position: 'center',
              allowMultiple: true,
            });
          }}
        >
          \u5141\u8BB8\u5B58\u5728\u5176\u4ED6Toast
        </Button>
        <Button
          onClick={() => {
            toast({
              message: '\u5E95\u90E8\u5C55\u793A',
              position: 'bottom',
              allowMultiple: false,
            });
          }}
        >
          \u4F1A\u6E05\u9664\u5176\u4ED6Toast
        </Button>
      </Stack>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-toast-demo-en-us-7":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d,s,m,h;return p()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return g.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=g.sent,a=o.Stack,r=o.Button,t=o.Toast,l=o.ThemeProvider,n=o.useTheme,g.next=10,e.e(9975).then(e.bind(e,29975));case 10:return d=g.sent,s=d.LocationFilledIcon,g.next=14,Promise.resolve().then(e.t.bind(e,75271,19));case 14:return m=g.sent,h=m.default,g.abrupt("return",{default:function(){var E=t.useToast(),P=c()(E,2),C=P[0],O=P[1],T=n();return h.createElement(l,{locale:T.locale},O,h.createElement(a,{direction:"row",spacing:"10px"},h.createElement(r,{onClick:function(){C({message:"\u6211\u5728\u4E0A\u6D77",icon:h.createElement(s,{size:"large",htmlColor:"#fee01e"})})}},"\u5B9A\u5236\u56FE\u6807")))}});case 17:case"end":return g.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-toast-demo-en-us-7",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';
import { LocationFilledIcon } from '@bifrostui/icons';
import React from 'react';

export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast({
              message: '\u6211\u5728\u4E0A\u6D77',
              icon: <LocationFilledIcon size="large" htmlColor="#fee01e" />,
            });
          }}
        >
          \u5B9A\u5236\u56FE\u6807
        </Button>
      </Stack>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-toast-demo-en-us-8":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d,s;return p()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=h.sent,a=o.Stack,r=o.Button,t=o.Toast,l=o.ThemeProvider,n=o.useTheme,h.next=10,Promise.resolve().then(e.t.bind(e,75271,19));case 10:return d=h.sent,s=d.default,h.abrupt("return",{default:function(){var g=t.useToast(),b=c()(g,2),E=b[0],P=b[1],C=n();return s.createElement(l,{locale:C.locale},P,s.createElement(a,{direction:"row",spacing:"10px"},s.createElement(r,{onClick:function(){E({message:"\u63D0\u793A\u5185\u5BB9",disableClick:!0,duration:3e3})}},"\u5C55\u793AToast\u7981\u6B62\u9875\u9762\u5185\u5BB9\u70B9\u51FB")))}});case 13:case"end":return h.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-toast-demo-en-us-8",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast({
              message: '\u63D0\u793A\u5185\u5BB9',
              disableClick: true,
              duration: 3000,
            });
          }}
        >
          \u5C55\u793AToast\u7981\u6B62\u9875\u9762\u5185\u5BB9\u70B9\u51FB
        </Button>
      </Stack>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-toast-demo-en-us-9":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d,s;return p()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=h.sent,a=o.Stack,r=o.Button,t=o.Toast,l=o.ThemeProvider,n=o.useTheme,h.next=10,Promise.resolve().then(e.t.bind(e,75271,19));case 10:return d=h.sent,s=d.default,h.abrupt("return",{default:function(){var g=t.useToast(),b=c()(g,2),E=b[0],P=b[1],C=n();return s.createElement(l,{locale:C.locale},P,s.createElement(a,{direction:"row",spacing:"10px"},s.createElement(r,{onClick:function(){E({message:"\u63D0\u793A\u5185\u5BB9",onClose:function(){E("\u5DF2\u5173\u95ED")}})}},"\u5173\u95ED\u56DE\u8C03")))}});case 13:case"end":return h.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-toast-demo-en-us-9",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast({
              message: '\u63D0\u793A\u5185\u5BB9',
              onClose: () => {
                toast('\u5DF2\u5173\u95ED');
              },
            });
          }}
        >
          \u5173\u95ED\u56DE\u8C03
        </Button>
      </Stack>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-toast-demo-en-us-10":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d,s;return p()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=h.sent,a=o.Stack,r=o.Button,t=o.Toast,l=o.ThemeProvider,n=o.useTheme,h.next=10,Promise.resolve().then(e.t.bind(e,75271,19));case 10:return d=h.sent,s=d.default,h.abrupt("return",{default:function(){var g=t.useToast(),b=c()(g,2),E=b[0],P=b[1],C=n();return s.createElement(l,{locale:C.locale},P,s.createElement(a,{direction:"row",spacing:"10px"},s.createElement(r,{onClick:function(){E({message:"\u63D0\u793A\u5185\u5BB91",position:"top",allowMultiple:!0,duration:0})}},"\u4E0D\u6D88\u59311"),s.createElement(r,{onClick:function(){E({message:"\u63D0\u793A\u5185\u5BB92",position:"center",allowMultiple:!0,duration:0})}},"\u4E0D\u6D88\u59312"),s.createElement(r,{onClick:function(){E.clear()}},"\u5173\u95ED\u6240\u6709Toast")))}});case 13:case"end":return h.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-toast-demo-en-us-10",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';
import React from 'react';

export default () => {
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast({
              message: '\u63D0\u793A\u5185\u5BB91',
              position: 'top',
              allowMultiple: true,
              duration: 0,
            });
          }}
        >
          \u4E0D\u6D88\u59311
        </Button>
        <Button
          onClick={() => {
            toast({
              message: '\u63D0\u793A\u5185\u5BB92',
              position: 'center',
              allowMultiple: true,
              duration: 0,
            });
          }}
        >
          \u4E0D\u6D88\u59312
        </Button>
        <Button
          onClick={() => {
            toast.clear();
          }}
        >
          \u5173\u95ED\u6240\u6709Toast
        </Button>
      </Stack>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-toast-demo-en-us-11":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l,n,d,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=f.sent,a=o.Stack,r=o.Button,t=o.Toast,l=o.ThemeProvider,n=o.useTheme,f.next=10,Promise.resolve().then(e.t.bind(e,75271,19));case 10:return d=f.sent,s=d.default,m=d.useRef,f.abrupt("return",{default:function(){var b=m(),E=t.useToast(),P=c()(E,2),C=P[0],O=P[1],T=n();return s.createElement(l,{locale:T.locale},O,s.createElement(a,{direction:"row",spacing:"10px"},s.createElement(r,{onClick:function(){C({ref:b,message:"\u63D0\u793A\u5185\u5BB9",className:"my-toast",style:{"--color":"red","--border-radius":"30px","--font-size":"16px"},onEntered:function(){console.log("ref",b)}})}},"toast")))}});case 14:case"end":return f.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-toast-demo-en-us-11",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import {
  Stack,
  Button,
  Toast,
  ThemeProvider,
  useTheme,
} from '@bifrostui/react';
import React, { useRef } from 'react';

export default () => {
  const ref = useRef();
  const [toast, contextHolder] = Toast.useToast();
  const theme = useTheme();

  return (
    <ThemeProvider locale={theme.locale}>
      {contextHolder}
      <Stack direction="row" spacing="10px">
        <Button
          onClick={() => {
            toast({
              ref,
              message: '\u63D0\u793A\u5185\u5BB9',
              className: 'my-toast',
              style: {
                '--color': 'red',
                '--border-radius': '30px',
                '--font-size': '16px',
              },
              onEntered: () => {
                console.log('ref', ref);
              },
            });
          }}
        >
          toast
        </Button>
      </Stack>
    </ThemeProvider>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}}}},99854:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return I}});var M=e(48305),c=e.n(M),A=e(90228),p=e.n(A),y=e(87999),x=e.n(y),u=e(75271),I={"packages-bui-core-src-tooltip-demo-en-us-0":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=n.sent,a=o.Tooltip,n.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){return t.createElement(a,{title:"This is a tooltip"},t.createElement("span",null,"click\u663E\u793A"))}});case 9:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tooltip-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tooltip } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Tooltip title="This is a tooltip">
      <span>click\u663E\u793A</span>
    </Tooltip>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-tooltip-demo-en-us-1":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l;return p()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=d.sent,a=o.Tooltip,d.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return r=d.sent,t=r.default,l=r.useState,d.abrupt("return",{default:function(){var m=l(!0),h=c()(m,2),f=h[0],g=h[1];return t.createElement(a,{title:"This is a tooltip",open:f},t.createElement("span",{onClick:function(){return g(!f)}},"open\u63A7\u5236\u663E\u9690"))}});case 10:case"end":return d.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tooltip-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tooltip } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(true);
  return (
    <Tooltip title="This is a tooltip" open={open}>
      <span onClick={() => setOpen(!open)}>open\u63A7\u5236\u663E\u9690</span>
    </Tooltip>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-tooltip-demo-en-us-2":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=n.sent,a=o.Tooltip,n.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){return t.createElement(a,{title:"This is a tooltip",defaultOpen:!0},t.createElement("span",null,"defaultOpen\u9ED8\u8BA4\u663E\u793A"))}});case 9:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tooltip-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tooltip } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Tooltip title="This is a tooltip" defaultOpen>
      <span>defaultOpen\u9ED8\u8BA4\u663E\u793A</span>
    </Tooltip>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-tooltip-demo-en-us-3":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t,l;return p()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=d.sent,a=o.Tooltip,r=o.Button,d.next=7,Promise.resolve().then(e.t.bind(e,75271,19));case 7:return t=d.sent,l=t.default,d.abrupt("return",{default:function(){var m=function(f){return l.createElement(r,{style:{borderRadius:0,marginTop:"4px",width:"80px"}},f)};return l.createElement("div",null,l.createElement("div",{style:{display:"flex",width:"300px",marginLeft:"100px",justifyContent:"space-between"}},l.createElement(a,{trigger:"hover",title:"This is a tooltip",placement:"topLeft"},m(l.createElement("span",null,"topLeft"))),l.createElement(a,{trigger:"hover",title:"This is a tooltip",placement:"top"},m(l.createElement("span",null,"top"))),l.createElement(a,{trigger:"hover",title:"This is a tooltip",placement:"topRight"},m(l.createElement("span",null,"topRight")))),l.createElement("div",{style:{marginTop:"20px",display:"inline-flex",width:"100px",flexDirection:"column"}},l.createElement(a,{trigger:"hover",title:"This is a tooltip",placement:"leftTop"},m(l.createElement("span",null,"leftTop"))),l.createElement(a,{trigger:"hover",title:"This is a tooltip",placement:"left"},m(l.createElement("span",null,"left"))),l.createElement(a,{trigger:"hover",title:"This is a tooltip",placement:"leftBottom"},m(l.createElement("span",null,"leftBottom")))),l.createElement("div",{style:{marginLeft:"300px",display:"inline-flex",width:"100px",flexDirection:"column"}},l.createElement(a,{trigger:"hover",title:"This is a tooltip",placement:"rightTop"},m(l.createElement("span",null,"rightTop"))),l.createElement(a,{trigger:"hover",title:"This is a tooltip",placement:"right"},m(l.createElement("span",null,"right"))),l.createElement(a,{trigger:"hover",title:"This is a tooltip",placement:"rightBottom"},m(l.createElement("span",null,"rightBottom")))),l.createElement("div",{style:{marginLeft:"100px",marginTop:"20px",display:"flex",width:"300px",justifyContent:"space-between"}},l.createElement(a,{trigger:"hover",title:"This is a tooltip",placement:"bottomLeft"},m(l.createElement("span",null,"bottomLeft"))),l.createElement(a,{trigger:"hover",title:"This is a tooltip",placement:"bottom"},m(l.createElement("span",null,"bottom"))),l.createElement(a,{trigger:"hover",title:"This is a tooltip",placement:"bottomRight"},m(l.createElement("span",null,"bottomRight")))))}});case 10:case"end":return d.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tooltip-demo-en-us-3",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tooltip, Button } from '@bifrostui/react';
import React from 'react';

export default () => {
  const packageButton = (inner) => {
    return (
      <Button style={{ borderRadius: 0, marginTop: '4px', width: '80px' }}>
        {inner}
      </Button>
    );
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          width: '300px',
          marginLeft: '100px',
          justifyContent: 'space-between',
        }}
      >
        <Tooltip trigger="hover" title="This is a tooltip" placement="topLeft">
          {packageButton(<span>topLeft</span>)}
        </Tooltip>
        <Tooltip trigger="hover" title="This is a tooltip" placement="top">
          {packageButton(<span>top</span>)}
        </Tooltip>
        <Tooltip trigger="hover" title="This is a tooltip" placement="topRight">
          {packageButton(<span>topRight</span>)}
        </Tooltip>
      </div>
      <div
        style={{
          marginTop: '20px',
          display: 'inline-flex',
          width: '100px',
          flexDirection: 'column',
        }}
      >
        <Tooltip trigger="hover" title="This is a tooltip" placement="leftTop">
          {packageButton(<span>leftTop</span>)}
        </Tooltip>
        <Tooltip trigger="hover" title="This is a tooltip" placement="left">
          {packageButton(<span>left</span>)}
        </Tooltip>
        <Tooltip
          trigger="hover"
          title="This is a tooltip"
          placement="leftBottom"
        >
          {packageButton(<span>leftBottom</span>)}
        </Tooltip>
      </div>
      <div
        style={{
          marginLeft: '300px',
          display: 'inline-flex',
          width: '100px',
          flexDirection: 'column',
        }}
      >
        <Tooltip trigger="hover" title="This is a tooltip" placement="rightTop">
          {packageButton(<span>rightTop</span>)}
        </Tooltip>
        <Tooltip trigger="hover" title="This is a tooltip" placement="right">
          {packageButton(<span>right</span>)}
        </Tooltip>
        <Tooltip
          trigger="hover"
          title="This is a tooltip"
          placement="rightBottom"
        >
          {packageButton(<span>rightBottom</span>)}
        </Tooltip>
      </div>
      <div
        style={{
          marginLeft: '100px',
          marginTop: '20px',
          display: 'flex',
          width: '300px',
          justifyContent: 'space-between',
        }}
      >
        <Tooltip
          trigger="hover"
          title="This is a tooltip"
          placement="bottomLeft"
        >
          {packageButton(<span>bottomLeft</span>)}
        </Tooltip>
        <Tooltip trigger="hover" title="This is a tooltip" placement="bottom">
          {packageButton(<span>bottom</span>)}
        </Tooltip>
        <Tooltip
          trigger="hover"
          title="This is a tooltip"
          placement="bottomRight"
        >
          {packageButton(<span>bottomRight</span>)}
        </Tooltip>
      </div>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-tooltip-demo-en-us-4":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=n.sent,a=o.Tooltip,n.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){return t.createElement(a,{title:"This is a tooltip",trigger:"hover"},t.createElement("span",null,"hover\u89E6\u53D1\u65B9\u5F0F"))}});case 9:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tooltip-demo-en-us-4",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tooltip } from '@bifrostui/react';
import React from 'react';

export default () => {
  return (
    <Tooltip title="This is a tooltip" trigger="hover">
      <span>hover\u89E6\u53D1\u65B9\u5F0F</span>
    </Tooltip>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}},"packages-bui-core-src-tooltip-demo-en-us-5":{component:u.memo(u.lazy(x()(p()().mark(function i(){var o,a,r,t;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return o=n.sent,a=o.Tooltip,n.next=6,Promise.resolve().then(e.t.bind(e,75271,19));case 6:return r=n.sent,t=r.default,n.abrupt("return",{default:function(){var s=function(h,f){console.log(JSON.stringify(f))};return t.createElement(a,{title:"This is a tooltip",trigger:"click",onOpenChange:s},t.createElement("span",null,"onOpenChange \u56DE\u8C03\u65B9\u6CD5"))}});case 9:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-tooltip-demo-en-us-5",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Tooltip } from '@bifrostui/react';
import React from 'react';

export default () => {
  const onOpenChange = (event, data) => {
    console.log(JSON.stringify(data));
  };
  return (
    <Tooltip
      title="This is a tooltip"
      trigger="click"
      onOpenChange={onOpenChange}
    >
      <span>onOpenChange \u56DE\u8C03\u65B9\u6CD5</span>
    </Tooltip>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(u,2))},renderOpts:{compile:function(){var i=x()(p()().mark(function a(){var r,t=arguments;return p()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1212).then(e.bind(e,61212));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,t));case 3:case"end":return n.stop()}},a)}));function o(){return i.apply(this,arguments)}return o}()}}}},54869:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return o}});var M=e(26068),c=e.n(M),A=e(90228),p=e.n(A),y=e(48305),x=e.n(y),u=e(87999),I=e.n(u),i=e(75271),o={"packages-bui-core-src-transition-demo-en-us-0":{component:i.memo(i.lazy(I()(p()().mark(function a(){var r,t,l,n,d,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=f.sent,t=r.Button,l=r.Transition,n=r.Stack,f.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return d=f.sent,s=d.default,m=d.useState,f.abrupt("return",{default:function(){var b=m(!0),E=x()(b,2),P=E[0],C=E[1];return s.createElement(n,null,s.createElement(t,{onClick:function(){C(function(T){return!T})}},P?"OPEN":"CLOSE"),s.createElement(l,{in:P,timeout:1e3},function(O){return s.createElement(s.Fragment,null,s.createElement("div",null,"Status:",O),s.createElement("div",{style:{transition:"opacity 1000ms linear",opacity:O.match(/exit/)?0:1}},"FADE"))}))}});case 12:case"end":return f.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-transition-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Transition, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(true);
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        {open ? 'OPEN' : 'CLOSE'}
      </Button>
      <Transition in={open} timeout={1000}>
        {(status) => (
          <>
            <div>Status:{status}</div>
            <div
              style={{
                transition: \`opacity 1000ms linear\`,
                opacity: status.match(/exit/) ? 0 : 1,
              }}
            >
              FADE
            </div>
          </>
        )}
      </Transition>
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(i,2))},renderOpts:{compile:function(){var a=I()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}},"packages-bui-core-src-transition-demo-en-us-1":{component:i.memo(i.lazy(I()(p()().mark(function a(){var r,t,l,n,d,s,m;return p()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 2:return r=f.sent,t=r.Button,l=r.Transition,n=r.Stack,f.next=8,Promise.resolve().then(e.t.bind(e,75271,19));case 8:return d=f.sent,s=d.default,m=d.useState,f.abrupt("return",{default:function(){var b=m(!0),E=x()(b,2),P=E[0],C=E[1],O=m({}),T=x()(O,2),B=T[0],L=T[1];return s.createElement(n,null,s.createElement(t,{onClick:function(){C(function(k){return!k})}},P?"OPEN":"CLOSE"),s.createElement(l,{in:P,timeout:1e3,onEnter:function(){return L(function(k){return c()(c()({},k),{},{enter:performance.now()})})},onEntering:function(){return L(function(k){return c()(c()({},k),{},{entering:performance.now()})})},onEntered:function(){return L(function(k){return c()(c()({},k),{},{entered:performance.now()})})},onExit:function(){return L(function(k){return c()(c()({},k),{},{exit:performance.now()})})},onExiting:function(){return L(function(k){return c()(c()({},k),{},{exiting:performance.now()})})},onExited:function(){return L(function(k){return c()(c()({},k),{},{exited:performance.now()})})}},function(D){return s.createElement(s.Fragment,null,s.createElement("div",null,"Status:",D),s.createElement("div",{style:{transition:"opacity 1000ms linear",opacity:D.match(/exit/)?0:1}},"FADE"))}),s.createElement("style",null,"@keyframes highlight{from{background-color:#FF8888}to{background:color:#FFFFFF}}"),["enter","entering","entered","exit","exiting","exited"].map(function(D){var k;return s.createElement("div",{key:B[D],style:{animation:"highlight 1s"}},D,": ",((k=B[D])===null||k===void 0?void 0:k.toFixed(1))||"- ")}))}});case 12:case"end":return f.stop()}},a)})))),asset:{type:"BLOCK",id:"packages-bui-core-src-transition-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { Button, Transition, Stack } from '@bifrostui/react';
import React, { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(true);
  const [a, setA] = useState({});
  return (
    <Stack>
      <Button
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        {open ? 'OPEN' : 'CLOSE'}
      </Button>
      <Transition
        in={open}
        timeout={1000}
        onEnter={() => setA((a) => ({ ...a, enter: performance.now() }))}
        onEntering={() => setA((a) => ({ ...a, entering: performance.now() }))}
        onEntered={() => setA((a) => ({ ...a, entered: performance.now() }))}
        onExit={() => setA((a) => ({ ...a, exit: performance.now() }))}
        onExiting={() => setA((a) => ({ ...a, exiting: performance.now() }))}
        onExited={() => setA((a) => ({ ...a, exited: performance.now() }))}
      >
        {(status) => (
          <>
            <div>Status:{status}</div>
            <div
              style={{
                transition: \`opacity 1000ms linear\`,
                opacity: status.match(/exit/) ? 0 : 1,
              }}
            >
              FADE
            </div>
          </>
        )}
      </Transition>
      <style>
        {
          '@keyframes highlight{from{background-color:#FF8888}to{background:color:#FFFFFF}}'
        }
      </style>
      {['enter', 'entering', 'entered', 'exit', 'exiting', 'exited'].map(
        (s) => (
          <div key={a[s]} style={{ animation: 'highlight 1s' }}>
            {s}: {a[s]?.toFixed(1) || '- '}
          </div>
        ),
      )}
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(i,2))},renderOpts:{compile:function(){var a=I()(p()().mark(function t(){var l,n=arguments;return p()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.e(1212).then(e.bind(e,61212));case 2:return s.abrupt("return",(l=s.sent).default.apply(l,n));case 3:case"end":return s.stop()}},t)}));function r(){return a.apply(this,arguments)}return r}()}}}},94097:function(R,S,e){var v;e.r(S),e.d(S,{demos:function(){return Ga}});var M=e(90228),c=e.n(M),A=e(87999),p=e.n(A),y=e(75271),x=e(11125),u=e(89081),I=e(5766),i=e(54456),o=e(40178),a=e(52917),r=e(80176),t=e(49136),l=e(50554),n=e(86104),d=e(79279),s=e(62121),m=e(64841),h=e(1560),f=e(15455),g=e(57482),b=e(53833),E=e(88460),P=e(56799),C=e(76373),O=e(20543),T=e(34543),B=e(99849),L=e(84336),D=e(3106),k=e(12890),$=e(64366),F=e(17131),z=e(61324),U=e(77133),V=e(88646),j=e(31662),X=e(66143),Z=e(57909),ee=e(28727),ae=e(75071),ne=e(43036),te=e(30784),ie=e(76554),se=e(53985),re=e(95052),de=e(42822),ue=e(59947),ce=e(81672),oe=e(98851),pe=e(16546),me=e(20235),ve=e(83585),le=e(16535),Ie=e(29542),fe=e(92417),he=e(24357),ge=e(21455),xe=e(89443),ye=e(46609),be=e(84521),Ee=e(65001),Ce=e(61168),Y=e(60492),q=e(1026),Q=e(37194),Se=e(1025),Te=e(12588),Be=e(95060),Le=e(45760),De=e(68477),Re=e(78264),Me=e(97589),Ae=e(37107),$e=e(20572),ke=e(36880),Fe=e(49829),Ke=e(11765),ze=e(77665),Ue=e(36501),We=e(12413),Ne=e(59674),je=e(71114),Xe=e(52626),He=e(27550),Ve=e(42442),Ze=e(53373),Ge=e(11278),we=e(95001),Ye=e(96786),Qe=e(96245),Je=e(90123),qe=e(21436),_e=e(17952),en=e(70375),nn=e(56714),tn=e(69883),an=e(27889),rn=e(97572),on=e(50088),ln=e(25732),sn=e(46994),dn=e(83282),un=e(23304),cn=e(58372),pn=e(64210),mn=e(67677),vn=e(74044),In=e(7032),fn=e(98989),hn=e(13923),gn=e(15877),xn=e(45947),yn=e(89395),bn=e(84649),En=e(79963),Cn=e(72066),Sn=e(18191),Pn=e(19307),On=e(60272),Tn=e(95555),Bn=e(48477),Ln=e(98618),Dn=e(17819),Rn=e(60654),Mn=e(96306),An=e(33628),$n=e(78412),kn=e(97196),Fn=e(70503),Kn=e(7024),zn=e(79433),Un=e(36823),Wn=e(76561),Nn=e(58572),jn=e(59351),Xn=e(2436),Hn=e(89428),Vn=e(48374),Zn=e(29538),Gn=e(76120),wn=e(96267),Yn=e(64269),Qn=e(53587),Jn=e(5147),qn=e(92908),_n=e(37375),et=e(50634),nt=e(64516),tt=e(94579),at=e(7978),rt=e(7329),ot=e(1451),lt=e(71474),it=e(97672),st=e(22751),dt=e(37343),ut=e(4671),ct=e(55449),pt=e(43038),mt=e(91873),vt=e(9509),It=e(99655),ft=e(29043),ht=e(17364),gt=e(20619),xt=e(28012),yt=e(28604),bt=e(66261),Et=e(32906),Ct=e(48381),St=e(7797),Pt=e(98e3),Ot=e(33531),Tt=e(47860),Bt=e(39554),Lt=e(42823),Dt=e(38232),Rt=e(72990),Mt=e(84902),At=e(5628),$t=e(4278),kt=e(17633),Ft=e(26662),Kt=e(11436),zt=e(45656),Ut=e(21282),Wt=e(38303),Nt=e(93082),jt=e(3252),Xt=e(21873),Ht=e(94452),Vt=e(93595),Zt=e(56996),Gt=e(11853),wt=e(95430),Yt=e(47709),Qt=e(73446),Jt=e(58914),qt=e(52638),_t=e(21065),ea=e(56604),na=e(47273),ta=e(88837),aa=e(76350),ra=e(71898),oa=e(85e3),la=e(40751),ia=e(24183),sa=e(93939),da=e(65614),ua=e(32672),ca=e(95655),pa=e(95961),ma=e(80361),va=e(80034),Ia=e(48891),fa=e(98557),ha=e(99721),ga=e(85202),xa=e(31293),ya=e(7887),ba=e(41062),Ea=e(94949),Ca=e(62306),Sa=e(1981),Pa=e(48923),Oa=e(56204),Ta=e(42583),Ba=e(493),La=e(80229),Da=e(13432),Ra=e(8024),Ma=e(93096),Aa=e(59376),$a=e(58400),ka=e(71582),Fa=e(99068),Ka=e(14969),za=e(26523),Ua=e(75803),Wa=e(98364),Na=e(2341),ja=e(30481),Xa=e(94604),Ha=e(32468),Va=e(45924),Za=e(72090),Ga={"packages-bui-icons-src-demo-en-us-0":{component:y.memo(y.lazy(p()(c()().mark(function J(){var G,N,H,w,_,K;return c()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return G=W.sent,N=G.default,W.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return H=W.sent,w=H.Stack,W.next=10,e.e(9975).then(e.bind(e,29975));case 10:return _=W.sent,K=_.SettingsOutlinedIcon,W.abrupt("return",{default:function(){return N.createElement(w,{direction:"row",spacing:"10px"},N.createElement(K,{size:"small"}),N.createElement(K,{size:"medium"}),N.createElement(K,{size:"large"}))}});case 13:case"end":return W.stop()}},J)})))),asset:{type:"BLOCK",id:"packages-bui-icons-src-demo-en-us-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack } from '@bifrostui/react';
import { SettingsOutlinedIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <SettingsOutlinedIcon size="small" />
      <SettingsOutlinedIcon size="medium" />
      <SettingsOutlinedIcon size="large" />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var J=p()(c()().mark(function N(){var H,w=arguments;return c()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,e.e(1212).then(e.bind(e,61212));case 2:return K.abrupt("return",(H=K.sent).default.apply(H,w));case 3:case"end":return K.stop()}},N)}));function G(){return J.apply(this,arguments)}return G}()}},"packages-bui-icons-src-demo-en-us-1":{component:y.memo(y.lazy(p()(c()().mark(function J(){var G,N,H,w,_,K;return c()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return G=W.sent,N=G.default,W.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return H=W.sent,w=H.Stack,W.next=10,e.e(9975).then(e.bind(e,29975));case 10:return _=W.sent,K=_.SettingsOutlinedIcon,W.abrupt("return",{default:function(){return N.createElement(w,{direction:"row",spacing:"10px"},N.createElement(K,{size:"large"}),N.createElement(K,{color:"primary",size:"large"}),N.createElement(K,{color:"default",size:"large"}),N.createElement(K,{color:"info",size:"large"}),N.createElement(K,{color:"warning",size:"large"}),N.createElement(K,{color:"danger",size:"large"}),N.createElement(K,{color:"success",size:"large"}),N.createElement(K,{color:"disabled",size:"large"}))}});case 13:case"end":return W.stop()}},J)})))),asset:{type:"BLOCK",id:"packages-bui-icons-src-demo-en-us-1",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack } from '@bifrostui/react';
import { SettingsOutlinedIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row" spacing="10px">
      <SettingsOutlinedIcon size="large" />
      <SettingsOutlinedIcon color="primary" size="large" />
      <SettingsOutlinedIcon color="default" size="large" />
      <SettingsOutlinedIcon color="info" size="large" />
      <SettingsOutlinedIcon color="warning" size="large" />
      <SettingsOutlinedIcon color="danger" size="large" />
      <SettingsOutlinedIcon color="success" size="large" />
      <SettingsOutlinedIcon color="disabled" size="large" />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var J=p()(c()().mark(function N(){var H,w=arguments;return c()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,e.e(1212).then(e.bind(e,61212));case 2:return K.abrupt("return",(H=K.sent).default.apply(H,w));case 3:case"end":return K.stop()}},N)}));function G(){return J.apply(this,arguments)}return G}()}},"packages-bui-icons-src-demo-en-us-2":{component:y.memo(y.lazy(p()(c()().mark(function J(){var G,N,H,w,_,K;return c()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:return W.next=2,Promise.resolve().then(e.t.bind(e,75271,19));case 2:return G=W.sent,N=G.default,W.next=6,Promise.all([e.e(5437),e.e(7040),e.e(228)]).then(e.bind(e,23348));case 6:return H=W.sent,w=H.Stack,W.next=10,e.e(9975).then(e.bind(e,29975));case 10:return _=W.sent,K=_.SettingsOutlinedIcon,W.abrupt("return",{default:function(){return N.createElement(w,{direction:"row"},N.createElement(K,{style:{fontSize:"48px",color:"#ad63f6"}}),N.createElement(K,{style:{fontSize:"48px"},htmlColor:"#ff866e"}))}});case 13:case"end":return W.stop()}},J)})))),asset:{type:"BLOCK",id:"packages-bui-icons-src-demo-en-us-2",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Stack } from '@bifrostui/react';
import { SettingsOutlinedIcon } from '@bifrostui/icons';

export default () => {
  return (
    <Stack direction="row">
      <SettingsOutlinedIcon style={{ fontSize: '48px', color: '#ad63f6' }} />
      <SettingsOutlinedIcon style={{ fontSize: '48px' }} htmlColor="#ff866e" />
    </Stack>
  );
};`},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2))},renderOpts:{compile:function(){var J=p()(c()().mark(function N(){var H,w=arguments;return c()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,e.e(1212).then(e.bind(e,61212));case 2:return K.abrupt("return",(H=K.sent).default.apply(H,w));case 3:case"end":return K.stop()}},N)}));function G(){return J.apply(this,arguments)}return G}()}},"packages-bui-icons-src-demo-demo":{component:y.memo(y.lazy(function(){return Promise.all([e.e(3605),e.e(7040),e.e(2433)]).then(e.bind(e,69982))})),asset:{type:"BLOCK",id:"packages-bui-icons-src-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:e(62845).Z},react:{type:"NPM",value:"18.3.1"},"./index.less":{type:"FILE",value:e(65227).Z},"../components.ts":{type:"FILE",value:e(90282).Z},"./AccessTimeCircleFilledBold.tsx":{type:"FILE",value:e(19306).Z},"./AccessTimeCircleFilled.tsx":{type:"FILE",value:e(59725).Z},"./ArrowDownward.tsx":{type:"FILE",value:e(52006).Z},"./AccessTimeCircleOutlined.tsx":{type:"FILE",value:e(92821).Z},"./Add.tsx":{type:"FILE",value:e(70873).Z},"./AddCircleFilled.tsx":{type:"FILE",value:e(48326).Z},"./AddCircleFilledBold.tsx":{type:"FILE",value:e(82755).Z},"./AddCircleOutlined.tsx":{type:"FILE",value:e(71498).Z},"./AddCouponOutlined.tsx":{type:"FILE",value:e(1452).Z},"./AddLarge.tsx":{type:"FILE",value:e(13020).Z},"./AlarmOutlined.tsx":{type:"FILE",value:e(33619).Z},"./AlertCircleFilled.tsx":{type:"FILE",value:e(26982).Z},"./AlertCircleFilledBold.tsx":{type:"FILE",value:e(36945).Z},"./AlertCircleOutlined.tsx":{type:"FILE",value:e(19093).Z},"./AliFishOutlined.tsx":{type:"FILE",value:e(90407).Z},"./AliSweetOutlined.tsx":{type:"FILE",value:e(59186).Z},"./AliWangWangFilled.tsx":{type:"FILE",value:e(24420).Z},"./AliWangWangOutlined.tsx":{type:"FILE",value:e(85778).Z},"./AlignCenterFilled.tsx":{type:"FILE",value:e(81560).Z},"./AlignLeftFilled.tsx":{type:"FILE",value:e(34278).Z},"./AlignRightFilled.tsx":{type:"FILE",value:e(81781).Z},"./ArrowBackward.tsx":{type:"FILE",value:e(96210).Z},"./ArrowBackwardLarge.tsx":{type:"FILE",value:e(28987).Z},"./ZoomInOutlined.tsx":{type:"FILE",value:e(64492).Z},"./ArrowDownwardLarge.tsx":{type:"FILE",value:e(92319).Z},"./ArrowForward.tsx":{type:"FILE",value:e(84491).Z},"./ArrowForwardLarge.tsx":{type:"FILE",value:e(57).Z},"./ArrowUpCircleOutlined.tsx":{type:"FILE",value:e(15581).Z},"./ArrowUpward.tsx":{type:"FILE",value:e(74668).Z},"./ArrowUpwardLarge.tsx":{type:"FILE",value:e(7107).Z},"./AssessmentOutlined.tsx":{type:"FILE",value:e(2906).Z},"./AssignmentOutlined.tsx":{type:"FILE",value:e(90655).Z},"./BabyOutlined.tsx":{type:"FILE",value:e(3121).Z},"./BankCardFilled.tsx":{type:"FILE",value:e(257).Z},"./BankCardOutlined.tsx":{type:"FILE",value:e(86759).Z},"./BlockCircleFilled.tsx":{type:"FILE",value:e(83049).Z},"./BlockCircleOutlined.tsx":{type:"FILE",value:e(41139).Z},"./BlockCircleOutlinedThin.tsx":{type:"FILE",value:e(93997).Z},"./BogoOutlined.tsx":{type:"FILE",value:e(26386).Z},"./BoltFilled.tsx":{type:"FILE",value:e(96718).Z},"./BoltOutlined.tsx":{type:"FILE",value:e(28942).Z},"./BuildingOutlined.tsx":{type:"FILE",value:e(21590).Z},"./CalendarInvisibleOutlined.tsx":{type:"FILE",value:e(69839).Z},"./CalendarOutlined.tsx":{type:"FILE",value:e(17330).Z},"./CalendarVisibleOutlined.tsx":{type:"FILE",value:e(24676).Z},"./CameraFilled.tsx":{type:"FILE",value:e(55512).Z},"./CameraOutlined.tsx":{type:"FILE",value:e(94121).Z},"./CardPackageOutlined.tsx":{type:"FILE",value:e(13191).Z},"./CaretDown.tsx":{type:"FILE",value:e(69292).Z},"./CaretLeft.tsx":{type:"FILE",value:e(56678).Z},"./CaretRight.tsx":{type:"FILE",value:e(43363).Z},"./CaretUp.tsx":{type:"FILE",value:e(10283).Z},"./ChatFilled.tsx":{type:"FILE",value:e(8402).Z},"./ChatOutlined.tsx":{type:"FILE",value:e(1786).Z},"./CheerOutlined.tsx":{type:"FILE",value:e(75820).Z},"./CinemaCardOutlined.tsx":{type:"FILE",value:e(24991).Z},"./CinemaFilled.tsx":{type:"FILE",value:e(1331).Z},"./CinemaOutlined.tsx":{type:"FILE",value:e(61290).Z},"./CircleOutlined.tsx":{type:"FILE",value:e(93998).Z},"./ClockOutlined.tsx":{type:"FILE",value:e(17875).Z},"./Close.tsx":{type:"FILE",value:e(30254).Z},"./CloseLarge.tsx":{type:"FILE",value:e(62175).Z},"./More.tsx":{type:"FILE",value:e(51031).Z},"./MoreOutlined.tsx":{type:"FILE",value:e(21789).Z},"./MoreVerticalOutlined.tsx":{type:"FILE",value:e(10301).Z},"./MovieAppointmentOutlined.tsx":{type:"FILE",value:e(53095).Z},"./MovieFilled.tsx":{type:"FILE",value:e(9518).Z},"./MovieOutlined.tsx":{type:"FILE",value:e(81386).Z},"./NearMe.tsx":{type:"FILE",value:e(30206).Z},"./NextFilled.tsx":{type:"FILE",value:e(44546).Z},"./NoteOutlined.tsx":{type:"FILE",value:e(25430).Z},"./NoticeOutlined.tsx":{type:"FILE",value:e(46507).Z},"./OrderOutlined.tsx":{type:"FILE",value:e(13422).Z},"./OrdersOutlined.tsx":{type:"FILE",value:e(13614).Z},"./PageEditOutlined.tsx":{type:"FILE",value:e(72272).Z},"./PaperOutlined.tsx":{type:"FILE",value:e(40781).Z},"./PasswordOutlined.tsx":{type:"FILE",value:e(89984).Z},"./PhoneFilled.tsx":{type:"FILE",value:e(51793).Z},"./PhoneOutlined.tsx":{type:"FILE",value:e(89571).Z},"./PictureOutlined.tsx":{type:"FILE",value:e(78479).Z},"./PlayCircleOutlined.tsx":{type:"FILE",value:e(38879).Z},"./PlayCircleOutlinedBold.tsx":{type:"FILE",value:e(39082).Z},"./PreferentialEventFilled.tsx":{type:"FILE",value:e(83970).Z},"./PublicWelfareOutlined.tsx":{type:"FILE",value:e(50505).Z},"./QAFilled.tsx":{type:"FILE",value:e(76436).Z},"./QRCodeOutlined.tsx":{type:"FILE",value:e(77140).Z},"./QuoteEnd.tsx":{type:"FILE",value:e(35276).Z},"./QuoteStart.tsx":{type:"FILE",value:e(90389).Z},"./RMBCircleOutlined.tsx":{type:"FILE",value:e(52177).Z},"./RMBRefundOutlined.tsx":{type:"FILE",value:e(96858).Z},"./RadioCheckedFilled.tsx":{type:"FILE",value:e(13821).Z},"./RankingOutlined.tsx":{type:"FILE",value:e(65488).Z},"./RefreshOutlined.tsx":{type:"FILE",value:e(58245).Z},"./ReportOutlined.tsx":{type:"FILE",value:e(52341).Z},"./SaveOutlined.tsx":{type:"FILE",value:e(53020).Z},"./ScanOutlined.tsx":{type:"FILE",value:e(86211).Z},"./SearchGapOutlined.tsx":{type:"FILE",value:e(52295).Z},"./SearchOutlined.tsx":{type:"FILE",value:e(8173).Z},"./SettingsOutlined.tsx":{type:"FILE",value:e(67176).Z},"./SevenDayCalendar.tsx":{type:"FILE",value:e(63769).Z},"./Share.tsx":{type:"FILE",value:e(87612).Z},"./ShoppingCartOutlined.tsx":{type:"FILE",value:e(17321).Z},"./ShowFilled.tsx":{type:"FILE",value:e(22409).Z},"./ShowOutlined.tsx":{type:"FILE",value:e(24924).Z},"./SmileFilled.tsx":{type:"FILE",value:e(1509).Z},"./SmileOutlined.tsx":{type:"FILE",value:e(4520).Z},"./Sort.tsx":{type:"FILE",value:e(74771).Z},"./StarCircleOutlined.tsx":{type:"FILE",value:e(43899).Z},"./StarFilled.tsx":{type:"FILE",value:e(70592).Z},"./StarFilledSharp.tsx":{type:"FILE",value:e(91293).Z},"./StarOutlined.tsx":{type:"FILE",value:e(5757).Z},"./StarRoundedFilled.tsx":{type:"FILE",value:e(69831).Z},"./StoreFilled.tsx":{type:"FILE",value:e(52929).Z},"./SuccessCircleFilled.tsx":{type:"FILE",value:e(59051).Z},"./SuccessCircleFilledBold.tsx":{type:"FILE",value:e(56223).Z},"./SuccessCircleOutlined.tsx":{type:"FILE",value:e(31547).Z},"./SuccessFilled.tsx":{type:"FILE",value:e(26740).Z},"./SuccessFilledBold.tsx":{type:"FILE",value:e(9567).Z},"./SunOutlined.tsx":{type:"FILE",value:e(41074).Z},"./TaoPiaoPiaoLogo.tsx":{type:"FILE",value:e(38595).Z},"./TaoTicketsLogo.tsx":{type:"FILE",value:e(87827).Z},"./ThumbUpFilled.tsx":{type:"FILE",value:e(49760).Z},"./ThumbUpOutlined.tsx":{type:"FILE",value:e(63176).Z},"./TicketFilled.tsx":{type:"FILE",value:e(74999).Z},"./TicketMachineOutlined.tsx":{type:"FILE",value:e(90254).Z},"./TicketOutlined.tsx":{type:"FILE",value:e(72190).Z},"./TipsOutlined.tsx":{type:"FILE",value:e(57481).Z},"./ToTopOutlined.tsx":{type:"FILE",value:e(89971).Z},"./TopicFilled.tsx":{type:"FILE",value:e(68866).Z},"./TopicOutlined.tsx":{type:"FILE",value:e(95930).Z},"./TrendingCircleFilled.tsx":{type:"FILE",value:e(95031).Z},"./TrendingCircleOutlined.tsx":{type:"FILE",value:e(54165).Z},"./TripleVerticalLine.tsx":{type:"FILE",value:e(17036).Z},"./Up.tsx":{type:"FILE",value:e(19803).Z},"./UserFollowedOutlined.tsx":{type:"FILE",value:e(81117).Z},"./VerifiedFilled.tsx":{type:"FILE",value:e(29077).Z},"./VideoOutlined.tsx":{type:"FILE",value:e(17343).Z},"./VipCardFilled.tsx":{type:"FILE",value:e(82752).Z},"./VipFilled.tsx":{type:"FILE",value:e(3677).Z},"./VipOutlined.tsx":{type:"FILE",value:e(47436).Z},"./VolumeDownFilled.tsx":{type:"FILE",value:e(35564).Z},"./VolumeMuteFilled.tsx":{type:"FILE",value:e(17507).Z},"./WeChatOutlined.tsx":{type:"FILE",value:e(22463).Z},"./CloudBBOutlined.tsx":{type:"FILE",value:e(48901).Z},"./WeiBoOutlined.tsx":{type:"FILE",value:e(23913).Z},"./VolumeMuteOutlined.tsx":{type:"FILE",value:e(88448).Z},"./CloudDownloadOutlined.tsx":{type:"FILE",value:e(11868).Z},"./YouKuVipCircleOutlined.tsx":{type:"FILE",value:e(52961).Z},"./CloudUploadOutlined.tsx":{type:"FILE",value:e(15994).Z},"./VolumeUpOutlined.tsx":{type:"FILE",value:e(72519).Z},"./CodeOutlined.tsx":{type:"FILE",value:e(59337).Z},"./VolumeUpFilled.tsx":{type:"FILE",value:e(6185).Z},"./GppGoodFilled.tsx":{type:"FILE",value:e(45106).Z},"./GppGoodOutlined.tsx":{type:"FILE",value:e(50343).Z},"./ErrorCircleOutlined.tsx":{type:"FILE",value:e(79833).Z},"./GridViewOutlined.tsx":{type:"FILE",value:e(54260).Z},"./ExperimentOutlined.tsx":{type:"FILE",value:e(99958).Z},"./CopyOutlined.tsx":{type:"FILE",value:e(85490).Z},"./ExploreCircleFilled.tsx":{type:"FILE",value:e(58793).Z},"./GripperBarHorizontal.tsx":{type:"FILE",value:e(34926).Z},"./ExploreCircleOutlined.tsx":{type:"FILE",value:e(95196).Z},"./CouponFilled.tsx":{type:"FILE",value:e(95503).Z},"./GripperBarVertical.tsx":{type:"FILE",value:e(93237).Z},"./EyeClosedFilled.tsx":{type:"FILE",value:e(79655).Z},"./CouponOutlined.tsx":{type:"FILE",value:e(31961).Z},"./HashOutlined.tsx":{type:"FILE",value:e(18884).Z},"./EyeFilled.tsx":{type:"FILE",value:e(23491).Z},"./DateOutlined.tsx":{type:"FILE",value:e(60237).Z},"./HeartAddOutlined.tsx":{type:"FILE",value:e(23374).Z},"./EyeOutlined.tsx":{type:"FILE",value:e(99870).Z},"./HeartAddOutlinedBold.tsx":{type:"FILE",value:e(57643).Z},"./DeleteOutlined.tsx":{type:"FILE",value:e(79402).Z},"./HeartBroken.tsx":{type:"FILE",value:e(12137).Z},"./FemaleOutlined.tsx":{type:"FILE",value:e(97007).Z},"./DiscussOutlined.tsx":{type:"FILE",value:e(43879).Z},"./HeartFilled.tsx":{type:"FILE",value:e(12599).Z},"./FilterOutlined.tsx":{type:"FILE",value:e(6221).Z},"./DoubleArrowDownTwoTone.tsx":{type:"FILE",value:e(96015).Z},"./HeartMarkedOutlined.tsx":{type:"FILE",value:e(21477).Z},"./FingerprintOutlined.tsx":{type:"FILE",value:e(98228).Z},"./HeartOutlined.tsx":{type:"FILE",value:e(47983).Z},"./FireFilled.tsx":{type:"FILE",value:e(42578).Z},"./DoubleArrowLeftTwoTone.tsx":{type:"FILE",value:e(33678).Z},"./HelpCircleFilled.tsx":{type:"FILE",value:e(42895).Z},"./FlashlightOnOutlined.tsx":{type:"FILE",value:e(93114).Z},"./HelpCircleOutlined.tsx":{type:"FILE",value:e(19421).Z},"./FlashlightOutlined.tsx":{type:"FILE",value:e(33110).Z},"./DoubleArrowRightTwoTone.tsx":{type:"FILE",value:e(29327).Z},"./HistoryOutlined.tsx":{type:"FILE",value:e(7998).Z},"./FlipOutlined.tsx":{type:"FILE",value:e(47354).Z},"./FollowOutlined.tsx":{type:"FILE",value:e(3929).Z},"./Home.tsx":{type:"FILE",value:e(49949).Z},"./FullScreenOutlined.tsx":{type:"FILE",value:e(22348).Z},"./DoubleArrowUpTwoTone.tsx":{type:"FILE",value:e(38100).Z},"./HomeFilled.tsx":{type:"FILE",value:e(84756).Z},"./HomeOutlined.tsx":{type:"FILE",value:e(89965).Z},"./GetTicketsFilled.tsx":{type:"FILE",value:e(234).Z},"./DoubleCircleOutlined.tsx":{type:"FILE",value:e(98455).Z},"./GetTicketsOutlined.tsx":{type:"FILE",value:e(52335).Z},"./HourglassOutlined.tsx":{type:"FILE",value:e(67127).Z},"./Down.tsx":{type:"FILE",value:e(91354).Z},"./GiftCardOutlined.tsx":{type:"FILE",value:e(2868).Z},"./InboxFilled.tsx":{type:"FILE",value:e(55201).Z},"./GiftOutlined.tsx":{type:"FILE",value:e(38117).Z},"./InboxFilledBold.tsx":{type:"FILE",value:e(72645).Z},"./GlassesOutlined.tsx":{type:"FILE",value:e(52463).Z},"./DrinkFilled.tsx":{type:"FILE",value:e(26132).Z},"./LightVipOutlined.tsx":{type:"FILE",value:e(68080).Z},"./MaleOutlined.tsx":{type:"FILE",value:e(71297).Z},"./DrinkOutlined.tsx":{type:"FILE",value:e(31508).Z},"./MapFilled.tsx":{type:"FILE",value:e(66483).Z},"./LinkOutlined.tsx":{type:"FILE",value:e(46235).Z},"./MapOutlined.tsx":{type:"FILE",value:e(11487).Z},"./ListOutlined.tsx":{type:"FILE",value:e(19244).Z},"./MessageOutlined.tsx":{type:"FILE",value:e(77922).Z},"./EditFilled.tsx":{type:"FILE",value:e(61760).Z},"./LoadingThreeQuartersOutlined.tsx":{type:"FILE",value:e(76852).Z},"./MicOutlined.tsx":{type:"FILE",value:e(46234).Z},"./EditOutlined.tsx":{type:"FILE",value:e(86382).Z},"./MiniContractOutlined.tsx":{type:"FILE",value:e(77634).Z},"./LocationFilled.tsx":{type:"FILE",value:e(38692).Z},"./Minus.tsx":{type:"FILE",value:e(13048).Z},"./LocationOutlined.tsx":{type:"FILE",value:e(9090).Z},"./EggOutlined.tsx":{type:"FILE",value:e(50968).Z},"./MobileFilled.tsx":{type:"FILE",value:e(24831).Z},"./LuckyMoneyOutlined.tsx":{type:"FILE",value:e(69669).Z},"./ErrorCircleFilled.tsx":{type:"FILE",value:e(87629).Z},"./MobileOutlined.tsx":{type:"FILE",value:e(4413).Z},"./MaiSuiLeft.tsx":{type:"FILE",value:e(85100).Z},"./MomentsOutlined.tsx":{type:"FILE",value:e(18886).Z},"./MaiSuiRight.tsx":{type:"FILE",value:e(14158).Z},"./ErrorCircleFilledBold.tsx":{type:"FILE",value:e(24620).Z},"./MoonOutlined.tsx":{type:"FILE",value:e(20455).Z},"./MailOutlined.tsx":{type:"FILE",value:e(13504).Z},"./XiaMiCircleOutlined.tsx":{type:"FILE",value:e(51347).Z},"./WifiOutlined.tsx":{type:"FILE",value:e(62502).Z},"../utils/createSvgIcon.tsx":{type:"FILE",value:e(66381).Z},"../components/SvgIcon.tsx":{type:"FILE",value:e(2005).Z},"./SvgIcon.tsx":{type:"FILE",value:e(73738).Z},clsx:{type:"NPM",value:"1.2.1"},"./SvgIcon.less":{type:"FILE",value:e(7539).Z}},entry:"index.tsx"},context:{react:v||(v=e.t(y,2)),"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/demo/index.less":x,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/index.ts":u,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AccessTimeCircleFilledBold.tsx":I,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AccessTimeCircleFilled.tsx":i,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ArrowDownward.tsx":o,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AccessTimeCircleOutlined.tsx":a,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/Add.tsx":r,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AddCircleFilled.tsx":t,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AddCircleFilledBold.tsx":l,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AddCircleOutlined.tsx":n,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AddCouponOutlined.tsx":d,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AddLarge.tsx":s,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AlarmOutlined.tsx":m,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AlertCircleFilled.tsx":h,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AlertCircleFilledBold.tsx":f,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AlertCircleOutlined.tsx":g,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AliFishOutlined.tsx":b,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AliSweetOutlined.tsx":E,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AliWangWangFilled.tsx":P,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AliWangWangOutlined.tsx":C,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AlignCenterFilled.tsx":O,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AlignLeftFilled.tsx":T,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AlignRightFilled.tsx":B,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ArrowBackward.tsx":L,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ArrowBackwardLarge.tsx":D,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ZoomInOutlined.tsx":k,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ArrowDownwardLarge.tsx":$,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ArrowForward.tsx":F,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ArrowForwardLarge.tsx":z,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ArrowUpCircleOutlined.tsx":U,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ArrowUpward.tsx":V,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ArrowUpwardLarge.tsx":j,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AssessmentOutlined.tsx":X,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/AssignmentOutlined.tsx":Z,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/BabyOutlined.tsx":ee,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/BankCardFilled.tsx":ae,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/BankCardOutlined.tsx":ne,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/BlockCircleFilled.tsx":te,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/BlockCircleOutlined.tsx":ie,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/BlockCircleOutlinedThin.tsx":se,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/BogoOutlined.tsx":re,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/BoltFilled.tsx":de,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/BoltOutlined.tsx":ue,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/BuildingOutlined.tsx":ce,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CalendarInvisibleOutlined.tsx":oe,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CalendarOutlined.tsx":pe,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CalendarVisibleOutlined.tsx":me,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CameraFilled.tsx":ve,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CameraOutlined.tsx":le,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CardPackageOutlined.tsx":Ie,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CaretDown.tsx":fe,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CaretLeft.tsx":he,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CaretRight.tsx":ge,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CaretUp.tsx":xe,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ChatFilled.tsx":ye,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ChatOutlined.tsx":be,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CheerOutlined.tsx":Ee,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CinemaCardOutlined.tsx":Ce,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CinemaFilled.tsx":Y,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CinemaOutlined.tsx":q,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CircleOutlined.tsx":Q,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ClockOutlined.tsx":Se,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/Close.tsx":Te,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CloseLarge.tsx":Be,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/More.tsx":Le,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MoreOutlined.tsx":De,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MoreVerticalOutlined.tsx":Re,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MovieAppointmentOutlined.tsx":Me,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MovieFilled.tsx":Ae,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MovieOutlined.tsx":$e,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/NearMe.tsx":ke,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/NextFilled.tsx":Fe,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/NoteOutlined.tsx":Ke,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/NoticeOutlined.tsx":ze,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/OrderOutlined.tsx":Ue,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/OrdersOutlined.tsx":We,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/PageEditOutlined.tsx":Ne,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/PaperOutlined.tsx":je,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/PasswordOutlined.tsx":Xe,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/PhoneFilled.tsx":He,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/PhoneOutlined.tsx":Ve,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/PictureOutlined.tsx":Ze,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/PlayCircleOutlined.tsx":Ge,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/PlayCircleOutlinedBold.tsx":we,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/PreferentialEventFilled.tsx":Ye,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/PublicWelfareOutlined.tsx":Qe,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/QAFilled.tsx":Je,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/QRCodeOutlined.tsx":qe,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/QuoteEnd.tsx":_e,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/QuoteStart.tsx":en,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/RMBCircleOutlined.tsx":nn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/RMBRefundOutlined.tsx":tn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/RadioCheckedFilled.tsx":an,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/RankingOutlined.tsx":rn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/RefreshOutlined.tsx":on,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ReportOutlined.tsx":ln,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/SaveOutlined.tsx":sn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ScanOutlined.tsx":dn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/SearchGapOutlined.tsx":un,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/SearchOutlined.tsx":cn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/SettingsOutlined.tsx":pn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/SevenDayCalendar.tsx":mn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/Share.tsx":vn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ShoppingCartOutlined.tsx":In,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ShowFilled.tsx":fn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ShowOutlined.tsx":hn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/SmileFilled.tsx":gn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/SmileOutlined.tsx":xn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/Sort.tsx":yn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/StarCircleOutlined.tsx":bn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/StarFilled.tsx":En,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/StarFilledSharp.tsx":Cn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/StarOutlined.tsx":Sn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/StarRoundedFilled.tsx":Pn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/StoreFilled.tsx":On,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/SuccessCircleFilled.tsx":Tn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/SuccessCircleFilledBold.tsx":Bn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/SuccessCircleOutlined.tsx":Ln,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/SuccessFilled.tsx":Dn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/SuccessFilledBold.tsx":Rn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/SunOutlined.tsx":Mn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/TaoPiaoPiaoLogo.tsx":An,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/TaoTicketsLogo.tsx":$n,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ThumbUpFilled.tsx":kn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ThumbUpOutlined.tsx":Fn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/TicketFilled.tsx":Kn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/TicketMachineOutlined.tsx":zn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/TicketOutlined.tsx":Un,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/TipsOutlined.tsx":Wn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ToTopOutlined.tsx":Nn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/TopicFilled.tsx":jn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/TopicOutlined.tsx":Xn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/TrendingCircleFilled.tsx":Hn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/TrendingCircleOutlined.tsx":Vn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/TripleVerticalLine.tsx":Zn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/Up.tsx":Gn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/UserFollowedOutlined.tsx":wn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/VerifiedFilled.tsx":Yn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/VideoOutlined.tsx":Qn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/VipCardFilled.tsx":Jn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/VipFilled.tsx":qn,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/VipOutlined.tsx":_n,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/VolumeDownFilled.tsx":et,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/VolumeMuteFilled.tsx":nt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/WeChatOutlined.tsx":tt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CloudBBOutlined.tsx":at,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/WeiBoOutlined.tsx":rt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/VolumeMuteOutlined.tsx":ot,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CloudDownloadOutlined.tsx":lt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/YouKuVipCircleOutlined.tsx":it,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CloudUploadOutlined.tsx":st,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/VolumeUpOutlined.tsx":dt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CodeOutlined.tsx":ut,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/VolumeUpFilled.tsx":ct,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/GppGoodFilled.tsx":pt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/GppGoodOutlined.tsx":mt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ErrorCircleOutlined.tsx":vt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/GridViewOutlined.tsx":It,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ExperimentOutlined.tsx":ft,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CopyOutlined.tsx":ht,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ExploreCircleFilled.tsx":gt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/GripperBarHorizontal.tsx":xt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ExploreCircleOutlined.tsx":yt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CouponFilled.tsx":bt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/GripperBarVertical.tsx":Et,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/EyeClosedFilled.tsx":Ct,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/CouponOutlined.tsx":St,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/HashOutlined.tsx":Pt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/EyeFilled.tsx":Ot,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/DateOutlined.tsx":Tt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/HeartAddOutlined.tsx":Bt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/EyeOutlined.tsx":Lt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/HeartAddOutlinedBold.tsx":Dt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/DeleteOutlined.tsx":Rt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/HeartBroken.tsx":Mt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/FemaleOutlined.tsx":At,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/DiscussOutlined.tsx":$t,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/HeartFilled.tsx":kt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/FilterOutlined.tsx":Ft,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/DoubleArrowDownTwoTone.tsx":Kt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/HeartMarkedOutlined.tsx":zt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/FingerprintOutlined.tsx":Ut,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/HeartOutlined.tsx":Wt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/FireFilled.tsx":Nt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/DoubleArrowLeftTwoTone.tsx":jt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/HelpCircleFilled.tsx":Xt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/FlashlightOnOutlined.tsx":Ht,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/HelpCircleOutlined.tsx":Vt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/FlashlightOutlined.tsx":Zt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/DoubleArrowRightTwoTone.tsx":Gt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/HistoryOutlined.tsx":wt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/FlipOutlined.tsx":Yt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/FollowOutlined.tsx":Qt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/Home.tsx":Jt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/FullScreenOutlined.tsx":qt,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/DoubleArrowUpTwoTone.tsx":_t,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/HomeFilled.tsx":ea,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/HomeOutlined.tsx":na,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/GetTicketsFilled.tsx":ta,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/DoubleCircleOutlined.tsx":aa,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/GetTicketsOutlined.tsx":ra,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/HourglassOutlined.tsx":oa,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/Down.tsx":la,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/GiftCardOutlined.tsx":ia,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/InboxFilled.tsx":sa,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/GiftOutlined.tsx":da,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/InboxFilledBold.tsx":ua,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/GlassesOutlined.tsx":ca,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/DrinkFilled.tsx":pa,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/LightVipOutlined.tsx":ma,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MaleOutlined.tsx":va,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/DrinkOutlined.tsx":Ia,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MapFilled.tsx":fa,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/LinkOutlined.tsx":ha,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MapOutlined.tsx":ga,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ListOutlined.tsx":xa,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MessageOutlined.tsx":ya,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/EditFilled.tsx":ba,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/LoadingThreeQuartersOutlined.tsx":Ea,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MicOutlined.tsx":Ca,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/EditOutlined.tsx":Sa,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MiniContractOutlined.tsx":Pa,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/LocationFilled.tsx":Oa,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/Minus.tsx":Ta,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/LocationOutlined.tsx":Ba,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/EggOutlined.tsx":La,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MobileFilled.tsx":Da,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/LuckyMoneyOutlined.tsx":Ra,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ErrorCircleFilled.tsx":Ma,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MobileOutlined.tsx":Aa,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MaiSuiLeft.tsx":$a,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MomentsOutlined.tsx":ka,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MaiSuiRight.tsx":Fa,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/ErrorCircleFilledBold.tsx":Ka,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MoonOutlined.tsx":za,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/MailOutlined.tsx":Ua,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/XiaMiCircleOutlined.tsx":Wa,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/WifiOutlined.tsx":Na,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/utils/createSvgIcon.tsx":ja,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/SvgIcon/index.tsx":Xa,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/SvgIcon/SvgIcon.tsx":Ha,clsx:Va,"/home/runner/work/bifrostui/bifrostui/packages/bui-icons/src/components/SvgIcon/SvgIcon.less":Za},renderOpts:{compile:function(){var J=p()(c()().mark(function N(){var H,w=arguments;return c()().wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return K.next=2,e.e(1212).then(e.bind(e,61212));case 2:return K.abrupt("return",(H=K.sent).default.apply(H,w));case 3:case"end":return K.stop()}},N)}));function G(){return J.apply(this,arguments)}return G}()}}}},27704:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"The action menu panel that pops up from the bottom. Contains multiple options related to the current context, allowing users to complete operations without leaving.",paraId:0,tocIndex:0},{value:"ActionSheet 'is turned off by default and pops up from the bottom through the' open 'property. Each option is rendered by nesting' ActionSheetItem '.",paraId:1,tocIndex:2},{value:"You can add a bottom cancel button by setting 'cancelText', and clicking it will trigger the 'onClose' event.",paraId:2,tocIndex:3},{value:"By setting 'extra', additional descriptive information can be added at the top, displaying only non clickable information",paraId:3,tocIndex:4},{value:"By setting 'disabled' to 'ActionSheetItem', the option can be made non clickable, and setting 'color' can set the theme of the selection. For example, dangerous operations can be prompted to the user to operate with caution through color=danger",paraId:4,tocIndex:5},{value:"By setting 'description' to 'ActionSheetItem', the description information of each option can be added as additional supplementary information for that option",paraId:5,tocIndex:6},{value:"attribute",paraId:6,tocIndex:8},{value:"explain",paraId:6,tocIndex:8},{value:"type",paraId:6,tocIndex:8},{value:"Default value",paraId:6,tocIndex:8},{value:"cancelText",paraId:6,tocIndex:8},{value:"Cancel button content, if set to empty, the cancel button will not be displayed",paraId:6,tocIndex:8},{value:"React.ReactNode",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"extra",paraId:6,tocIndex:8},{value:"Additional content display at the top",paraId:6,tocIndex:8},{value:"React.ReactNode",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"onSelect",paraId:6,tocIndex:8},{value:"Click to select callback for sub items",paraId:6,tocIndex:8},{value:"(event: React.MouseEvent ,data?: { index: string |number }) => void;",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"onClose",paraId:6,tocIndex:8},{value:"Close callback",paraId:6,tocIndex:8},{value:"ModalProps['onClose']",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"ActionSheet inherits from Drawer. Other properties can be found in the Drawer API (/cores/Drawer? # API)",paraId:7,tocIndex:8},{value:"attribute",paraId:8,tocIndex:9},{value:"explain",paraId:8,tocIndex:9},{value:"type",paraId:8,tocIndex:9},{value:"Default value",paraId:8,tocIndex:9},{value:"description",paraId:8,tocIndex:9},{value:"Describe the content",paraId:8,tocIndex:9},{value:"React.ReactNode",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"disabled",paraId:8,tocIndex:9},{value:"Do you want to disable it",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"false",paraId:8,tocIndex:9},{value:"color",paraId:8,tocIndex:9},{value:"colour",paraId:8,tocIndex:9},{value:"primary",paraId:8,tocIndex:9},{value:" |",paraId:8,tocIndex:9},{value:"info",paraId:8,tocIndex:9},{value:" |",paraId:8,tocIndex:9},{value:"success",paraId:8,tocIndex:9},{value:" |",paraId:8,tocIndex:9},{value:"warning",paraId:8,tocIndex:9},{value:" |",paraId:8,tocIndex:9},{value:"danger",paraId:8,tocIndex:9},{value:" |",paraId:8,tocIndex:9},{value:"default",paraId:8,tocIndex:9},{value:"default",paraId:8,tocIndex:9},{value:"bold",paraId:8,tocIndex:9},{value:"Is it bolded",paraId:8,tocIndex:9},{value:"boolean",paraId:8,tocIndex:9},{value:"false",paraId:8,tocIndex:9},{value:"index",paraId:8,tocIndex:9},{value:"Index tags",paraId:8,tocIndex:9},{value:"string |number",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"onClick",paraId:8,tocIndex:9},{value:"Click to select callback",paraId:8,tocIndex:9},{value:"(event: React.MouseEvent ,data?: { index: string |number }) => void;",paraId:8,tocIndex:9},{value:"-",paraId:8,tocIndex:9},{value:"attribute",paraId:9,tocIndex:11},{value:"explain",paraId:9,tocIndex:11},{value:"Default value",paraId:9,tocIndex:11},{value:"global variable",paraId:9,tocIndex:11},{value:"--extra-line-height",paraId:9,tocIndex:11},{value:"Top additional content line height",paraId:9,tocIndex:11},{value:"23px",paraId:9,tocIndex:11},{value:"--bui-action-sheet-extra-line-height",paraId:9,tocIndex:11},{value:"--extra-padding",paraId:9,tocIndex:11},{value:"Top additional content margin",paraId:9,tocIndex:11},{value:"--bui-spacing-xl",paraId:9,tocIndex:11},{value:"--bui-action-sheet-extra-padding",paraId:9,tocIndex:11},{value:"--extra-magin",paraId:9,tocIndex:11},{value:"Top additional content margin",paraId:9,tocIndex:11},{value:"0 --bui-spacing-xl",paraId:9,tocIndex:11},{value:"--bui-action-sheet-extra-magin",paraId:9,tocIndex:11},{value:"attribute",paraId:10,tocIndex:12},{value:"explain",paraId:10,tocIndex:12},{value:"Default value",paraId:10,tocIndex:12},{value:"global variable",paraId:10,tocIndex:12},{value:"--padding",paraId:10,tocIndex:12},{value:"Sub item margin",paraId:10,tocIndex:12},{value:"--bui-spacing-xl",paraId:10,tocIndex:12},{value:"--bui-action-sheet-item-padding",paraId:10,tocIndex:12},{value:"--font-size",paraId:10,tocIndex:12},{value:"Subitem font size",paraId:10,tocIndex:12},{value:"--bui-title-size-2",paraId:10,tocIndex:12},{value:"--bui-action-sheet-item-font-size",paraId:10,tocIndex:12},{value:"--line-height",paraId:10,tocIndex:12},{value:"Subitem font line height",paraId:10,tocIndex:12},{value:"24px",paraId:10,tocIndex:12},{value:"--bui-action-sheet-item-line-height",paraId:10,tocIndex:12},{value:"--color",paraId:10,tocIndex:12},{value:"Sub item font color",paraId:10,tocIndex:12},{value:"--bui-color-fg-default",paraId:10,tocIndex:12},{value:"--bui-action-sheet-item-color",paraId:10,tocIndex:12},{value:"--margin",paraId:10,tocIndex:12},{value:"Subitem font",paraId:10,tocIndex:12},{value:"0 --bui-spacing-xl",paraId:10,tocIndex:12},{value:"--bui-action-sheet-item-margin",paraId:10,tocIndex:12},{value:"--description-line-height",paraId:10,tocIndex:12},{value:"Sub item description text line height",paraId:10,tocIndex:12},{value:"19px",paraId:10,tocIndex:12},{value:"--bui-action-sheet-item-description-line-height",paraId:10,tocIndex:12}]},26497:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"The Alert component is commonly used to display brief information that needs attention, and to show warning or success prompts to users.",paraId:0,tocIndex:0},{value:"The Alert component can be set to its content by using 'children'.",paraId:1,tocIndex:2},{value:`Icon allows you to add icons to the header of the Alert component, which will override the default Alert icon.
You can also remove the default Alert icon by setting the 'icon' attribute to 'false'.`,paraId:2,tocIndex:3},{value:"The marquee attribute allows you to scroll through the content of the Alert component.",paraId:3,tocIndex:4},{value:`The Alert component provides 5 color themes: 'warning', 'success',' error ',' info ', and' primary '. You can set the component theme color through the' color 'attribute.
The default value for the color attribute is' primary '.`,paraId:4,tocIndex:5},{value:`The Alert component supports two modes: fill in 'standard' and outline 'outlined'.
You can set the component mode through the 'variant' property.
The default value for the variable attribute is' standard '.`,paraId:5,tocIndex:6},{value:`The Alert component provides an 'action' attribute for closing or revoking alerts.
Alert provides an onClose callback. If the business has configured nClose and the action has not set its attribute, a close icon will be displayed at the end of the Alert component.
The 'action' attribute can be used to override this close icon and customize the action area.`,paraId:6,tocIndex:9},{value:"attribute",paraId:7,tocIndex:11},{value:"explain",paraId:7,tocIndex:11},{value:"type",paraId:7,tocIndex:11},{value:"Default value",paraId:7,tocIndex:11},{value:"color",paraId:7,tocIndex:11},{value:"Warning box theme color",paraId:7,tocIndex:11},{value:"primary",paraId:7,tocIndex:11},{value:" \uFF5C ",paraId:7,tocIndex:11},{value:"info",paraId:7,tocIndex:11},{value:" \uFF5C ",paraId:7,tocIndex:11},{value:"success",paraId:7,tocIndex:11},{value:" \uFF5C ",paraId:7,tocIndex:11},{value:"warning",paraId:7,tocIndex:11},{value:" \uFF5C ",paraId:7,tocIndex:11},{value:"danger",paraId:7,tocIndex:11},{value:"primary",paraId:7,tocIndex:11},{value:"icon",paraId:7,tocIndex:11},{value:"Custom icon, hide icon when icon is false",paraId:7,tocIndex:11},{value:"React.ReactNode \uFF5C boolean",paraId:7,tocIndex:11},{value:"true",paraId:7,tocIndex:11},{value:"action",paraId:7,tocIndex:11},{value:"Warning prompt operation area",paraId:7,tocIndex:11},{value:"React.ReactNode",paraId:7,tocIndex:11},{value:"-",paraId:7,tocIndex:11},{value:"variant",paraId:7,tocIndex:11},{value:"Warning mode",paraId:7,tocIndex:11},{value:"standard",paraId:7,tocIndex:11},{value:"\uFF5C",paraId:7,tocIndex:11},{value:"outlined",paraId:7,tocIndex:11},{value:"standard",paraId:7,tocIndex:11},{value:"onClose",paraId:7,tocIndex:11},{value:"Close callback",paraId:7,tocIndex:11},{value:"(e?: SyntheticEvent, data?: any) => void;",paraId:7,tocIndex:11},{value:"-",paraId:7,tocIndex:11},{value:"attribute",paraId:8,tocIndex:12},{value:"explain",paraId:8,tocIndex:12},{value:"Default value",paraId:8,tocIndex:12},{value:"global variable",paraId:8,tocIndex:12},{value:"--content-marquee-speed",paraId:8,tocIndex:12},{value:"Content scrolling speed",paraId:8,tocIndex:12},{value:"10s",paraId:8,tocIndex:12},{value:"--bui-alert-content-marquee-speed",paraId:8,tocIndex:12},{value:"--padding",paraId:8,tocIndex:12},{value:"padding",paraId:8,tocIndex:12},{value:"8px",paraId:8,tocIndex:12},{value:"--bui-alert-padding",paraId:8,tocIndex:12},{value:"--line-height",paraId:8,tocIndex:12},{value:"Hang Gao",paraId:8,tocIndex:12},{value:"16px",paraId:8,tocIndex:12},{value:"--bui-alert-line-height",paraId:8,tocIndex:12},{value:"--default-icon-font-size",paraId:8,tocIndex:12},{value:"Default icon font size",paraId:8,tocIndex:12},{value:"15px",paraId:8,tocIndex:12},{value:"--bui-alert-default-icon-font-size",paraId:8,tocIndex:12},{value:"--action-margin-left",paraId:8,tocIndex:12},{value:"Left margin of operation area",paraId:8,tocIndex:12},{value:"16px",paraId:8,tocIndex:12},{value:"--bui-alert-action-margin-left",paraId:8,tocIndex:12},{value:"--icon-margin-right",paraId:8,tocIndex:12},{value:"Icon right margin",paraId:8,tocIndex:12},{value:"--bui-spacing-xs",paraId:8,tocIndex:12},{value:"--bui-alert-icon-margin-right",paraId:8,tocIndex:12},{value:"--icon-font-size",paraId:8,tocIndex:12},{value:"Icon font size",paraId:8,tocIndex:12},{value:"--bui-title-size-4",paraId:8,tocIndex:12},{value:"--bui-alert-icon-font-size",paraId:8,tocIndex:12}]},3023:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:`Used to display user avatars or objects, supporting the display of images, text, icons, etc.
Avatar is encapsulated based on the Image component, [Image]\uFF08 `,paraId:0,tocIndex:0},{value:"http://bui.taopiaopiao.com/cores/image",paraId:0,tocIndex:0},{value:" \uFF09Commonly used attributes are also supported by Avatar.",paraId:0,tocIndex:0},{value:"The avatar component creates an image avatar by passing the image address through the 'src' attribute.",paraId:1,tocIndex:2},{value:"In addition to picture avatars, you can also create simple character avatars through 'children'.",paraId:2,tocIndex:3},{value:"Through 'children', you can also create custom avatars such as icons.",paraId:3,tocIndex:4},{value:`The Avatar component provides two avatar modes: round and square. You can use 'variable' to set the corresponding mode.
The default value for variant is' rounded '.`,paraId:4,tocIndex:5},{value:`Avatar offers four sizes: xsmall, small, medium, and large. You can set the corresponding size through size.
The default size is' medium '.`,paraId:5,tocIndex:6},{value:"In addition to providing individual avatars, we also offer combination avatars that can be used through AvatarGroup and Avatar combinations.",paraId:6,tocIndex:7},{value:`The AvatarGroup component provides two avatar modes: round and square. You can use 'variable' to set the corresponding mode.
The default value for variant is' rounded '.`,paraId:7,tocIndex:8},{value:"The AvatarGroup component provides the 'maxCount' property to limit the number of displayed avatars and automatically calculate the number of avatars that are not displayed.",paraId:8,tocIndex:9},{value:`The AvatarGroup component provides the 'orientation' property to control the orientation of avatars.
The default orientation is' left '.`,paraId:9,tocIndex:10},{value:"The AvatarGroup component provides the 'spacing' attribute to control the distance between avatars.",paraId:10,tocIndex:11},{value:"attribute",paraId:11,tocIndex:13},{value:"explain",paraId:11,tocIndex:13},{value:"type",paraId:11,tocIndex:13},{value:"Default value",paraId:11,tocIndex:13},{value:"src",paraId:11,tocIndex:13},{value:"Image address",paraId:11,tocIndex:13},{value:"string",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"alt",paraId:11,tocIndex:13},{value:"Alternative text when image cannot be displayed",paraId:11,tocIndex:13},{value:"React.ReactNode",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"lazy",paraId:11,tocIndex:13},{value:"Lazy loading",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"false",paraId:11,tocIndex:13},{value:"placeholder",paraId:11,tocIndex:13},{value:"Occupy space during loading",paraId:11,tocIndex:13},{value:"React.ReactNode \uFF5C boolean",paraId:11,tocIndex:13},{value:"false",paraId:11,tocIndex:13},{value:"ImageProps",paraId:11,tocIndex:13},{value:"Transparent Image attribute",paraId:11,tocIndex:13},{value:"ImageProps",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"variant",paraId:11,tocIndex:13},{value:"Avatar shape",paraId:11,tocIndex:13},{value:"rounded",paraId:11,tocIndex:13},{value:"\uFF5C",paraId:11,tocIndex:13},{value:"square",paraId:11,tocIndex:13},{value:"rounded",paraId:11,tocIndex:13},{value:"size",paraId:11,tocIndex:13},{value:"Avatar size",paraId:11,tocIndex:13},{value:"large",paraId:11,tocIndex:13},{value:"\uFF5C",paraId:11,tocIndex:13},{value:"medium",paraId:11,tocIndex:13},{value:"\uFF5C",paraId:11,tocIndex:13},{value:"small",paraId:11,tocIndex:13},{value:" \uFF5C",paraId:11,tocIndex:13},{value:"xsmall",paraId:11,tocIndex:13},{value:"medium",paraId:11,tocIndex:13},{value:"onError",paraId:11,tocIndex:13},{value:"Image avatar loading failure callback",paraId:11,tocIndex:13},{value:"ReactEventHandler",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"onLoad",paraId:11,tocIndex:13},{value:"Image avatar loading callback",paraId:11,tocIndex:13},{value:"ReactEventHandler",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"attribute",paraId:12,tocIndex:14},{value:"explain",paraId:12,tocIndex:14},{value:"type",paraId:12,tocIndex:14},{value:"Default value",paraId:12,tocIndex:14},{value:"maxCount",paraId:12,tocIndex:14},{value:"The maximum number of avatars that can be displayed",paraId:12,tocIndex:14},{value:"string",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"variant",paraId:12,tocIndex:14},{value:"Avatar shape",paraId:12,tocIndex:14},{value:"rounded",paraId:12,tocIndex:14},{value:" \uFF5C",paraId:12,tocIndex:14},{value:"square",paraId:12,tocIndex:14},{value:"rounded",paraId:12,tocIndex:14},{value:"size",paraId:12,tocIndex:14},{value:"Avatar size",paraId:12,tocIndex:14},{value:"large",paraId:12,tocIndex:14},{value:"\uFF5C",paraId:12,tocIndex:14},{value:"medium",paraId:12,tocIndex:14},{value:"\uFF5C",paraId:12,tocIndex:14},{value:"small",paraId:12,tocIndex:14},{value:" \uFF5C",paraId:12,tocIndex:14},{value:"xsmall",paraId:12,tocIndex:14},{value:"medium",paraId:12,tocIndex:14},{value:"spacing",paraId:12,tocIndex:14},{value:"Avatar spacing",paraId:12,tocIndex:14},{value:"string",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"orientation",paraId:12,tocIndex:14},{value:"Avatar orientation",paraId:12,tocIndex:14},{value:"left",paraId:12,tocIndex:14},{value:"\uFF5C",paraId:12,tocIndex:14},{value:"right",paraId:12,tocIndex:14},{value:"right",paraId:12,tocIndex:14},{value:"attribute",paraId:13,tocIndex:16},{value:"explain",paraId:13,tocIndex:16},{value:"Default value",paraId:13,tocIndex:16},{value:"global variable",paraId:13,tocIndex:16},{value:"--large-size",paraId:13,tocIndex:16},{value:"Large profile picture width and height",paraId:13,tocIndex:16},{value:"60px",paraId:13,tocIndex:16},{value:"--bui-avatar-large-size",paraId:13,tocIndex:16},{value:"--medium-size",paraId:13,tocIndex:16},{value:"Medium sized avatar width and height",paraId:13,tocIndex:16},{value:"42px",paraId:13,tocIndex:16},{value:"--bui-avatar-medium-size",paraId:13,tocIndex:16},{value:"--small-size",paraId:13,tocIndex:16},{value:"Small profile picture width and height",paraId:13,tocIndex:16},{value:"30px",paraId:13,tocIndex:16},{value:"--bui-avatar-small-size",paraId:13,tocIndex:16},{value:"--xsmall-size",paraId:13,tocIndex:16},{value:"Ultra small avatar width and height",paraId:13,tocIndex:16},{value:"24px",paraId:13,tocIndex:16},{value:"--bui-avatar-xsmall-size",paraId:13,tocIndex:16},{value:"attribute",paraId:14,tocIndex:17},{value:"explain",paraId:14,tocIndex:17},{value:"Default value",paraId:14,tocIndex:17},{value:"global variable",paraId:14,tocIndex:17},{value:"--xsmall-margin-left",paraId:14,tocIndex:17},{value:"Ultra small avatar left margin",paraId:14,tocIndex:17},{value:"-5px",paraId:14,tocIndex:17},{value:"--bui-avatar-group-xsmall-margin-left",paraId:14,tocIndex:17},{value:"--small-margin-left",paraId:14,tocIndex:17},{value:"Small size head left margin",paraId:14,tocIndex:17},{value:"-9px",paraId:14,tocIndex:17},{value:"--bui-avatar-group-small-margin-left",paraId:14,tocIndex:17},{value:"--small-box-shadow",paraId:14,tocIndex:17},{value:"Small sized avatar shadow",paraId:14,tocIndex:17},{value:"0 0 0 1px --bui-color-bg-view",paraId:14,tocIndex:17},{value:"--bui-avatar-group-small-box-shadow",paraId:14,tocIndex:17},{value:"--medium-margin-left",paraId:14,tocIndex:17},{value:"Medium size head left margin",paraId:14,tocIndex:17},{value:"-13px",paraId:14,tocIndex:17},{value:"--bui-avatar-group-medium-margin-left",paraId:14,tocIndex:17},{value:"--medium-box-shadow",paraId:14,tocIndex:17},{value:"Medium sized avatar shadow",paraId:14,tocIndex:17},{value:"0 0 0 2px --bui-color-bg-view",paraId:14,tocIndex:17},{value:"--bui-avatar-group-medium-box-shadow",paraId:14,tocIndex:17},{value:"--large-margin-left",paraId:14,tocIndex:17},{value:"Large head left margin",paraId:14,tocIndex:17},{value:"-21px",paraId:14,tocIndex:17},{value:"--bui-avatar-group-large-margin-left",paraId:14,tocIndex:17},{value:"--large-box-shadow",paraId:14,tocIndex:17},{value:"Large sized avatar shadow",paraId:14,tocIndex:17},{value:"0 0 0 3px --bui-color-bg-view",paraId:14,tocIndex:17},{value:"--bui-avatar-group-large-box-shadow",paraId:14,tocIndex:17}]},30439:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:`As a part of [Today popup] (/cores/modal), the popup background is implemented using Fade.
Generally speaking, you should use Modal directly instead of this component.`,paraId:0,tocIndex:0},{value:"attribute",paraId:1,tocIndex:5},{value:"explain",paraId:1,tocIndex:5},{value:"type",paraId:1,tocIndex:5},{value:"Default value",paraId:1,tocIndex:5},{value:"open",paraId:1,tocIndex:5},{value:"Is it displayed",paraId:1,tocIndex:5},{value:"boolean",paraId:1,tocIndex:5},{value:"false",paraId:1,tocIndex:5},{value:"invisible",paraId:1,tocIndex:5},{value:"Is it transparent or invisible (still clickable)",paraId:1,tocIndex:5},{value:"boolean",paraId:1,tocIndex:5},{value:"false",paraId:1,tocIndex:5},{value:"transitionDuration",paraId:1,tocIndex:5},{value:"Fade in/fade out time",paraId:1,tocIndex:5},{value:"number |TransitionProps['timeout']",paraId:1,tocIndex:5},{value:"attribute",paraId:2,tocIndex:6},{value:"explain",paraId:2,tocIndex:6},{value:"Default value",paraId:2,tocIndex:6},{value:"global variable",paraId:2,tocIndex:6},{value:"--background-color",paraId:2,tocIndex:6},{value:"Background color",paraId:2,tocIndex:6},{value:"rgba(0, 0, 0, 0.68)",paraId:2,tocIndex:6},{value:"--bui-backdrop-background-color",paraId:2,tocIndex:6}]},12520:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"A logo on a corner of a container, usually used to notify the icon or avatar in the upper right corner.",paraId:0,tocIndex:0},{value:"Simple badge, set badge content through 'content'.",paraId:1,tocIndex:2},{value:`Badge offers three badge shapes: round, dot, and bubble.
You can control the badge shape through the 'type' attribute.`,paraId:2,tocIndex:3},{value:"In addition, the badge also offers two modes: 'contained' and 'outlined'.",paraId:3,tocIndex:7},{value:"You can limit the badge value through the 'maxCount' attribute.",paraId:4,tocIndex:10},{value:"We also offer 5 themed colors for badges: 'danger', 'success',' warning ',' information ', and' primary '.",paraId:5,tocIndex:11},{value:"attribute",paraId:6,tocIndex:13},{value:"explain",paraId:6,tocIndex:13},{value:"type",paraId:6,tocIndex:13},{value:"Default value",paraId:6,tocIndex:13},{value:"content",paraId:6,tocIndex:13},{value:"Badge content",paraId:6,tocIndex:13},{value:"ReactNode",paraId:6,tocIndex:13},{value:"-",paraId:6,tocIndex:13},{value:"color",paraId:6,tocIndex:13},{value:"Badge Theme Color",paraId:6,tocIndex:13},{value:"primary",paraId:6,tocIndex:13},{value:" \uFF5C ",paraId:6,tocIndex:13},{value:"info",paraId:6,tocIndex:13},{value:" \uFF5C ",paraId:6,tocIndex:13},{value:"success",paraId:6,tocIndex:13},{value:" \uFF5C ",paraId:6,tocIndex:13},{value:"warning",paraId:6,tocIndex:13},{value:" \uFF5C ",paraId:6,tocIndex:13},{value:"danger",paraId:6,tocIndex:13},{value:"primary",paraId:6,tocIndex:13},{value:"maxCount",paraId:6,tocIndex:13},{value:"Maximum value of digital badge",paraId:6,tocIndex:13},{value:"number",paraId:6,tocIndex:13},{value:"-",paraId:6,tocIndex:13},{value:"variant",paraId:6,tocIndex:13},{value:"Badge type",paraId:6,tocIndex:13},{value:"contained",paraId:6,tocIndex:13},{value:" \uFF5C",paraId:6,tocIndex:13},{value:"outlined",paraId:6,tocIndex:13},{value:"contained",paraId:6,tocIndex:13},{value:"type",paraId:6,tocIndex:13},{value:"Badge shape",paraId:6,tocIndex:13},{value:"dot",paraId:6,tocIndex:13},{value:"\uFF5C",paraId:6,tocIndex:13},{value:"rounded",paraId:6,tocIndex:13},{value:"\uFF5C",paraId:6,tocIndex:13},{value:"bubble",paraId:6,tocIndex:13},{value:"rounded",paraId:6,tocIndex:13},{value:"attribute",paraId:7,tocIndex:14},{value:"explain",paraId:7,tocIndex:14},{value:"Default value",paraId:7,tocIndex:14},{value:"global variable",paraId:7,tocIndex:14},{value:"--badge-position",paraId:7,tocIndex:14},{value:"The position of the badge from the top and right",paraId:7,tocIndex:14},{value:"14%",paraId:7,tocIndex:14},{value:"--bui-badge-position",paraId:7,tocIndex:14},{value:"--min-width",paraId:7,tocIndex:14},{value:"Minimum badge width",paraId:7,tocIndex:14},{value:"15px",paraId:7,tocIndex:14},{value:"--bui-badge-min-width",paraId:7,tocIndex:14},{value:"--height",paraId:7,tocIndex:14},{value:"Badge height",paraId:7,tocIndex:14},{value:"15px",paraId:7,tocIndex:14},{value:"--bui-badge-height",paraId:7,tocIndex:14},{value:"--line-height",paraId:7,tocIndex:14},{value:"Font line height",paraId:7,tocIndex:14},{value:"15px",paraId:7,tocIndex:14},{value:"--bui-badge-line-height",paraId:7,tocIndex:14},{value:"--padding",paraId:7,tocIndex:14},{value:"padding",paraId:7,tocIndex:14},{value:"0 3px",paraId:7,tocIndex:14},{value:"--bui-badge-padding",paraId:7,tocIndex:14},{value:"--border-radius",paraId:7,tocIndex:14},{value:"fillet",paraId:7,tocIndex:14},{value:"8px",paraId:7,tocIndex:14},{value:"--bui-badge-border-radius",paraId:7,tocIndex:14},{value:"--outlined-padding",paraId:7,tocIndex:14},{value:"Stroke the inner margin of the scene",paraId:7,tocIndex:14},{value:"0 2px",paraId:7,tocIndex:14},{value:"--bui-badge-outlined-padding",paraId:7,tocIndex:14},{value:"--dot-size",paraId:7,tocIndex:14},{value:"Point like scene width and height",paraId:7,tocIndex:14},{value:"9px",paraId:7,tocIndex:14},{value:"--bui-badge-dot-size",paraId:7,tocIndex:14},{value:"--bubble-padding",paraId:7,tocIndex:14},{value:"Inner margin of bubble scene",paraId:7,tocIndex:14},{value:"9px",paraId:7,tocIndex:14},{value:"--bui-badge-dot-size",paraId:7,tocIndex:14},{value:"--bubble-border-radius",paraId:7,tocIndex:14},{value:"Bubble scene rounded corners",paraId:7,tocIndex:14},{value:"6px 6px 6px 0",paraId:7,tocIndex:14},{value:"--bui-badge-bubble-border-radius",paraId:7,tocIndex:14}]},28134:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"Display the position of the current page in the system hierarchy and be able to return upwards.",paraId:0,tocIndex:0},{value:"The simplest usage.",paraId:1,tocIndex:2},{value:"Use BreadrumbItem instead of items for rendering",paraId:2,tocIndex:3},{value:"Place the icon in front of the text.",paraId:3,tocIndex:4},{value:'Use separator=">" to customize the delimiter.',paraId:4,tocIndex:5},{value:"Customize a separate delimiter.",paraId:5,tocIndex:6},{value:"attribute",paraId:6,tocIndex:8},{value:"explain",paraId:6,tocIndex:8},{value:"type",paraId:6,tocIndex:8},{value:"Default value",paraId:6,tocIndex:8},{value:"items",paraId:6,tocIndex:8},{value:"Routing stack information",paraId:6,tocIndex:8},{value:"BreadcrumbItemProps[]",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"separator",paraId:6,tocIndex:8},{value:"Custom delimiter",paraId:6,tocIndex:8},{value:"React.ReactNode",paraId:6,tocIndex:8},{value:"/",paraId:6,tocIndex:8},{value:"attribute",paraId:7,tocIndex:9},{value:"explain",paraId:7,tocIndex:9},{value:"type",paraId:7,tocIndex:9},{value:"Default value",paraId:7,tocIndex:9},{value:"separator",paraId:7,tocIndex:9},{value:"The delimiter to be displayed",paraId:7,tocIndex:9},{value:"React.ReactNode",paraId:7,tocIndex:9},{value:"/",paraId:7,tocIndex:9},{value:"title",paraId:7,tocIndex:9},{value:"name",paraId:7,tocIndex:9},{value:"React.ReactNode",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"children",paraId:7,tocIndex:9},{value:"Replace title when rendering with BreadrumbItem component",paraId:7,tocIndex:9},{value:"React.ReactNode",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"onClick",paraId:7,tocIndex:9},{value:"Click on the event",paraId:7,tocIndex:9},{value:"(e: React.SyntheticEvent) => void",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"attribute",paraId:8,tocIndex:10},{value:"explain",paraId:8,tocIndex:10},{value:"Default value",paraId:8,tocIndex:10},{value:"global variable",paraId:8,tocIndex:10},{value:"--margin",paraId:8,tocIndex:10},{value:"Breadcrumb outer margin",paraId:8,tocIndex:10},{value:"0",paraId:8,tocIndex:10},{value:"--bui-breadcrumb-margin",paraId:8,tocIndex:10},{value:"--padding",paraId:8,tocIndex:10},{value:"Breadcrumb inner margin",paraId:8,tocIndex:10},{value:"0",paraId:8,tocIndex:10},{value:"--bui-breadcrumb-padding",paraId:8,tocIndex:10},{value:"--color",paraId:8,tocIndex:10},{value:"Breadcrumb color",paraId:8,tocIndex:10},{value:"rgba(0, 0, 0, 0.45)",paraId:8,tocIndex:10},{value:"--bui-breadcrumb-color",paraId:8,tocIndex:10},{value:"--item-separator-margin",paraId:8,tocIndex:10},{value:"Breadcrumb option delimiter margin",paraId:8,tocIndex:10},{value:"0",paraId:8,tocIndex:10},{value:"--bui-breadcrumb-item-separator-margin",paraId:8,tocIndex:10},{value:"--list-li-color",paraId:8,tocIndex:10},{value:"Breadcrumb list sub item color",paraId:8,tocIndex:10},{value:"rgba(0, 0, 0, 0.88)",paraId:8,tocIndex:10},{value:"--bui-breadcrumb-list-li-color",paraId:8,tocIndex:10}]},57413:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"The button is used to trigger an operation, make a selection, such as submitting a form, opening a dialog box, canceling the operation, or performing a deletion operation.",paraId:0,tocIndex:0},{value:"The button supports four display forms: text button, stroke button, fill button, and light button. The default is the stroke button.",paraId:1,tocIndex:2},{value:"Text button: Use text directly as a button. It is the button with the weakest visual appeal, usually appearing next to table operation bars, titles, and fields.",paraId:2,tocIndex:2},{value:"Fill button: generally used for the main button, it is the highest priority operation that users need to pay attention to on the entire page, guiding users to pay attention to and operate.",paraId:3,tocIndex:2},{value:"Stroke button: a common form of white background with text, which is visually less emphasized than the fill button and is usually used in combination with the fill button",paraId:4,tocIndex:2},{value:"Light button: The text in light state is the background color of the button, and the background is the corresponding light color.",paraId:5,tocIndex:2},{value:"The buttons come in three sizes: large, medium, and small.",paraId:6,tocIndex:3},{value:"Set the 'size' to 'large small full' and set the button size to 'large', 'small', and 'full' respectively. If 'size' is not set, the size will be medium.",paraId:7,tocIndex:3},{value:"The button supports defining themes such as' primary ',' success', 'info', 'warning', 'danger', and 'vip'. If color is not set, it defaults to 'default'",paraId:8,tocIndex:4},{value:"Disable the button through the 'disabled' attribute, and the button cannot be clicked in the disabled state.",paraId:9,tocIndex:5},{value:"Because users are more sensitive to icons compared to plain text, sometimes you may want to set icons for certain buttons to enhance the user experience of the application. For example, if you have a date button, you can use a date icon to mark it StartIcon is located before the child element, and endIcon is located after the child element.",paraId:10,tocIndex:6},{value:"attribute",paraId:11,tocIndex:7},{value:"explain",paraId:11,tocIndex:7},{value:"type",paraId:11,tocIndex:7},{value:"Default value",paraId:11,tocIndex:7},{value:"variant",paraId:11,tocIndex:7},{value:"Button type",paraId:11,tocIndex:7},{value:"outlined",paraId:11,tocIndex:7},{value:" |",paraId:11,tocIndex:7},{value:"text",paraId:11,tocIndex:7},{value:" |",paraId:11,tocIndex:7},{value:"contained",paraId:11,tocIndex:7},{value:" |",paraId:11,tocIndex:7},{value:"light",paraId:11,tocIndex:7},{value:"outlined",paraId:11,tocIndex:7},{value:"color",paraId:11,tocIndex:7},{value:"Button color",paraId:11,tocIndex:7},{value:"primary",paraId:11,tocIndex:7},{value:" |",paraId:11,tocIndex:7},{value:"info",paraId:11,tocIndex:7},{value:" |",paraId:11,tocIndex:7},{value:"success",paraId:11,tocIndex:7},{value:" |",paraId:11,tocIndex:7},{value:"warning",paraId:11,tocIndex:7},{value:" |",paraId:11,tocIndex:7},{value:"danger",paraId:11,tocIndex:7},{value:" |",paraId:11,tocIndex:7},{value:"vip",paraId:11,tocIndex:7},{value:" |",paraId:11,tocIndex:7},{value:"default",paraId:11,tocIndex:7},{value:"default",paraId:11,tocIndex:7},{value:"size",paraId:11,tocIndex:7},{value:"Button size",paraId:11,tocIndex:7},{value:"small",paraId:11,tocIndex:7},{value:" |",paraId:11,tocIndex:7},{value:"medium",paraId:11,tocIndex:7},{value:" |",paraId:11,tocIndex:7},{value:"large",paraId:11,tocIndex:7},{value:" |",paraId:11,tocIndex:7},{value:"full",paraId:11,tocIndex:7},{value:"medium",paraId:11,tocIndex:7},{value:"disabled",paraId:11,tocIndex:7},{value:"Do you want to disable it",paraId:11,tocIndex:7},{value:"boolean",paraId:11,tocIndex:7},{value:"false",paraId:11,tocIndex:7},{value:"startIcon",paraId:11,tocIndex:7},{value:"The content placed before the child element",paraId:11,tocIndex:7},{value:"React.ReactNode",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"endIcon",paraId:11,tocIndex:7},{value:"The content placed after the child element",paraId:11,tocIndex:7},{value:"React.ReactNode",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"openType",paraId:11,tocIndex:7},{value:"WeChat Open Capability",paraId:11,tocIndex:7},{value:"string",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"onClick",paraId:11,tocIndex:7},{value:"Callback when clicking a button",paraId:11,tocIndex:7},{value:"(event: MouseEvent) => void",paraId:11,tocIndex:7},{value:"-",paraId:11,tocIndex:7},{value:"[UNK][UNK]\u5C5E[UNK]\u89C1 ",paraId:12,tocIndex:7},{value:"button",paraId:12,tocIndex:7},{value:"attribute",paraId:13,tocIndex:8},{value:"explain",paraId:13,tocIndex:8},{value:"Default value",paraId:13,tocIndex:8},{value:"global variable",paraId:13,tocIndex:8},{value:"--border-radius",paraId:13,tocIndex:8},{value:"Rounded corner size",paraId:13,tocIndex:8},{value:"100px",paraId:13,tocIndex:8},{value:"--bui-button-border-radius",paraId:13,tocIndex:8},{value:"--bg-color",paraId:13,tocIndex:8},{value:"background color",paraId:13,tocIndex:8},{value:"--bui-color-neutral-5",paraId:13,tocIndex:8},{value:"--bui-button-default-bg-color",paraId:13,tocIndex:8},{value:"--text-color",paraId:13,tocIndex:8},{value:"Button Default text color",paraId:13,tocIndex:8},{value:"--bui-color-fg-muted",paraId:13,tocIndex:8},{value:"--bui-button-text-color",paraId:13,tocIndex:8},{value:"--default-border",paraId:13,tocIndex:8},{value:"Default border, including borders for text and contained buttons",paraId:13,tocIndex:8},{value:"1px solid transparent",paraId:13,tocIndex:8},{value:"--bui-button-default-border",paraId:13,tocIndex:8},{value:"--light-border",paraId:13,tocIndex:8},{value:"The border of the light button",paraId:13,tocIndex:8},{value:"1px solid transparent",paraId:13,tocIndex:8},{value:"--bui-button-light-border",paraId:13,tocIndex:8},{value:"--outlined-default-border",paraId:13,tocIndex:8},{value:"The default border for the outlined button",paraId:13,tocIndex:8},{value:"1px solid --bui-color-neutral-4",paraId:13,tocIndex:8},{value:"--bui-button-outlined-default-border",paraId:13,tocIndex:8},{value:"--height",paraId:13,tocIndex:8},{value:"Default height of button",paraId:13,tocIndex:8},{value:"27px",paraId:13,tocIndex:8},{value:"--bui-button-height",paraId:13,tocIndex:8},{value:"--icon-start-margin-right",paraId:13,tocIndex:8},{value:"Right margin of front label",paraId:13,tocIndex:8},{value:"--bui-spacing-xs",paraId:13,tocIndex:8},{value:"--bui-button-icon-start-margin-right",paraId:13,tocIndex:8},{value:"--icon-end-margin-left",paraId:13,tocIndex:8},{value:"Left margin of front label",paraId:13,tocIndex:8},{value:"--bui-spacing-xs",paraId:13,tocIndex:8},{value:"--bui-button-icon-end-margin-left",paraId:13,tocIndex:8},{value:"--disabled-opacity",paraId:13,tocIndex:8},{value:"Disable transparency status",paraId:13,tocIndex:8},{value:"0.5",paraId:13,tocIndex:8},{value:"--bui-button-disabled-opacity",paraId:13,tocIndex:8},{value:"--small-padding",paraId:13,tocIndex:8},{value:"Inner margin of small button",paraId:13,tocIndex:8},{value:"0 11px",paraId:13,tocIndex:8},{value:"--bui-button-small-padding",paraId:13,tocIndex:8},{value:"--small-height",paraId:13,tocIndex:8},{value:"Small button height",paraId:13,tocIndex:8},{value:"24px",paraId:13,tocIndex:8},{value:"--bui-button-small-height",paraId:13,tocIndex:8},{value:"--medium-padding",paraId:13,tocIndex:8},{value:"Inner margin of middle button",paraId:13,tocIndex:8},{value:"0 14px",paraId:13,tocIndex:8},{value:"--bui-button-medium-padding",paraId:13,tocIndex:8},{value:"--large-padding",paraId:13,tocIndex:8},{value:"Large button margin",paraId:13,tocIndex:8},{value:"0 14px",paraId:13,tocIndex:8},{value:"--bui-button-large-padding",paraId:13,tocIndex:8},{value:"--large-height",paraId:13,tocIndex:8},{value:"Height of large button",paraId:13,tocIndex:8},{value:"33px",paraId:13,tocIndex:8},{value:"--bui-button-large-height",paraId:13,tocIndex:8},{value:"--full-font-size",paraId:13,tocIndex:8},{value:"Full screen button font size",paraId:13,tocIndex:8},{value:"--bui-title-size-4",paraId:13,tocIndex:8},{value:"--bui-button-full-font-size",paraId:13,tocIndex:8},{value:"--full-height",paraId:13,tocIndex:8},{value:"Full screen button height",paraId:13,tocIndex:8},{value:"42px",paraId:13,tocIndex:8},{value:"--bui-button-full-height",paraId:13,tocIndex:8}]},92087:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"Used to select dates or date ranges.",paraId:0,tocIndex:0},{value:"The default is single choice mode, and the corresponding 'value' should be passed in as a single 'date'. The default selectable range is one year including the current month.",paraId:1,tocIndex:2},{value:"Specify the optional range through 'minDate' and 'maxDate', render the specified month: value=null and specify 'minDate'.",paraId:2,tocIndex:3},{value:"Enable 'hideDaysOutsideCurrentMonth' to hide dates outside the current month.",paraId:3,tocIndex:4},{value:"You can customize the header date format using 'headerBarFormat', with the default format being 'YYYY/MM'.",paraId:4,tocIndex:5},{value:"You can customize the left and right icons of the header bar using 'headerBarLeftAcon' and 'headerBarRightIcon'.",paraId:5,tocIndex:6},{value:"Enable 'enableSelectYear' by clicking on the date text area to open the year floating layer and switch years.",paraId:6,tocIndex:7},{value:"You can customize the disable date through 'disabled date'.",paraId:7,tocIndex:8},{value:"Highlight a day or weekend through 'highlightDate'.",paraId:8,tocIndex:9},{value:"Mode 'is specified as' range', which allows for the selection of a date range.",paraId:9,tocIndex:10},{value:"Control the calendar component through the 'value' attribute.",paraId:10,tocIndex:11},{value:"By using the 'defaultValue' attribute to render the component, the selected state of the calendar will be reflected in the 'data selected' or 'data start' and 'data end' attributes of the outermost DOM.",paraId:11,tocIndex:12},{value:"You can use 'dateRender' to draw custom date styles.",paraId:12,tocIndex:13},{value:"You can use 'weekRender' to draw custom weekly cell styles.",paraId:13,tocIndex:14},{value:"attribute",paraId:14,tocIndex:15},{value:"explain",paraId:14,tocIndex:15},{value:"type",paraId:14,tocIndex:15},{value:"Default value",paraId:14,tocIndex:15},{value:"defaultValue",paraId:14,tocIndex:15},{value:"The default selected value is used when the component is uncontrolled",paraId:14,tocIndex:15},{value:"Date |Date[] |null",paraId:14,tocIndex:15},{value:"-",paraId:14,tocIndex:15},{value:"value",paraId:14,tocIndex:15},{value:"The selected value is used when the component is controlled",paraId:14,tocIndex:15},{value:"Date |Date[] |null",paraId:14,tocIndex:15},{value:"-",paraId:14,tocIndex:15},{value:"minDate",paraId:14,tocIndex:15},{value:"Minimum selectable date",paraId:14,tocIndex:15},{value:"Date",paraId:14,tocIndex:15},{value:"The first day of the current month",paraId:14,tocIndex:15},{value:"maxDate",paraId:14,tocIndex:15},{value:"Maximum selectable dates",paraId:14,tocIndex:15},{value:"Date",paraId:14,tocIndex:15},{value:"One year after the current date",paraId:14,tocIndex:15},{value:"mode",paraId:14,tocIndex:15},{value:"Calendar selection type",paraId:14,tocIndex:15},{value:"single",paraId:14,tocIndex:15},{value:" |",paraId:14,tocIndex:15},{value:"range",paraId:14,tocIndex:15},{value:"single",paraId:14,tocIndex:15},{value:"hideDaysOutsideCurrentMonth",paraId:14,tocIndex:15},{value:"Do you want to hide dates outside the current month",paraId:14,tocIndex:15},{value:"boolean",paraId:14,tocIndex:15},{value:"false",paraId:14,tocIndex:15},{value:"headerBarFormat",paraId:14,tocIndex:15},{value:"Display format of date in the header operation bar",paraId:14,tocIndex:15},{value:"string",paraId:14,tocIndex:15},{value:"YYYY/MM",paraId:14,tocIndex:15},{value:"headerBarLeftIcon",paraId:14,tocIndex:15},{value:"Left icon of the head operation bar",paraId:14,tocIndex:15},{value:"(options: ICustomIconProps) => React.ReactNode",paraId:14,tocIndex:15},{value:"<CaretLeftIcon />",paraId:14,tocIndex:15},{value:"headerBarRightIcon",paraId:14,tocIndex:15},{value:"Icon on the right side of the head operation bar",paraId:14,tocIndex:15},{value:"(options: ICustomIconProps) => React.ReactNode",paraId:14,tocIndex:15},{value:"<CaretRightIcon />",paraId:14,tocIndex:15},{value:"disabledDate",paraId:14,tocIndex:15},{value:"Non selectable dates",paraId:14,tocIndex:15},{value:"(currentDate: Date) => boolean",paraId:14,tocIndex:15},{value:"Date before that day",paraId:14,tocIndex:15},{value:"highlightDate",paraId:14,tocIndex:15},{value:"Highlighted date",paraId:14,tocIndex:15},{value:"today",paraId:14,tocIndex:15},{value:" |",paraId:14,tocIndex:15},{value:"weekend",paraId:14,tocIndex:15},{value:"today",paraId:14,tocIndex:15},{value:"dateRender",paraId:14,tocIndex:15},{value:"Customize the content of the date cell",paraId:14,tocIndex:15},{value:"(currentDate: ICalendarInstance) => React.ReactNode",paraId:14,tocIndex:15},{value:"-",paraId:14,tocIndex:15},{value:"weekRender",paraId:14,tocIndex:15},{value:"Customize the content of weekly cells",paraId:14,tocIndex:15},{value:"(week: string) => React.ReactNode",paraId:14,tocIndex:15},{value:"-",paraId:14,tocIndex:15},{value:"onMonthChange",paraId:14,tocIndex:15},{value:"A callback with monthly changes",paraId:14,tocIndex:15},{value:"(e: React.SyntheticEvent,data: ICalendarMonthChangeData) => void",paraId:14,tocIndex:15},{value:"-",paraId:14,tocIndex:15},{value:"onChange",paraId:14,tocIndex:15},{value:"Callback for date changes",paraId:14,tocIndex:15},{value:"(e: React.SyntheticEvent,data: { value: ICalendarValue }) => void",paraId:14,tocIndex:15},{value:"-",paraId:14,tocIndex:15},{value:"attribute",paraId:15,tocIndex:16},{value:"explain",paraId:15,tocIndex:16},{value:"type",paraId:15,tocIndex:16},{value:"month",paraId:15,tocIndex:16},{value:"Month after switching",paraId:15,tocIndex:16},{value:"string",paraId:15,tocIndex:16},{value:"type",paraId:15,tocIndex:16},{value:"Operation type, prev: click on previous month next: click on next month",paraId:15,tocIndex:16},{value:"prev",paraId:15,tocIndex:16},{value:" |",paraId:15,tocIndex:16},{value:"next",paraId:15,tocIndex:16},{value:"attribute",paraId:16,tocIndex:17},{value:"explain",paraId:16,tocIndex:17},{value:"type",paraId:16,tocIndex:17},{value:"month",paraId:16,tocIndex:17},{value:"Date Object",paraId:16,tocIndex:17},{value:"Date",paraId:16,tocIndex:17},{value:"type",paraId:16,tocIndex:17},{value:"Do you want to disable it",paraId:16,tocIndex:17},{value:"boolean",paraId:16,tocIndex:17},{value:"attribute",paraId:17,tocIndex:18},{value:"explain",paraId:17,tocIndex:18},{value:"type",paraId:17,tocIndex:18},{value:"isMinMonth",paraId:17,tocIndex:18},{value:"Is it the smallest month within the optional range",paraId:17,tocIndex:18},{value:"boolean",paraId:17,tocIndex:18},{value:"isMaxMonth",paraId:17,tocIndex:18},{value:"Is it the maximum month within the optional range",paraId:17,tocIndex:18},{value:"boolean",paraId:17,tocIndex:18},{value:"attribute",paraId:18,tocIndex:19},{value:"explain",paraId:18,tocIndex:19},{value:"Default value",paraId:18,tocIndex:19},{value:"global variable",paraId:18,tocIndex:19},{value:"--padding",paraId:18,tocIndex:19},{value:"padding",paraId:18,tocIndex:19},{value:"6px 12px 7px",paraId:18,tocIndex:19},{value:"--bui-calendar-padding",paraId:18,tocIndex:19},{value:"--week-height",paraId:18,tocIndex:19},{value:"Day of the week display bar height",paraId:18,tocIndex:19},{value:"30px",paraId:18,tocIndex:19},{value:"--bui-calendar-week-height",paraId:18,tocIndex:19},{value:"--handler-height",paraId:18,tocIndex:19},{value:"Height of operation bar",paraId:18,tocIndex:19},{value:"28px",paraId:18,tocIndex:19},{value:"--bui-calendar-handler-height",paraId:18,tocIndex:19},{value:"--handler-margin-bottom",paraId:18,tocIndex:19},{value:"Bottom outer margin of the operation bar",paraId:18,tocIndex:19},{value:"7px",paraId:18,tocIndex:19},{value:"--bui-calendar-handler-margin-bottom",paraId:18,tocIndex:19},{value:"--handler-text-width",paraId:18,tocIndex:19},{value:"Width of operation bar text container",paraId:18,tocIndex:19},{value:"80px",paraId:18,tocIndex:19},{value:"--bui-calendar-handler-text-width",paraId:18,tocIndex:19},{value:"--handler-btn-width",paraId:18,tocIndex:19},{value:"Width of operation bar buttons",paraId:18,tocIndex:19},{value:"46px",paraId:18,tocIndex:19},{value:"--bui-calendar-handler-btn-width",paraId:18,tocIndex:19},{value:"--handler-btn-height",paraId:18,tocIndex:19},{value:"Height of operation bar buttons",paraId:18,tocIndex:19},{value:"100%",paraId:18,tocIndex:19},{value:"--bui-calendar-handler-btn-height",paraId:18,tocIndex:19},{value:"--handler-btn-icon-font-size",paraId:18,tocIndex:19},{value:"Font size of operation bar button icon",paraId:18,tocIndex:19},{value:"28px",paraId:18,tocIndex:19},{value:"--bui-calendar-handler-btn-icon-font-size",paraId:18,tocIndex:19},{value:"--day-box-height",paraId:18,tocIndex:19},{value:"Date box height",paraId:18,tocIndex:19},{value:"30px",paraId:18,tocIndex:19},{value:"--bui-calendar-day-box-height",paraId:18,tocIndex:19},{value:"--day-box-margin-bottom",paraId:18,tocIndex:19},{value:"Bottom margin of date box",paraId:18,tocIndex:19},{value:"7px",paraId:18,tocIndex:19},{value:"--bui-calendar-day-box-margin-bottom",paraId:18,tocIndex:19},{value:"--day-disabled-color",paraId:18,tocIndex:19},{value:"Date disabled font color",paraId:18,tocIndex:19},{value:"#9c9ca5",paraId:18,tocIndex:19},{value:"--bui-calendar-day-disabled-color",paraId:18,tocIndex:19},{value:"--middle-color",paraId:18,tocIndex:19},{value:"Select the font color for the middle part of the range selection",paraId:18,tocIndex:19},{value:"#000",paraId:18,tocIndex:19},{value:"--bui-calendar-middle-color",paraId:18,tocIndex:19},{value:"--middle-background-color",paraId:18,tocIndex:19},{value:"Select the background color in the middle of the range",paraId:18,tocIndex:19},{value:"#ffeaf1",paraId:18,tocIndex:19},{value:"--bui-calendar-middle-background-color",paraId:18,tocIndex:19},{value:"--range-both-ends-color",paraId:18,tocIndex:19},{value:"Select font colors at both ends of the range",paraId:18,tocIndex:19},{value:"#000",paraId:18,tocIndex:19},{value:"--bui-calendar-range-both-ends-color",paraId:18,tocIndex:19},{value:"--range-both-ends-background-color",paraId:18,tocIndex:19},{value:"Select background colors at both ends of the range",paraId:18,tocIndex:19},{value:"#ffc7da",paraId:18,tocIndex:19},{value:"--bui-calendar-range-both-ends-background-color",paraId:18,tocIndex:19}]},71805:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"Universal card container, the most basic card container, can be used to hold text, lists, images, paragraphs, and is commonly used for backend overview pages.",paraId:0,tocIndex:0},{value:"The Card component is divided into three modules: CardHeader, CardContent, CardFooter, etc. The following is an example document.",paraId:1,tocIndex:2},{value:"The card component provides a 'CardHeader' sub component for setting the card header module. You can set the title of the card container through 'title'.",paraId:2,tocIndex:3},{value:"You can also set the subtitle of the card container through 'subtitle'.",paraId:3,tocIndex:4},{value:"Use title and subtitle in combination",paraId:4},{value:`In addition to providing titles and subheadings, the CardHeader sub component also provides a card header operation area. You can use 'extra' to carry the card header operation area Action.
When binding the 'nClick' event, the 'CardHeader' provides the default icon for the right side operation. You can also display or hide this icon by setting the 'endIcon' property to 'true/false'.`,paraId:5,tocIndex:5},{value:"Set 'endIcon' to 'false'.",paraId:6},{value:"The Card component provides a CardContent sub component, typically used to hold the main content of a card container.",paraId:7,tocIndex:6},{value:"The Card component provides a CardFooter sub component, typically used to carry the bottom operating area of the card container.",paraId:8,tocIndex:7},{value:"Used in conjunction with the 'CardHeader', 'CardContent', and 'CardFooter' sub components.",paraId:9,tocIndex:8},{value:"The Card component supports nested use.",paraId:10,tocIndex:9},{value:"In addition to being used in conjunction with the CardHeader, CardContent, and CardFooter sub components, you can also achieve highly customized cards by directly inserting children.",paraId:11,tocIndex:10},{value:"attribute",paraId:12,tocIndex:12},{value:"explain",paraId:12,tocIndex:12},{value:"type",paraId:12,tocIndex:12},{value:"Default value",paraId:12,tocIndex:12},{value:"title",paraId:12,tocIndex:12},{value:"Card Title",paraId:12,tocIndex:12},{value:"ReactNode",paraId:12,tocIndex:12},{value:"-",paraId:12,tocIndex:12},{value:"subtitle",paraId:12,tocIndex:12},{value:"subtitle",paraId:12,tocIndex:12},{value:"ReactNode",paraId:12,tocIndex:12},{value:"-",paraId:12,tocIndex:12},{value:"extra",paraId:12,tocIndex:12},{value:"Operation area on the right side of the card",paraId:12,tocIndex:12},{value:"ReactNode",paraId:12,tocIndex:12},{value:"-",paraId:12,tocIndex:12},{value:"endIcon",paraId:12,tocIndex:12},{value:"Icon on the right side of the card",paraId:12,tocIndex:12},{value:"ReactNode \uFF5C boolean",paraId:12,tocIndex:12},{value:"-",paraId:12,tocIndex:12},{value:"attribute",paraId:13,tocIndex:14},{value:"explain",paraId:13,tocIndex:14},{value:"Default value",paraId:13,tocIndex:14},{value:"global variable",paraId:13,tocIndex:14},{value:"--padding",paraId:13,tocIndex:14},{value:"padding",paraId:13,tocIndex:14},{value:"--bui-spacing-md --bui-spacing-lg",paraId:13,tocIndex:14},{value:"--bui-card-header-padding",paraId:13,tocIndex:14},{value:"--end-icon-margin-left",paraId:13,tocIndex:14},{value:"Left margin of the tail icon",paraId:13,tocIndex:14},{value:"2px",paraId:13,tocIndex:14},{value:"--bui-card-header-end-icon-margin-left",paraId:13,tocIndex:14},{value:"attribute",paraId:14,tocIndex:15},{value:"explain",paraId:14,tocIndex:15},{value:"Default value",paraId:14,tocIndex:15},{value:"global variable",paraId:14,tocIndex:15},{value:"--padding",paraId:14,tocIndex:15},{value:"padding",paraId:14,tocIndex:15},{value:"--bui-spacing-md --bui-spacing-lg",paraId:14,tocIndex:15},{value:"--bui-card-footer-padding",paraId:14,tocIndex:15}]},7950:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"Checkboxes provide users with multiple options to choose from or cancel selected items when displaying a series of options.",paraId:0,tocIndex:0},{value:"Control the status through 'checked' and 'onChange'.",paraId:1,tocIndex:2},{value:"The input property passed through 'inputProps' can be passed transparently to the internal' input 'tag.",paraId:2,tocIndex:3},{value:"Name 'and' value 'can be directly passed through to the internal' input 'tag without being overwritten by the same named attribute passed in by' inputProps'.",paraId:3,tocIndex:4},{value:"The position of the text in the checkbox icon can be controlled through 'labelPlacement'.",paraId:4,tocIndex:5},{value:"The 'icon' can be customized as a selected status icon, and the 'checkedIcon' can be customized as a selected status icon.",paraId:5,tocIndex:6},{value:"Use 'disabled' to disable components, and 'CheckboxGroup. disabled' can disable the entire group.",paraId:6,tocIndex:7},{value:"The combination of CheckboxGroup and Checkbox can implement a checkbox group, and the Checkbox should be passed with the value attribute.",paraId:7,tocIndex:8},{value:"Control the CheckboxGroup component through 'value' and the Checkbox component through 'checked'.",paraId:8,tocIndex:9},{value:"Use 'defaultValue' to specify the default value of the 'CheckboxGroup' component, and use 'defaultChecked' to specify the default value of the 'Checkbox' component.",paraId:9,tocIndex:10},{value:"attribute",paraId:10,tocIndex:12},{value:"explain",paraId:10,tocIndex:12},{value:"type",paraId:10,tocIndex:12},{value:"Default value",paraId:10,tocIndex:12},{value:"defaultValue",paraId:10,tocIndex:12},{value:"The default selected option, used when the component is uncontrolled",paraId:10,tocIndex:12},{value:"string[]",paraId:10,tocIndex:12},{value:"-",paraId:10,tocIndex:12},{value:"value",paraId:10,tocIndex:12},{value:"Specify the selected option to be used when the component is controlled",paraId:10,tocIndex:12},{value:"string[]",paraId:10,tocIndex:12},{value:"-",paraId:10,tocIndex:12},{value:"disabled",paraId:10,tocIndex:12},{value:"Is the entire group disabled",paraId:10,tocIndex:12},{value:"boolean",paraId:10,tocIndex:12},{value:"false",paraId:10,tocIndex:12},{value:"onChange",paraId:10,tocIndex:12},{value:"The callback function during changes",paraId:10,tocIndex:12},{value:"(e: React.SyntheticEvent,data: {value: string[]}) => void",paraId:10,tocIndex:12},{value:"-",paraId:10,tocIndex:12},{value:"attribute",paraId:11,tocIndex:13},{value:"explain",paraId:11,tocIndex:13},{value:"type",paraId:11,tocIndex:13},{value:"Default value",paraId:11,tocIndex:13},{value:"defaultChecked",paraId:11,tocIndex:13},{value:"Whether it is selected by default, used when the component is uncontrolled",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"checked",paraId:11,tocIndex:13},{value:"Is it selected to be used when the component is controlled",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"inputProps",paraId:11,tocIndex:13},{value:"inside ",paraId:11,tocIndex:13},{value:"<input>",paraId:11,tocIndex:13},{value:" Standard attributes of tags",paraId:11,tocIndex:13},{value:"React.InputHTMLAttributes<HTMLInputElement>",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"inputRef",paraId:11,tocIndex:13},{value:"inside ",paraId:11,tocIndex:13},{value:"<input>",paraId:11,tocIndex:13},{value:" Label's ref",paraId:11,tocIndex:13},{value:"React.Ref<HTMLInputElement>",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"name",paraId:11,tocIndex:13},{value:"<input>",paraId:11,tocIndex:13},{value:" Name identification",paraId:11,tocIndex:13},{value:"string",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"value",paraId:11,tocIndex:13},{value:"The value of the component, if using CheckboxGroup, this property should be passed in",paraId:11,tocIndex:13},{value:"string",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"disabled",paraId:11,tocIndex:13},{value:"Do you want to disable it",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"false",paraId:11,tocIndex:13},{value:"icon",paraId:11,tocIndex:13},{value:"Unchecked status icon",paraId:11,tocIndex:13},{value:"ReactNode",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"checkedIcon",paraId:11,tocIndex:13},{value:"Select status icon",paraId:11,tocIndex:13},{value:"ReactNode",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"labelPlacement",paraId:11,tocIndex:13},{value:"Copy position",paraId:11,tocIndex:13},{value:"left",paraId:11,tocIndex:13},{value:" |",paraId:11,tocIndex:13},{value:"top",paraId:11,tocIndex:13},{value:" |",paraId:11,tocIndex:13},{value:"right",paraId:11,tocIndex:13},{value:" |",paraId:11,tocIndex:13},{value:"bottom",paraId:11,tocIndex:13},{value:"right",paraId:11,tocIndex:13},{value:"onChange",paraId:11,tocIndex:13},{value:"The callback function during changes",paraId:11,tocIndex:13},{value:"(e: React.SyntheticEvent,data: {checked:boolean}) => void",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"attribute",paraId:12,tocIndex:14},{value:"explain",paraId:12,tocIndex:14},{value:"Default value",paraId:12,tocIndex:14},{value:"global variable",paraId:12,tocIndex:14},{value:"--label-color",paraId:12,tocIndex:14},{value:"Text font color",paraId:12,tocIndex:14},{value:"--bui-color-fg-default",paraId:12,tocIndex:14},{value:"--bui-checkbox-label-color",paraId:12,tocIndex:14},{value:"--label-font-size",paraId:12,tocIndex:14},{value:"Copy font size",paraId:12,tocIndex:14},{value:"--bui-text-size-1",paraId:12,tocIndex:14},{value:"--bui-checkbox-label-font-size",paraId:12,tocIndex:14},{value:"--icon-font-size",paraId:12,tocIndex:14},{value:"Icon font size",paraId:12,tocIndex:14},{value:"--bui-title-size-2",paraId:12,tocIndex:14},{value:"--bui-checkbox-icon-font-size",paraId:12,tocIndex:14},{value:"--disabled-opacity",paraId:12,tocIndex:14},{value:"Disable transparency status",paraId:12,tocIndex:14},{value:"0.5",paraId:12,tocIndex:14},{value:"--bui-checkbox-disabled-opacity",paraId:12,tocIndex:14},{value:"--icon-padding",paraId:12,tocIndex:14},{value:"Icon inner margin",paraId:12,tocIndex:14},{value:"5px",paraId:12,tocIndex:14},{value:"--bui-checkbox-icon-padding",paraId:12,tocIndex:14}]},53528:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"City selection",paraId:0,tocIndex:0},{value:"City selection displays the current city, location city, popular cities, and all cities, supporting right-hand letter navigation",paraId:1,tocIndex:2},{value:"Users can set the disabling Index to control the display of letter navigation on the right side, which defaults to false, indicating the display of letter navigation",paraId:2,tocIndex:3},{value:"Users can set the title to control the display of the head",paraId:3,tocIndex:4},{value:"attribute",paraId:4,tocIndex:6},{value:"explain",paraId:4,tocIndex:6},{value:"type",paraId:4,tocIndex:6},{value:"Default value",paraId:4,tocIndex:6},{value:"cities",paraId:4,tocIndex:6},{value:"City List",paraId:4,tocIndex:6},{value:"CityGroup[]",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"onSelect",paraId:4,tocIndex:6},{value:"Select city callback",paraId:4,tocIndex:6},{value:"(e: React.SyntheticEvent,data: {city: City}) => void",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"selectedCity",paraId:4,tocIndex:6},{value:"Current city information",paraId:4,tocIndex:6},{value:"City",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"selectedCityGroupName",paraId:4,tocIndex:6},{value:"The title of the current city column",paraId:4,tocIndex:6},{value:"string",paraId:4,tocIndex:6},{value:"Current City",paraId:4,tocIndex:6},{value:"currentCity",paraId:4,tocIndex:6},{value:"Locate city information",paraId:4,tocIndex:6},{value:"City",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"currentCityGroupName",paraId:4,tocIndex:6},{value:"Position the title of the city column",paraId:4,tocIndex:6},{value:"string",paraId:4,tocIndex:6},{value:"'Positioning City'",paraId:4,tocIndex:6},{value:"hotCities",paraId:4,tocIndex:6},{value:"Popular city information",paraId:4,tocIndex:6},{value:"City[]",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"hotCitiesGroupName",paraId:4,tocIndex:6},{value:"Title of the popular city column",paraId:4,tocIndex:6},{value:"string",paraId:4,tocIndex:6},{value:"'Popular Cities'",paraId:4,tocIndex:6},{value:"disableIndex",paraId:4,tocIndex:6},{value:"Disable display index. Default false means display index is disabled",paraId:4,tocIndex:6},{value:"boolean",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"title",paraId:4,tocIndex:6},{value:"Title at the top, not mandatory",paraId:4,tocIndex:6},{value:"string",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"onClose",paraId:4,tocIndex:6},{value:"Used in conjunction with the title, the close callback on the right side of the head",paraId:4,tocIndex:6},{value:"(e: React.SyntheticEvent) => void",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"attribute",paraId:5,tocIndex:7},{value:"explain",paraId:5,tocIndex:7},{value:"type",paraId:5,tocIndex:7},{value:"Default value",paraId:5,tocIndex:7},{value:"groupName",paraId:5,tocIndex:7},{value:"Group name",paraId:5,tocIndex:7},{value:"string",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"cities",paraId:5,tocIndex:7},{value:"City List",paraId:5,tocIndex:7},{value:"City[]",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"attribute",paraId:6,tocIndex:8},{value:"explain",paraId:6,tocIndex:8},{value:"type",paraId:6,tocIndex:8},{value:"Default value",paraId:6,tocIndex:8},{value:"code",paraId:6,tocIndex:8},{value:"City ID",paraId:6,tocIndex:8},{value:"string",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"name",paraId:6,tocIndex:8},{value:"City name",paraId:6,tocIndex:8},{value:"string",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"attribute",paraId:7,tocIndex:9},{value:"explain",paraId:7,tocIndex:9},{value:"Default value",paraId:7,tocIndex:9},{value:"global variable",paraId:7,tocIndex:9},{value:"--select-item-width",paraId:7,tocIndex:9},{value:"Horizontal option width",paraId:7,tocIndex:9},{value:"111px",paraId:7,tocIndex:9},{value:"--bui-city-selector-item-width",paraId:7,tocIndex:9},{value:"--select-item-height",paraId:7,tocIndex:9},{value:"Horizontal option height",paraId:7,tocIndex:9},{value:"36px",paraId:7,tocIndex:9},{value:"--bui-city-selector-item-height",paraId:7,tocIndex:9},{value:"--select-item-border-radius",paraId:7,tocIndex:9},{value:"Horizontal options with rounded corners",paraId:7,tocIndex:9},{value:"20px",paraId:7,tocIndex:9},{value:"--bui-city-selector-item-border-radius",paraId:7,tocIndex:9},{value:"--select-item-margin",paraId:7,tocIndex:9},{value:"Horizontal option margin",paraId:7,tocIndex:9},{value:"4.5px 0 4.5px 9px",paraId:7,tocIndex:9},{value:"--bui-city-selector-item-margin",paraId:7,tocIndex:9},{value:"--title-height",paraId:7,tocIndex:9},{value:"Title height",paraId:7,tocIndex:9},{value:"45px",paraId:7,tocIndex:9},{value:"--bui-city-selector-title-height",paraId:7,tocIndex:9},{value:"--title-line-height",paraId:7,tocIndex:9},{value:"Title line height",paraId:7,tocIndex:9},{value:"45px",paraId:7,tocIndex:9},{value:"--bui-city-selector-title-line-height",paraId:7,tocIndex:9},{value:"--btn-close-size",paraId:7,tocIndex:9},{value:"Close button container width and height",paraId:7,tocIndex:9},{value:"45px",paraId:7,tocIndex:9},{value:"--bui-city-selector-btn-close-size",paraId:7,tocIndex:9},{value:"--btn-close-font-size",paraId:7,tocIndex:9},{value:"Close button font size",paraId:7,tocIndex:9},{value:"20px",paraId:7,tocIndex:9},{value:"--bui-city-selector-btn-close-font-size",paraId:7,tocIndex:9},{value:"--container-with-title-height",paraId:7,tocIndex:9},{value:"City container height with title",paraId:7,tocIndex:9},{value:"calc(100% - --title-height)",paraId:7,tocIndex:9},{value:"--bui-city-selector-container-with-title-height",paraId:7,tocIndex:9},{value:"--city-container-min-height",paraId:7,tocIndex:9},{value:"Minimum height of urban container",paraId:7,tocIndex:9},{value:"500px",paraId:7,tocIndex:9},{value:"--bui-city-selector-city-container-min-height",paraId:7,tocIndex:9},{value:"--select-city-buttons-padding",paraId:7,tocIndex:9},{value:"Horizontal button container inner margin",paraId:7,tocIndex:9},{value:"7.5px 0 0 3px",paraId:7,tocIndex:9},{value:"--bui-city-selector-select-city-buttons-padding",paraId:7,tocIndex:9},{value:"--select-city-title-line-height",paraId:7,tocIndex:9},{value:"City index title bar row height",paraId:7,tocIndex:9},{value:"15px",paraId:7,tocIndex:9},{value:"--bui-city-selector-select-city-title-line-height",paraId:7,tocIndex:9},{value:"--list-item-height",paraId:7,tocIndex:9},{value:"City item height",paraId:7,tocIndex:9},{value:"45px",paraId:7,tocIndex:9},{value:"--bui-city-selector-list-item-height",paraId:7,tocIndex:9},{value:"--city-index-has-title-top",paraId:7,tocIndex:9},{value:"Distance from the top of the city index container",paraId:7,tocIndex:9},{value:"calc(50% + --title-height / 2)",paraId:7,tocIndex:9},{value:"--bui-city-selector-city-index-has-title-top",paraId:7,tocIndex:9},{value:"--index-item-height",paraId:7,tocIndex:9},{value:"City index item height",paraId:7,tocIndex:9},{value:"20px",paraId:7,tocIndex:9},{value:"--bui-city-selector-index-item-height",paraId:7,tocIndex:9}]},15888:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"Basic folding animation encapsulated with Transition, unfolded from the starting edge of the element",paraId:0,tocIndex:0},{value:"The Collapse component supports two folding directions, which are passed in through the 'direction' parameter. If horizontal folding is required, the 'horizontal' value is used, and if vertical folding is required, the 'vertical' value is used. The default value is' vertical '",paraId:1,tocIndex:2},{value:"The folding direction starts from the left side of the element and unfolds",paraId:2,tocIndex:3},{value:"The folding direction starts from the top of the element and unfolds",paraId:3,tocIndex:4},{value:"The collapsedSize property can be used to set the minimum width/height when not unfolded",paraId:4,tocIndex:5},{value:"Collapse inherits from Transition, other properties can be found in Transition (/ores/transition)",paraId:5,tocIndex:6},{value:"attribute",paraId:6,tocIndex:7},{value:"explain",paraId:6,tocIndex:7},{value:"type",paraId:6,tocIndex:7},{value:"Default value",paraId:6,tocIndex:7},{value:"in",paraId:6,tocIndex:7},{value:"Do you want to enter",paraId:6,tocIndex:7},{value:"boolean",paraId:6,tocIndex:7},{value:"false",paraId:6,tocIndex:7},{value:"appear",paraId:6,tocIndex:7},{value:"Whether to play animation during mounting",paraId:6,tocIndex:7},{value:"boolean",paraId:6,tocIndex:7},{value:"false",paraId:6,tocIndex:7},{value:"timeout",paraId:6,tocIndex:7},{value:"Animation time configuration",paraId:6,tocIndex:7},{value:"number |{appear, enter, exit}",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"delay",paraId:6,tocIndex:7},{value:"Animation Delay Configuration",paraId:6,tocIndex:7},{value:"number |{appear, enter, exit}",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"enter",paraId:6,tocIndex:7},{value:"Do you want to play the animation",paraId:6,tocIndex:7},{value:"boolean",paraId:6,tocIndex:7},{value:"true",paraId:6,tocIndex:7},{value:"exit",paraId:6,tocIndex:7},{value:"Do you want to play the exit animation",paraId:6,tocIndex:7},{value:"boolean",paraId:6,tocIndex:7},{value:"true",paraId:6,tocIndex:7},{value:"mountOnEnter",paraId:6,tocIndex:7},{value:"Mount children on first entry",paraId:6,tocIndex:7},{value:"boolean",paraId:6,tocIndex:7},{value:"false",paraId:6,tocIndex:7},{value:"unmountOnExit",paraId:6,tocIndex:7},{value:"Uninstall children upon exit",paraId:6,tocIndex:7},{value:"boolean",paraId:6,tocIndex:7},{value:"false",paraId:6,tocIndex:7},{value:"direction",paraId:6,tocIndex:7},{value:"Folding direction",paraId:6,tocIndex:7},{value:"horizontal |vertical",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"collapsedSize",paraId:6,tocIndex:7},{value:"Folding size",paraId:6,tocIndex:7},{value:"string |number",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"onEnter",paraId:6,tocIndex:7},{value:"The callback before entering the beginning",paraId:6,tocIndex:7},{value:"node=>void",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"onEntering",paraId:6,tocIndex:7},{value:"The callback after entering the beginning",paraId:6,tocIndex:7},{value:"node=>void",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"onEntered",paraId:6,tocIndex:7},{value:"Enter the completed callback",paraId:6,tocIndex:7},{value:"node=>void",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"onExit",paraId:6,tocIndex:7},{value:"Callback before exit starts",paraId:6,tocIndex:7},{value:"node=>void",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"onExiting",paraId:6,tocIndex:7},{value:"Callback after exit starts",paraId:6,tocIndex:7},{value:"node=>void",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"onExited",paraId:6,tocIndex:7},{value:"Exit completed callback",paraId:6,tocIndex:7},{value:"node=>void",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"easing",paraId:6,tocIndex:7},{value:"Transition limiting function",paraId:6,tocIndex:7},{value:"string |{enter, exit}",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7}]},42157:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"The content area that can be folded/unfolded.",paraId:0,tocIndex:0},{value:"Multiple panels can be expanded simultaneously, and this example defaults to expanding the first one.",paraId:1,tocIndex:2},{value:"Use CollapseItem instead of Items for rendering",paraId:2,tocIndex:3},{value:"In accordion mode, only one panel is always active.",paraId:3,tocIndex:4},{value:"By setting ActiveKeys, you can manually specify the currently unfolded panel, which needs to be combined with oChange to achieve controlled unfolding and folding effects.",paraId:4,tocIndex:5},{value:"By setting ActiveKeys, the currently unfolded panel can be manually specified, and accordion mode can be enabled by setting accordion",paraId:5,tocIndex:6},{value:"By setting a custom icon through arrowIcon, if it is a ReactNode, it will automatically add a rotation animation effect for you.",paraId:6,tocIndex:7},{value:"ArrowIcon can pass in a function with the parameter being whether it is activated, and return the specific icon based on the input status.",paraId:7,tocIndex:8},{value:"attribute",paraId:8,tocIndex:10},{value:"explain",paraId:8,tocIndex:10},{value:"type",paraId:8,tocIndex:10},{value:"Default value",paraId:8,tocIndex:10},{value:"accordion",paraId:8,tocIndex:10},{value:"Do you want to activate accordion mode",paraId:8,tocIndex:10},{value:"boolean",paraId:8,tocIndex:10},{value:"false",paraId:8,tocIndex:10},{value:"activeKeys",paraId:8,tocIndex:10},{value:"The key of the current activation panel",paraId:8,tocIndex:10},{value:"string[]",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"defaultActiveKeys",paraId:8,tocIndex:10},{value:"Default key for expanding the panel",paraId:8,tocIndex:10},{value:"string[]",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"items",paraId:8,tocIndex:10},{value:"Folding project content",paraId:8,tocIndex:10},{value:"CollapsePanelItemProps[]",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"children",paraId:8,tocIndex:10},{value:"Body area content, rendered using CollapseItem",paraId:8,tocIndex:10},{value:"React.ReactNode",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"arrowIcon",paraId:8,tocIndex:10},{value:"Customize arrow icon",paraId:8,tocIndex:10},{value:"React.ReactNode |((active: boolean) => React.ReactNode)",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"onChange",paraId:8,tocIndex:10},{value:"Triggered when switching panels",paraId:8,tocIndex:10},{value:"(activeKeys: string[]) => void",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"attribute",paraId:9,tocIndex:11},{value:"explain",paraId:9,tocIndex:11},{value:"type",paraId:9,tocIndex:11},{value:"Default value",paraId:9,tocIndex:11},{value:"key",paraId:9,tocIndex:11},{value:"Unique identifier, corresponding to ActiveKey",paraId:9,tocIndex:11},{value:"string",paraId:9,tocIndex:11},{value:"-",paraId:9,tocIndex:11},{value:"label",paraId:9,tocIndex:11},{value:"Panel Title",paraId:9,tocIndex:11},{value:"React.ReactNode",paraId:9,tocIndex:11},{value:"-",paraId:9,tocIndex:11},{value:"icon",paraId:9,tocIndex:11},{value:"Custom icon, overwrite arrowIcon",paraId:9,tocIndex:11},{value:"React.ReactNode |((active: boolean) => React.ReactNode)",paraId:9,tocIndex:11},{value:"-",paraId:9,tocIndex:11},{value:"children",paraId:9,tocIndex:11},{value:"Body area content",paraId:9,tocIndex:11},{value:"React.ReactNode",paraId:9,tocIndex:11},{value:"-",paraId:9,tocIndex:11},{value:"attribute",paraId:10,tocIndex:12},{value:"explain",paraId:10,tocIndex:12},{value:"Default value",paraId:10,tocIndex:12},{value:"global variable",paraId:10,tocIndex:12},{value:"--width",paraId:10,tocIndex:12},{value:"width",paraId:10,tocIndex:12},{value:"100%",paraId:10,tocIndex:12},{value:"--bui-collapse-panel-width",paraId:10,tocIndex:12},{value:"--header-padding",paraId:10,tocIndex:12},{value:"Inner margin of panel head",paraId:10,tocIndex:12},{value:"var(--bui-spacing-lg) 0",paraId:10,tocIndex:12},{value:"--bui-collapse-panel-header-padding",paraId:10,tocIndex:12},{value:"--content-padding",paraId:10,tocIndex:12},{value:"Panel theme margin",paraId:10,tocIndex:12},{value:"var(--bui-spacing-lg) 0",paraId:10,tocIndex:12},{value:"--bui-collapse-panel-content-padding",paraId:10,tocIndex:12}]},59687:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"Used for real-time display of countdown values.",paraId:0,tocIndex:0},{value:"Control the remaining duration of the countdown through 'remaningTime' and choose one from the 'endTimestamp' field.",paraId:1,tocIndex:2},{value:"Specify the countdown end time point through 'endTimestamp', choose one from the 'remaningTime' field, and prioritize it over the 'remaningTime' field.",paraId:2,tocIndex:3},{value:"By setting the server timestamp through 'serverless timestamp', it can be used in conjunction with 'endtimestamp'. This property can be used to prevent situations where local time is modified and countdown errors occur.",paraId:3,tocIndex:4},{value:"The countdown can be formatted using 'format', with the default value being 'HH: mm: ss'.",paraId:4,tocIndex:5},{value:"The countdown unit style can be set through 'unitStyle'.",paraId:5,tocIndex:6},{value:"The style of the first and second digits of the countdown can be customized through 'valueStyle'.",paraId:6,tocIndex:7},{value:"You can customize the style of each countdown time slot through 'timeSliceStyle'.",paraId:7,tocIndex:8},{value:"When the countdown ends, the 'onFinnish' event will be triggered.",paraId:8,tocIndex:9},{value:"When the countdown changes, the 'onChange' event will be triggered.",paraId:9,tocIndex:10},{value:"You can customize the content of the countdown component by using renderContent .",paraId:10,tocIndex:11},{value:"attribute",paraId:11,tocIndex:13},{value:"explain",paraId:11,tocIndex:13},{value:"type",paraId:11,tocIndex:13},{value:"Default value",paraId:11,tocIndex:13},{value:"remainingTime",paraId:11,tocIndex:13},{value:"The remaining countdown time is a time period (in milliseconds) that is mutually exclusive with endTimestamp",paraId:11,tocIndex:13},{value:"number",paraId:11,tocIndex:13},{value:"0",paraId:11,tocIndex:13},{value:"endTimestamp",paraId:11,tocIndex:13},{value:"The countdown end timestamp is a time point that is mutually exclusive with remaningTime and has a higher priority than remaningTime",paraId:11,tocIndex:13},{value:"number",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"serverTimestamp",paraId:11,tocIndex:13},{value:"Server timestamp is a time point that can be used in conjunction with endTimestamp",paraId:11,tocIndex:13},{value:"number",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"format",paraId:11,tocIndex:13},{value:"Format countdown display, refer to dayjs",paraId:11,tocIndex:13},{value:"string",paraId:11,tocIndex:13},{value:"HH:mm:ss",paraId:11,tocIndex:13},{value:"unitStyle",paraId:11,tocIndex:13},{value:"Style of time unit",paraId:11,tocIndex:13},{value:"CSSProperties",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"valueStyle",paraId:11,tocIndex:13},{value:"The style of the countdown digits is used to customize the style of the first and second digits",paraId:11,tocIndex:13},{value:"CSSProperties[]",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"timeSliceStyle",paraId:11,tocIndex:13},{value:"The style of each time block is used to customize the style of each time block. If the style of the first and second digits is the same, it can replace valueStyle",paraId:11,tocIndex:13},{value:"CSSProperties",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"onFinish",paraId:11,tocIndex:13},{value:"Triggered when the countdown is completed",paraId:11,tocIndex:13},{value:"() => void",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"onChange",paraId:11,tocIndex:13},{value:"Triggered when the countdown time changes",paraId:11,tocIndex:13},{value:"(data: { value: CurrentTime }) => void;",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"renderContent",paraId:11,tocIndex:13},{value:"Customize rendering content",paraId:11,tocIndex:13},{value:"(data: CurrentTime) => React.ReactNode;",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"attribute",paraId:12,tocIndex:14},{value:"explain",paraId:12,tocIndex:14},{value:"type",paraId:12,tocIndex:14},{value:"Default value",paraId:12,tocIndex:14},{value:"total",paraId:12,tocIndex:14},{value:"Remaining total time, in milliseconds",paraId:12,tocIndex:14},{value:"number",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"years",paraId:12,tocIndex:14},{value:"Remaining years",paraId:12,tocIndex:14},{value:"string",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"months",paraId:12,tocIndex:14},{value:"Remaining months",paraId:12,tocIndex:14},{value:"string",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"days",paraId:12,tocIndex:14},{value:"Days Remaining",paraId:12,tocIndex:14},{value:"string",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"hours",paraId:12,tocIndex:14},{value:"Remaining hours",paraId:12,tocIndex:14},{value:"string",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"minutes",paraId:12,tocIndex:14},{value:"Remaining minutes",paraId:12,tocIndex:14},{value:"string",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"seconds",paraId:12,tocIndex:14},{value:"Remaining seconds",paraId:12,tocIndex:14},{value:"string",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"hoursWithDays",paraId:12,tocIndex:14},{value:"Remaining integer days, remaining hours",paraId:12,tocIndex:14},{value:"string",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"attribute",paraId:13,tocIndex:15},{value:"explain",paraId:13,tocIndex:15},{value:"Default value",paraId:13,tocIndex:15},{value:"global variable",paraId:13,tocIndex:15},{value:"--font-size",paraId:13,tocIndex:15},{value:"Copy font size",paraId:13,tocIndex:15},{value:"--bui-text-size-1",paraId:13,tocIndex:15},{value:"--bui-countdown-font-size",paraId:13,tocIndex:15},{value:"--color",paraId:13,tocIndex:15},{value:"Text font color",paraId:13,tocIndex:15},{value:"--bui-color-fg-default",paraId:13,tocIndex:15},{value:"--bui-countdown-color",paraId:13,tocIndex:15},{value:"--font-weight",paraId:13,tocIndex:15},{value:"Copy font weight",paraId:13,tocIndex:15},{value:"--bui-font-weight-normal",paraId:13,tocIndex:15},{value:"--bui-countdown-font-weight",paraId:13,tocIndex:15},{value:"--slice-unit-margin",paraId:13,tocIndex:15},{value:"Delimiter spacing",paraId:13,tocIndex:15},{value:"0 2px",paraId:13,tocIndex:15},{value:"--bui-countdown-slice-unit-margin",paraId:13,tocIndex:15}]},79083:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:`Used for informing or providing feedback on important information, supporting 'Dialogue', 'Dialogue. confirm', and 'Dialogue. prompt'.
Recommend Hooks calling method. Static methods cannot obtain context, and ThemeProvider data will not take effect. Therefore, it is recommended to create a contextHolder that supports reading context using Dialog.useDialogue , and replace Dialogue static methods with top-level registration methods.`,paraId:0,tocIndex:0},{value:"Use 'Dialogue' (default type is confirm) or 'Dialogue. confirm' to display the confirmation box Dialogue. confirm returns a Promise, which allows you to determine whether the user has clicked to confirm or cancel",paraId:1,tocIndex:3},{value:"Use 'onConfirm' to define a callback when clicking confirm.",paraId:2,tocIndex:5},{value:"You can use 'header' and 'message' to customize the title and content area separately. You can also use 'confirmText' and 'cancelText' to customize the content of the cancel and confirm buttons.",paraId:3,tocIndex:6},{value:"Use 'dialog. prompt' to display prompt dialog boxes. You can use 'placeholder' to customize placeholder text. Simultaneously supporting transparent transmission of 'InputProps' to internal' Input 'components, refer to [Input] (/cores/input # API).",paraId:4,tocIndex:7},{value:"attribute",paraId:5,tocIndex:9},{value:"explain",paraId:5,tocIndex:9},{value:"type",paraId:5,tocIndex:9},{value:"Default value",paraId:5,tocIndex:9},{value:"header",paraId:5,tocIndex:9},{value:"custom header",paraId:5,tocIndex:9},{value:"React.ReactNode",paraId:5,tocIndex:9},{value:"-",paraId:5,tocIndex:9},{value:"message",paraId:5,tocIndex:9},{value:"Custom message",paraId:5,tocIndex:9},{value:"React.ReactNode",paraId:5,tocIndex:9},{value:"-",paraId:5,tocIndex:9},{value:"confirmText",paraId:5,tocIndex:9},{value:"Confirm button copy",paraId:5,tocIndex:9},{value:"React.ReactNode",paraId:5,tocIndex:9},{value:"confirm",paraId:5,tocIndex:9},{value:"cancelText",paraId:5,tocIndex:9},{value:"Cancel button text",paraId:5,tocIndex:9},{value:"React.ReactNode",paraId:5,tocIndex:9},{value:"cancel",paraId:5,tocIndex:9},{value:"onConfirm",paraId:5,tocIndex:9},{value:"Confirm button callback",paraId:5,tocIndex:9},{value:"(val?: string) => void |Promise<void>;",paraId:5,tocIndex:9},{value:"-",paraId:5,tocIndex:9},{value:"onCancel",paraId:5,tocIndex:9},{value:"Cancel button callback",paraId:5,tocIndex:9},{value:"() =>void |Promise<void>",paraId:5,tocIndex:9},{value:"-",paraId:5,tocIndex:9},{value:"The value of ConfirmOptions is the same as that of DialogOptions",paraId:6,tocIndex:9},{value:"DialogOptions' inherits from 'Modal Props', other properties can be found in [Modal API] (/cores/modal? # API)",paraId:7,tocIndex:9},{value:"Dialogue. prompt 'accepts the same parameters as' Dialogue. confirm', and additionally supports the following properties:",paraId:8,tocIndex:10},{value:"attribute",paraId:9,tocIndex:10},{value:"explain",paraId:9,tocIndex:10},{value:"type",paraId:9,tocIndex:10},{value:"Default value",paraId:9,tocIndex:10},{value:"placeholder",paraId:9,tocIndex:10},{value:"Input box placeholder text",paraId:9,tocIndex:10},{value:"string",paraId:9,tocIndex:10},{value:"Please enter here",paraId:9,tocIndex:10},{value:"InputProps",paraId:9,tocIndex:10},{value:"Spread it internally ",paraId:9,tocIndex:10},{value:"Input",paraId:9,tocIndex:10},{value:" Component properties",paraId:9,tocIndex:10},{value:"Partial<InputProps>",paraId:9,tocIndex:10},{value:"-",paraId:9,tocIndex:10},{value:"Method Name",paraId:10,tocIndex:11},{value:"explain",paraId:10,tocIndex:11},{value:"parameter",paraId:10,tocIndex:11},{value:"Return value",paraId:10,tocIndex:11},{value:"Dialog",paraId:10,tocIndex:11},{value:"Display confirmation box",paraId:10,tocIndex:11},{value:"DialogOptions |string",paraId:10,tocIndex:11},{value:"DialogPromise",paraId:10,tocIndex:11},{value:"Dialog.confirm",paraId:10,tocIndex:11},{value:"Display confirmation box",paraId:10,tocIndex:11},{value:"ConfirmOptions |string",paraId:10,tocIndex:11},{value:"DialogPromise",paraId:10,tocIndex:11},{value:"Dialog.prompt",paraId:10,tocIndex:11},{value:"Display prompt dialog box",paraId:10,tocIndex:11},{value:"PromptOptions |string",paraId:10,tocIndex:11},{value:"DialogPromise",paraId:10,tocIndex:11},{value:"attribute",paraId:11,tocIndex:12},{value:"explain",paraId:11,tocIndex:12},{value:"Default value",paraId:11,tocIndex:12},{value:"global variable",paraId:11,tocIndex:12},{value:"--max-width",paraId:11,tocIndex:12},{value:"Maximum width of dialog box",paraId:11,tocIndex:12},{value:"300px",paraId:11,tocIndex:12},{value:"--bui-dialog-max-width",paraId:11,tocIndex:12},{value:"--border-radius",paraId:11,tocIndex:12},{value:"Round corner of dialog box",paraId:11,tocIndex:12},{value:"--bui-shape-radius-drawer",paraId:11,tocIndex:12},{value:"--bui-dialog-border-radius",paraId:11,tocIndex:12},{value:"--title-padding",paraId:11,tocIndex:12},{value:"Title bar margin",paraId:11,tocIndex:12},{value:"0 40px 9px",paraId:11,tocIndex:12},{value:"--bui-dialog-title-padding",paraId:11,tocIndex:12},{value:"--desc-padding",paraId:11,tocIndex:12},{value:"Describe the inner margin of the copy",paraId:11,tocIndex:12},{value:"0 24px",paraId:11,tocIndex:12},{value:"--bui-dialog-desc-padding",paraId:11,tocIndex:12},{value:"--footer-margin-top",paraId:11,tocIndex:12},{value:"Bottom margin",paraId:11,tocIndex:12},{value:"15px",paraId:11,tocIndex:12},{value:"--bui-dialog-footer-margin-top",paraId:11,tocIndex:12},{value:"--button-height",paraId:11,tocIndex:12},{value:"Button height",paraId:11,tocIndex:12},{value:"53px",paraId:11,tocIndex:12},{value:"--bui-dialog-button-height",paraId:11,tocIndex:12},{value:"--button-line-height",paraId:11,tocIndex:12},{value:"Button row height",paraId:11,tocIndex:12},{value:"25px",paraId:11,tocIndex:12},{value:"--bui-dialog-button-line-height",paraId:11,tocIndex:12},{value:"--button-padding",paraId:11,tocIndex:12},{value:"Button inner margin",paraId:11,tocIndex:12},{value:"12px 0 13px",paraId:11,tocIndex:12},{value:"--bui-dialog-button-padding",paraId:11,tocIndex:12},{value:"--button-font-size",paraId:11,tocIndex:12},{value:"Button font size",paraId:11,tocIndex:12},{value:"17px",paraId:11,tocIndex:12},{value:"--bui-dialog-button-font-size",paraId:11,tocIndex:12},{value:"--button-border-left",paraId:11,tocIndex:12},{value:"Left border of button",paraId:11,tocIndex:12},{value:"1px solid rgba(0, 0, 0, 0.05)",paraId:11,tocIndex:12},{value:"--bui-dialog-button-border-left",paraId:11,tocIndex:12},{value:"--button-active-background-color",paraId:11,tocIndex:12},{value:"Background color of button activation status",paraId:11,tocIndex:12},{value:"rgba(54, 57, 64, 0.05)",paraId:11,tocIndex:12},{value:"--bui-dialog-button-active-background-color",paraId:11,tocIndex:12}]},985:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"Splitting lines are commonly used to group the content of components in a list or layout.",paraId:0,tocIndex:0},{value:"The default dividing line is a thin line.",paraId:1,tocIndex:2},{value:"You can also control whether the dividing line is a dashed or solid line through the 'dashed' attribute.",paraId:2,tocIndex:3},{value:`The default dividing line is vertical, but we also provide horizontal dividing lines.
You can also control the direction of the dividing line through the 'direction' attribute.`,paraId:3,tocIndex:4},{value:"The default dividing line supports the width/height of the parent element, and you can also customize the dividing line size through 'size'.",paraId:4,tocIndex:7},{value:`You can also render split lines with content. Transmitting copy through 'children'.
Currently, it is only supported when 'direction' is' horizontal '.`,paraId:5,tocIndex:10},{value:"For other special styles, you can customize them yourself through 'style', such as customizing the thickness of the dividing line.",paraId:6,tocIndex:11},{value:"attribute",paraId:7,tocIndex:13},{value:"explain",paraId:7,tocIndex:13},{value:"type",paraId:7,tocIndex:13},{value:"Default value",paraId:7,tocIndex:13},{value:"direction",paraId:7,tocIndex:13},{value:"Direction of dividing line",paraId:7,tocIndex:13},{value:"horizontal",paraId:7,tocIndex:13},{value:" \uFF5C ",paraId:7,tocIndex:13},{value:"vertical",paraId:7,tocIndex:13},{value:"vertical",paraId:7,tocIndex:13},{value:"size",paraId:7,tocIndex:13},{value:"Size of dividing line",paraId:7,tocIndex:13},{value:"string",paraId:7,tocIndex:13},{value:"-",paraId:7,tocIndex:13},{value:"dashed",paraId:7,tocIndex:13},{value:"Is it a dashed line",paraId:7,tocIndex:13},{value:"boolean",paraId:7,tocIndex:13},{value:"false",paraId:7,tocIndex:13},{value:"attribute",paraId:8,tocIndex:14},{value:"explain",paraId:8,tocIndex:14},{value:"Default value",paraId:8,tocIndex:14},{value:"global variable",paraId:8,tocIndex:14},{value:"--height",paraId:8,tocIndex:14},{value:"Height of dividing line",paraId:8,tocIndex:14},{value:"100%",paraId:8,tocIndex:14},{value:"--bui-divider-height",paraId:8,tocIndex:14},{value:"--width",paraId:8,tocIndex:14},{value:"Width of dividing line",paraId:8,tocIndex:14},{value:"100%",paraId:8,tocIndex:14},{value:"--bui-divider-width",paraId:8,tocIndex:14},{value:"--border-width",paraId:8,tocIndex:14},{value:"The thickness of the dividing line (all forms of dividing lines are controlled by this)",paraId:8,tocIndex:14},{value:"1px",paraId:8,tocIndex:14},{value:"--bui-divider-border-width",paraId:8,tocIndex:14},{value:"--line-width",paraId:8,tocIndex:14},{value:"The length of the dividing line that can be inserted into the text",paraId:8,tocIndex:14},{value:"40px",paraId:8,tocIndex:14},{value:"--bui-divider-line-width",paraId:8,tocIndex:14}]},68566:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"A floating panel that slides out from the edge of the screen.",paraId:0,tocIndex:0},{value:"Control whether the drawer is displayed through 'open' and 'onClose'",paraId:1,tocIndex:2},{value:"By default, it appears from the bottom and supports controlling the appearance direction through setting 'anchor'. It appears from the bottom by default",paraId:2,tocIndex:3},{value:"By default, Drawer is rendered to the root node of the page, H5 is' document. body ', and the mini program is the' page node '.",paraId:3,tocIndex:5},{value:"attribute",paraId:4,tocIndex:6},{value:"explain",paraId:4,tocIndex:6},{value:"type",paraId:4,tocIndex:6},{value:"Default value",paraId:4,tocIndex:6},{value:"anchor",paraId:4,tocIndex:6},{value:"The position where the Drawer appears",paraId:4,tocIndex:6},{value:"left",paraId:4,tocIndex:6},{value:" |",paraId:4,tocIndex:6},{value:"top",paraId:4,tocIndex:6},{value:" |",paraId:4,tocIndex:6},{value:"right",paraId:4,tocIndex:6},{value:" |",paraId:4,tocIndex:6},{value:"bottom",paraId:4,tocIndex:6},{value:"text",paraId:4,tocIndex:6},{value:"open",paraId:4,tocIndex:6},{value:"Is it displayed",paraId:4,tocIndex:6},{value:"boolean",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"hideBackdrop",paraId:4,tocIndex:6},{value:"Do you want to hide the mask layer",paraId:4,tocIndex:6},{value:"boolean",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"container",paraId:4,tocIndex:6},{value:"Element nodes mounted on drawers",paraId:4,tocIndex:6},{value:"ModalProps['container']",paraId:4,tocIndex:6},{value:"Pages and Nodes",paraId:4,tocIndex:6},{value:"SlideProps",paraId:4,tocIndex:6},{value:"Props for Slide Animation",paraId:4,tocIndex:6},{value:"Partial<SlideProps>",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"transitionDuration",paraId:4,tocIndex:6},{value:"Animation execution time",paraId:4,tocIndex:6},{value:"number |{ appear?: number, enter?: number, exit?: number }",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"onClose",paraId:4,tocIndex:6},{value:"Close drawer callback",paraId:4,tocIndex:6},{value:"ModalProps['onClose']",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"disablePortal",paraId:4,tocIndex:6},{value:"Prohibit Portal Capability",paraId:4,tocIndex:6},{value:"boolean",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"contentProps",paraId:4,tocIndex:6},{value:"Props of drawer content element nodes",paraId:4,tocIndex:6},{value:"React.HTMLAttributes<HTMLDivElement>",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"Drawer inherits from Modal. Other properties can be found in the Modal API (/cores/modal? # API)",paraId:5,tocIndex:6}]},86389:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"Basic fade in/fade out animation using Transition encapsulation",paraId:0,tocIndex:0},{value:`When both 'append' and 'in' are 'true'
The component will immediately play an animation when mounted`,paraId:1,tocIndex:3},{value:`Use 'MountOnEnter' to mount components only on the first in time
Use 'remountOnExit' to uninstall components every time you exit`,paraId:2,tocIndex:4},{value:"Fade inherits from Transition. Other properties can be found in Transition (/ores/transition)",paraId:3,tocIndex:5},{value:"attribute",paraId:4,tocIndex:6},{value:"explain",paraId:4,tocIndex:6},{value:"type",paraId:4,tocIndex:6},{value:"Default value",paraId:4,tocIndex:6},{value:"in",paraId:4,tocIndex:6},{value:"Do you want to enter",paraId:4,tocIndex:6},{value:"boolean",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"appear",paraId:4,tocIndex:6},{value:"Whether to play animation during mounting",paraId:4,tocIndex:6},{value:"boolean",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"timeout",paraId:4,tocIndex:6},{value:"Animation time configuration",paraId:4,tocIndex:6},{value:"number |{appear, enter, exit}",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"delay",paraId:4,tocIndex:6},{value:"Animation Delay Configuration",paraId:4,tocIndex:6},{value:"number |{appear, enter, exit}",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"enter",paraId:4,tocIndex:6},{value:"Do you want to play the animation",paraId:4,tocIndex:6},{value:"boolean",paraId:4,tocIndex:6},{value:"true",paraId:4,tocIndex:6},{value:"exit",paraId:4,tocIndex:6},{value:"Do you want to play the exit animation",paraId:4,tocIndex:6},{value:"boolean",paraId:4,tocIndex:6},{value:"true",paraId:4,tocIndex:6},{value:"mountOnEnter",paraId:4,tocIndex:6},{value:"Mount children on first entry",paraId:4,tocIndex:6},{value:"boolean",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"unmountOnExit",paraId:4,tocIndex:6},{value:"Uninstall children upon exit",paraId:4,tocIndex:6},{value:"boolean",paraId:4,tocIndex:6},{value:"false",paraId:4,tocIndex:6},{value:"onEnter",paraId:4,tocIndex:6},{value:"The callback before entering the beginning",paraId:4,tocIndex:6},{value:"node=>void",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"onEntering",paraId:4,tocIndex:6},{value:"The callback after entering the beginning",paraId:4,tocIndex:6},{value:"node=>void",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"onEntered",paraId:4,tocIndex:6},{value:"Enter the completed callback",paraId:4,tocIndex:6},{value:"node=>void",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"onExit",paraId:4,tocIndex:6},{value:"Callback before exit starts",paraId:4,tocIndex:6},{value:"node=>void",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"onExiting",paraId:4,tocIndex:6},{value:"Callback after exit starts",paraId:4,tocIndex:6},{value:"node=>void",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"onExited",paraId:4,tocIndex:6},{value:"Exit completed callback",paraId:4,tocIndex:6},{value:"node=>void",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6},{value:"easing",paraId:4,tocIndex:6},{value:"Transition limiting function",paraId:4,tocIndex:6},{value:"string |{enter, exit}",paraId:4,tocIndex:6},{value:"-",paraId:4,tocIndex:6}]},91850:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"Icon button is a button that displays only one icon without displaying a text label. Mainly used for control bars and toolbars, they are also very useful when a compact button is needed",paraId:0,tocIndex:0},{value:"The button supports three display forms: default button, stroke button, and fill button",paraId:1,tocIndex:2},{value:"The button supports three shapes: circular, rounded, and square",paraId:2,tocIndex:3},{value:"The buttons come in three sizes: large, medium, and small.",paraId:3,tocIndex:4},{value:"Set the 'size' to 'large small' and set the buttons to 'large' and 'small' respectively. If 'size' is not set, the size will be medium.",paraId:4,tocIndex:4},{value:"The button supports defining themes such as' primary ',' success', 'info', 'warning', and 'danger'. If color is not set, it defaults to 'default'",paraId:5,tocIndex:5},{value:"Disable the button through the disabled attribute, and the button cannot be clicked in the disabled state.",paraId:6,tocIndex:6},{value:"attribute",paraId:7,tocIndex:7},{value:"explain",paraId:7,tocIndex:7},{value:"type",paraId:7,tocIndex:7},{value:"Default value",paraId:7,tocIndex:7},{value:"variant",paraId:7,tocIndex:7},{value:"Button type",paraId:7,tocIndex:7},{value:"default",paraId:7,tocIndex:7},{value:" |",paraId:7,tocIndex:7},{value:"text",paraId:7,tocIndex:7},{value:" |",paraId:7,tocIndex:7},{value:"contained",paraId:7,tocIndex:7},{value:"default",paraId:7,tocIndex:7},{value:"color",paraId:7,tocIndex:7},{value:"Button color",paraId:7,tocIndex:7},{value:"primary",paraId:7,tocIndex:7},{value:" |",paraId:7,tocIndex:7},{value:"info",paraId:7,tocIndex:7},{value:" |",paraId:7,tocIndex:7},{value:"success",paraId:7,tocIndex:7},{value:" |",paraId:7,tocIndex:7},{value:"warning",paraId:7,tocIndex:7},{value:" |",paraId:7,tocIndex:7},{value:"danger",paraId:7,tocIndex:7},{value:" |",paraId:7,tocIndex:7},{value:"default",paraId:7,tocIndex:7},{value:"default",paraId:7,tocIndex:7},{value:"size",paraId:7,tocIndex:7},{value:"Button size",paraId:7,tocIndex:7},{value:"small",paraId:7,tocIndex:7},{value:" |",paraId:7,tocIndex:7},{value:"medium",paraId:7,tocIndex:7},{value:" |",paraId:7,tocIndex:7},{value:"large",paraId:7,tocIndex:7},{value:"medium",paraId:7,tocIndex:7},{value:"disabled",paraId:7,tocIndex:7},{value:"Do you want to disable it",paraId:7,tocIndex:7},{value:"boolean",paraId:7,tocIndex:7},{value:"false",paraId:7,tocIndex:7},{value:"startIcon",paraId:7,tocIndex:7},{value:"The content placed before the child element",paraId:7,tocIndex:7},{value:"React.ReactNode",paraId:7,tocIndex:7},{value:"-",paraId:7,tocIndex:7},{value:"openType",paraId:7,tocIndex:7},{value:"WeChat Open Capability",paraId:7,tocIndex:7},{value:"string",paraId:7,tocIndex:7},{value:"-",paraId:7,tocIndex:7},{value:"onClick",paraId:7,tocIndex:7},{value:"Callback when clicking a button",paraId:7,tocIndex:7},{value:"(event: MouseEvent) => void",paraId:7,tocIndex:7},{value:"-",paraId:7,tocIndex:7},{value:"[UNK][UNK]\u5C5E[UNK]\u89C1 ",paraId:8,tocIndex:7},{value:"button",paraId:8,tocIndex:7},{value:"attribute",paraId:9,tocIndex:8},{value:"explain",paraId:9,tocIndex:8},{value:"Default value",paraId:9,tocIndex:8},{value:"global variable",paraId:9,tocIndex:8},{value:"--bg-color",paraId:9,tocIndex:8},{value:"Icon button background color",paraId:9,tocIndex:8},{value:"--bui-color-neutral-5",paraId:9,tocIndex:8},{value:"--bui-icon-btn-bg-color",paraId:9,tocIndex:8},{value:"--color",paraId:9,tocIndex:8},{value:"Icon color",paraId:9,tocIndex:8},{value:"--bui-color-fg-muted",paraId:9,tocIndex:8},{value:"--bui-icon-btn-color",paraId:9,tocIndex:8},{value:"--icon-size",paraId:9,tocIndex:8},{value:"Icon size",paraId:9,tocIndex:8},{value:"17px",paraId:9,tocIndex:8},{value:"--bui-icon-btn-font-size",paraId:9,tocIndex:8},{value:"--user-area",paraId:9,tocIndex:8},{value:"Click on the safe zone size button (default medium size)",paraId:9,tocIndex:8},{value:"5px",paraId:9,tocIndex:8},{value:"--bui-icon-btn-padding",paraId:9,tocIndex:8},{value:"--large-font-size",paraId:9,tocIndex:8},{value:"Large button font size",paraId:9,tocIndex:8},{value:"23px",paraId:9,tocIndex:8},{value:"--bui-icon-btn-large-font-size",paraId:9,tocIndex:8},{value:"--disabled-opacity",paraId:9,tocIndex:8},{value:"Disable transparency status",paraId:9,tocIndex:8},{value:"0.5",paraId:9,tocIndex:8},{value:"--bui-icon-btn-disabled-opacity",paraId:9,tocIndex:8}]},3004:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"On the basis of img tags, Placeholder and Fallback capabilities have been added, which are compatible with multi terminal native lazy loading and provide more comprehensive image components.",paraId:0,tocIndex:0},{value:`Customize fill mode through fit parameter
WidthFix and HighFix are only available in mini programs`,paraId:1,tocIndex:3},{value:`The properties directly passed to Image will appear on the top-level div
If you need to transfer it to img, you can use 'imgDrops'`,paraId:2,tocIndex:4},{value:`When the image fails to load, it will display a fallback
The default fallback is the same as the placeholder, and if neither is passed in, there is no fallback capability.
You can also pass in a fallback object separately for customization.`,paraId:3,tocIndex:5},{value:`When the image is still loading, the placeholder parameter will display the placeholder
Passing true will display a gray background, and custom placeholder elements can also be passed in`,paraId:4,tocIndex:6},{value:"attribute",paraId:5,tocIndex:7},{value:"explain",paraId:5,tocIndex:7},{value:"type",paraId:5,tocIndex:7},{value:"Default value",paraId:5,tocIndex:7},{value:"src",paraId:5,tocIndex:7},{value:"Image address",paraId:5,tocIndex:7},{value:"string",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"lazy",paraId:5,tocIndex:7},{value:"Using native lazy loading",paraId:5,tocIndex:7},{value:"boolean",paraId:5,tocIndex:7},{value:"false",paraId:5,tocIndex:7},{value:"alt",paraId:5,tocIndex:7},{value:"Alternative Text",paraId:5,tocIndex:7},{value:"string",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"fallback",paraId:5,tocIndex:7},{value:"Occupancy during loading failure",paraId:5,tocIndex:7},{value:"ReactNode",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"placeholder",paraId:5,tocIndex:7},{value:"Occupancy during loading",paraId:5,tocIndex:7},{value:"ReactNode |boolean",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"width",paraId:5,tocIndex:7},{value:"image width",paraId:5,tocIndex:7},{value:"string |number",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"height",paraId:5,tocIndex:7},{value:"Image height",paraId:5,tocIndex:7},{value:"string |number",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"fit",paraId:5,tocIndex:7},{value:"Width height adaptation method",paraId:5,tocIndex:7},{value:"contain",paraId:5,tocIndex:7},{value:"|",paraId:5,tocIndex:7},{value:"cover",paraId:5,tocIndex:7},{value:"|",paraId:5,tocIndex:7},{value:"fill",paraId:5,tocIndex:7},{value:"|",paraId:5,tocIndex:7},{value:"none",paraId:5,tocIndex:7},{value:"|",paraId:5,tocIndex:7},{value:"scale-down",paraId:5,tocIndex:7},{value:"|",paraId:5,tocIndex:7},{value:"widthFix",paraId:5,tocIndex:7},{value:"|",paraId:5,tocIndex:7},{value:"heightFix",paraId:5,tocIndex:7},{value:"fill",paraId:5,tocIndex:7},{value:"webp",paraId:5,tocIndex:7},{value:"Analyzing Webp",paraId:5,tocIndex:7},{value:"boolean",paraId:5,tocIndex:7},{value:"false",paraId:5,tocIndex:7},{value:"showMenu",paraId:5,tocIndex:7},{value:"(Mini Program) Long press menu configuration",paraId:5,tocIndex:7},{value:"boolean",paraId:5,tocIndex:7},{value:"false",paraId:5,tocIndex:7},{value:"imgProps",paraId:5,tocIndex:7},{value:"Parameters transmitted transparently to img",paraId:5,tocIndex:7},{value:"React.HTMLAttributes<HTMLImageElement>",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"attribute",paraId:6,tocIndex:8},{value:"explain",paraId:6,tocIndex:8},{value:"Default value",paraId:6,tocIndex:8},{value:"global variable",paraId:6,tocIndex:8},{value:"--default-background-color",paraId:6,tocIndex:8},{value:"Default placeholder background color",paraId:6,tocIndex:8},{value:"rgba(127, 127, 127, 0.2)",paraId:6,tocIndex:8},{value:"--bui-image-default-background-color",paraId:6,tocIndex:8}]},88261:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"User input content is the encapsulation of the basic input box.",paraId:0,tocIndex:0},{value:"Support the basic attribute transparency of the 'input' tag. If the attribute to be transparently passed is not in the document, it will only be passed to the internal 'input' tag by placing it in the 'inputProps' field.",paraId:1,tocIndex:2},{value:"You can customize the start icon through 'startIcon'.",paraId:2,tocIndex:3},{value:"You can customize the end icon through 'endIcon'.",paraId:3,tocIndex:4},{value:"After enabling 'clearable', a clear button will be displayed when there is input content in the input box and it is in focus state. Uncontrolled state will also clear the input box content.",paraId:4,tocIndex:5},{value:"Use 'disabled' to disable the input box.",paraId:5,tocIndex:6},{value:"Determine whether it is a controlled component based on whether 'value' is passed in. Uncontrolled components can control the value of 'input' by obtaining elements through 'inputRef'.",paraId:6,tocIndex:7},{value:"H5\uFF1A\u901A\u8FC7 type \u53EF\u6307\u5B9A\u8F93\u5165\u6846\u7C7B\u578B\uFF0Ctype \u7684\u503C\u5E94\u4E3A\u6807\u51C6 ",paraId:7,tocIndex:8},{value:"HTML5 input type",paraId:7,tocIndex:8},{value:"Mini program: The value of 'type' varies in different channels, please refer to [Mini program input type]\uFF08 ",paraId:8,tocIndex:8},{value:"https://developers.weixin.qq.com/miniprogram/dev/component/input.html",paraId:8,tocIndex:8},{value:" )",paraId:8,tocIndex:8},{value:"attribute",paraId:9,tocIndex:9},{value:"explain",paraId:9,tocIndex:9},{value:"type",paraId:9,tocIndex:9},{value:"Default value",paraId:9,tocIndex:9},{value:"defaultValue",paraId:9,tocIndex:9},{value:"The default content of the input box is used when the component is uncontrolled",paraId:9,tocIndex:9},{value:"string",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"value",paraId:9,tocIndex:9},{value:"Input box content, used when the component is controlled",paraId:9,tocIndex:9},{value:"string",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"inputProps",paraId:9,tocIndex:9},{value:"inside ",paraId:9,tocIndex:9},{value:"<input>",paraId:9,tocIndex:9},{value:" Standard attributes of tags",paraId:9,tocIndex:9},{value:"React.InputHTMLAttributes<HTMLInputElement>",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"inputRef",paraId:9,tocIndex:9},{value:"inside ",paraId:9,tocIndex:9},{value:"<input>",paraId:9,tocIndex:9},{value:" Label's ref",paraId:9,tocIndex:9},{value:"React.Ref<HTMLInputElement>",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"name",paraId:9,tocIndex:9},{value:"<input>",paraId:9,tocIndex:9},{value:" Name identification",paraId:9,tocIndex:9},{value:"string",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"type",paraId:9,tocIndex:9},{value:"<input>",paraId:9,tocIndex:9},{value:" The type identifier should be a valid HTML5 input type value or a type value supported by the mini program",paraId:9,tocIndex:9},{value:"string",paraId:9,tocIndex:9},{value:"text",paraId:9,tocIndex:9},{value:"clearable",paraId:9,tocIndex:9},{value:"Is the clear icon displayed? Clicking on the clear icon will clear the input box",paraId:9,tocIndex:9},{value:"boolean",paraId:9,tocIndex:9},{value:"false",paraId:9,tocIndex:9},{value:"startIcon",paraId:9,tocIndex:9},{value:"Input with icon, set front icon",paraId:9,tocIndex:9},{value:"ReactNode",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"endIcon",paraId:9,tocIndex:9},{value:"Input with icon, set the back icon. If clearable=true, both icons will be displayed",paraId:9,tocIndex:9},{value:"ReactNode",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"placeholder",paraId:9,tocIndex:9},{value:"Occupation Content",paraId:9,tocIndex:9},{value:"string",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"disabled",paraId:9,tocIndex:9},{value:"Do you want to disable it",paraId:9,tocIndex:9},{value:"boolean",paraId:9,tocIndex:9},{value:"false",paraId:9,tocIndex:9},{value:"onClear",paraId:9,tocIndex:9},{value:"Clicking on the clear icon callback will also clear the input box content in an uncontrolled state",paraId:9,tocIndex:9},{value:"(e: React.SyntheticEvent) => void",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"onChange",paraId:9,tocIndex:9},{value:"Callback when input box content changes",paraId:9,tocIndex:9},{value:"(e: React.ChangeEvent<HTMLInputElement>,data: {value:string}) => void",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"onFocus",paraId:9,tocIndex:9},{value:"Callback during focusing",paraId:9,tocIndex:9},{value:"(e: React.SyntheticEvent) => void",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"onBlur",paraId:9,tocIndex:9},{value:"Callback when out of focus",paraId:9,tocIndex:9},{value:"(e: React.SyntheticEvent) => void",paraId:9,tocIndex:9},{value:"-",paraId:9,tocIndex:9},{value:"attribute",paraId:10,tocIndex:10},{value:"explain",paraId:10,tocIndex:10},{value:"Default value",paraId:10,tocIndex:10},{value:"global variable",paraId:10,tocIndex:10},{value:"--height",paraId:10,tocIndex:10},{value:"height",paraId:10,tocIndex:10},{value:"32px",paraId:10,tocIndex:10},{value:"--bui-input-height",paraId:10,tocIndex:10},{value:"--padding",paraId:10,tocIndex:10},{value:"padding",paraId:10,tocIndex:10},{value:"4px 10px",paraId:10,tocIndex:10},{value:"--bui-input-padding",paraId:10,tocIndex:10},{value:"--border-radius",paraId:10,tocIndex:10},{value:"fillet",paraId:10,tocIndex:10},{value:"--bui-shape-radius-default",paraId:10,tocIndex:10},{value:"--bui-input-border-radius",paraId:10,tocIndex:10},{value:"--icon-start-margin-right",paraId:10,tocIndex:10},{value:"Right margin of the head button",paraId:10,tocIndex:10},{value:"3px",paraId:10,tocIndex:10},{value:"--bui-input-icon-start-margin-right",paraId:10,tocIndex:10},{value:"--icon-end-margin-left",paraId:10,tocIndex:10},{value:"Left margin of the tail button",paraId:10,tocIndex:10},{value:"3px",paraId:10,tocIndex:10},{value:"--bui-input-icon-end-margin-left",paraId:10,tocIndex:10},{value:"--background-color",paraId:10,tocIndex:10},{value:"Background color",paraId:10,tocIndex:10},{value:"transparent",paraId:10,tocIndex:10},{value:"--bui-input-background-color",paraId:10,tocIndex:10},{value:"--disabled-background-color",paraId:10,tocIndex:10},{value:"Disable background color",paraId:10,tocIndex:10},{value:"rgba(0, 0, 0, 0.04)",paraId:10,tocIndex:10},{value:"--bui-input-disabled-background-color",paraId:10,tocIndex:10}]},55762:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"A list is a continuous set of text or images composed of items from the main and supplementary operations, commonly used for data display.",paraId:0,tocIndex:0},{value:"The most basic list display, which can be used to carry text, images, paragraphs, etc.",paraId:1,tocIndex:2},{value:`The list component provides the 'ListItem' component to host list sub items.
The ListItem component is divided into four areas: ListItem Header, ListItem Content, ListItem Extra, and ListItem Footer.`,paraId:2},{value:`The list component provides the 'disabled' attribute to control the clickable state of the list.
You can pass' disabled 'through the' ListItem 'component to individually control sub items from clicking.`,paraId:3,tocIndex:3},{value:"The list component can set the list header through header and subheader .",paraId:4,tocIndex:4},{value:"The list component provides the 'ListItemHeader' sub component, which is used to customize the header operation area of list items and is commonly used to customize the header icons of list items.",paraId:5,tocIndex:5},{value:`The list component provides a 'ListItemContent' sub component for customizing the content area of list sub items.
You can set the main content area and sub content area of the list sub items through the 'primary' and 'secondary' attributes.`,paraId:6,tocIndex:6},{value:"The list component provides a 'ListItemFooter' sub component for customizing the tail area of list items.",paraId:7,tocIndex:7},{value:`The list component provides a 'ListItemExtra' sub component for customizing the operation area on the right side of list items.
The ListItemExtra sub component can be used to configure switches and to individually control list sub items.`,paraId:8,tocIndex:8},{value:`The default sub item of the list component has a dividing line before it, and the dividing line component attribute is transparently passed through by providing the 'dividerDrop' attribute.
You can also hide the dividing line through 'hideDivider'.`,paraId:9,tocIndex:9},{value:"The list component provides three sizes: small, medium, and large. You can customize these three sizes through the 'size' attribute.",paraId:10,tocIndex:10},{value:"attribute",paraId:11,tocIndex:12},{value:"explain",paraId:11,tocIndex:12},{value:"type",paraId:11,tocIndex:12},{value:"Default value",paraId:11,tocIndex:12},{value:"header",paraId:11,tocIndex:12},{value:"List header content",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"subheader",paraId:11,tocIndex:12},{value:"List subheading content",paraId:11,tocIndex:12},{value:"ReactNode",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"hideDivider",paraId:11,tocIndex:12},{value:"Do you want to hide the dividing line",paraId:11,tocIndex:12},{value:"boolean",paraId:11,tocIndex:12},{value:"false",paraId:11,tocIndex:12},{value:"size",paraId:11,tocIndex:12},{value:"List size",paraId:11,tocIndex:12},{value:"small",paraId:11,tocIndex:12},{value:"\uFF5C",paraId:11,tocIndex:12},{value:"medium",paraId:11,tocIndex:12},{value:"\uFF5C",paraId:11,tocIndex:12},{value:"large",paraId:11,tocIndex:12},{value:"medium",paraId:11,tocIndex:12},{value:"component",paraId:11,tocIndex:12},{value:"List node label",paraId:11,tocIndex:12},{value:"React.ElementType",paraId:11,tocIndex:12},{value:"-",paraId:11,tocIndex:12},{value:"attribute",paraId:12,tocIndex:13},{value:"explain",paraId:12,tocIndex:13},{value:"type",paraId:12,tocIndex:13},{value:"Default value",paraId:12,tocIndex:13},{value:"endIcon",paraId:12,tocIndex:13},{value:"Operation icon on the right side of the list sub item",paraId:12,tocIndex:13},{value:"ReactNode \uFF5Cboolean",paraId:12,tocIndex:13},{value:"-",paraId:12,tocIndex:13},{value:"disabled",paraId:12,tocIndex:13},{value:"Is the list clickable",paraId:12,tocIndex:13},{value:"boolean",paraId:12,tocIndex:13},{value:"false",paraId:12,tocIndex:13},{value:"hideDivider",paraId:12,tocIndex:13},{value:"Do you want to hide the dividing line",paraId:12,tocIndex:13},{value:"boolean",paraId:12,tocIndex:13},{value:"false",paraId:12,tocIndex:13},{value:"component",paraId:12,tocIndex:13},{value:"Root node label",paraId:12,tocIndex:13},{value:"React.ElementType",paraId:12,tocIndex:13},{value:"-",paraId:12,tocIndex:13},{value:"attribute",paraId:13,tocIndex:14},{value:"explain",paraId:13,tocIndex:14},{value:"type",paraId:13,tocIndex:14},{value:"Default value",paraId:13,tocIndex:14},{value:"primary",paraId:13,tocIndex:14},{value:"primary coverage",paraId:13,tocIndex:14},{value:"ReactNode",paraId:13,tocIndex:14},{value:"-",paraId:13,tocIndex:14},{value:"secondary",paraId:13,tocIndex:14},{value:"Secondary content",paraId:13,tocIndex:14},{value:"ReactNode",paraId:13,tocIndex:14},{value:"-",paraId:13,tocIndex:14},{value:"component",paraId:13,tocIndex:14},{value:"Root node label",paraId:13,tocIndex:14},{value:"React.ElementType",paraId:13,tocIndex:14},{value:"-",paraId:13,tocIndex:14},{value:"attribute",paraId:14,tocIndex:15},{value:"explain",paraId:14,tocIndex:15},{value:"type",paraId:14,tocIndex:15},{value:"Default value",paraId:14,tocIndex:15},{value:"component",paraId:14,tocIndex:15},{value:"Root node label",paraId:14,tocIndex:15},{value:"React.ElementType",paraId:14,tocIndex:15},{value:"-",paraId:14,tocIndex:15},{value:"attribute",paraId:15,tocIndex:16},{value:"explain",paraId:15,tocIndex:16},{value:"Default value",paraId:15,tocIndex:16},{value:"global variable",paraId:15,tocIndex:16},{value:"--small-item-padding",paraId:15,tocIndex:16},{value:"Inner margin of small sub items",paraId:15,tocIndex:16},{value:"5px 12px",paraId:15,tocIndex:16},{value:"--bui-list-small-item-padding",paraId:15,tocIndex:16},{value:"--medium-item-padding",paraId:15,tocIndex:16},{value:"Median sub item margin",paraId:15,tocIndex:16},{value:"18px 12px",paraId:15,tocIndex:16},{value:"--bui-list-medium-item-padding",paraId:15,tocIndex:16},{value:"--large-item-padding",paraId:15,tocIndex:16},{value:"Large sub item margin",paraId:15,tocIndex:16},{value:"20px 12px",paraId:15,tocIndex:16},{value:"--bui-list-large-item-padding",paraId:15,tocIndex:16}]},1311:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"Show a loading icon",paraId:0,tocIndex:2},{value:"Text can be passed through the 'children' attribute, and non - 'ReactNode' content will default to adding a layer of DOM structure to control the style.",paraId:1,tocIndex:3},{value:"You can control the display format of rows and columns by passing 'vertical' | 'horizontal' through 'direction'.",paraId:2,tocIndex:4},{value:"Control internal icons by setting 'IconProps'",paraId:3,tocIndex:5},{value:"attribute",paraId:4,tocIndex:7},{value:"explain",paraId:4,tocIndex:7},{value:"type",paraId:4,tocIndex:7},{value:"Default value",paraId:4,tocIndex:7},{value:"className",paraId:4,tocIndex:7},{value:"Component class name",paraId:4,tocIndex:7},{value:"string",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"icon",paraId:4,tocIndex:7},{value:"Customize loading icon",paraId:4,tocIndex:7},{value:"ReactNode",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"IconProps",paraId:4,tocIndex:7},{value:"Customize icons",paraId:4,tocIndex:7},{value:"ISvgIconProps",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"direction",paraId:4,tocIndex:7},{value:"The arrangement of loading icons and loading copy",paraId:4,tocIndex:7},{value:"'vertical' |'horizontal'",paraId:4,tocIndex:7},{value:"'vertical'",paraId:4,tocIndex:7},{value:"children",paraId:4,tocIndex:7},{value:"Control the loading of copy content",paraId:4,tocIndex:7},{value:"ReactNode",paraId:4,tocIndex:7},{value:"-",paraId:4,tocIndex:7},{value:"attribute",paraId:5,tocIndex:8},{value:"explain",paraId:5,tocIndex:8},{value:"Default value",paraId:5,tocIndex:8},{value:"global variable",paraId:5,tocIndex:8},{value:"--icon-font-size",paraId:5,tocIndex:8},{value:"Icon font size",paraId:5,tocIndex:8},{value:"30px",paraId:5,tocIndex:8},{value:"--bui-loading-icon-font-size",paraId:5,tocIndex:8},{value:"--text-padding",paraId:5,tocIndex:8},{value:"Inner margin of copywriting container",paraId:5,tocIndex:8},{value:"10px",paraId:5,tocIndex:8},{value:"--bui-loading-text-padding",paraId:5,tocIndex:8},{value:"--animation-duration",paraId:5,tocIndex:8},{value:"Load animation playback cycle",paraId:5,tocIndex:8},{value:"1.6s",paraId:5,tocIndex:8},{value:"--bui-loading-animation-duration",paraId:5,tocIndex:8}]},58269:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:`Basic floating layer components.
Provides the ability to draw custom content at the top of the main view and isolate interaction with lower level content.`,paraId:0,tocIndex:0},{value:`Use open to control the opening/closing of pop ups
Clicking on the pop-up mask layer and other events to close will be returned through the onClose callback`,paraId:1,tocIndex:2},{value:`Use 'hideBackdrop' to not render the bottom mask (without triggering a click, you need to implement the shutdown logic yourself)
Use the 'invisible' feature of BackdropProps to make the mask layer invisible (still triggering clicks)`,paraId:2,tocIndex:3},{value:`Modal distinguishes the target of each sliding/scrolling event and prevents manipulation of the page below the pop-up layer during its display.
If this behavior causes trouble, use 'disableScrollLock' to disable this feature`,paraId:3,tocIndex:4},{value:`Control the overall uninstallation timing of components when 'open' becomes false through 'keepMounted' to handle possible animation scenes (e.g. the sliding motion effect of the drawer section of the [Drawer component] (/cores/drawer)).
Passing 'true' indicates that the mod should not be uninstalled yet (e.g. the exit animation for internal elements is still in progress).`,paraId:4,tocIndex:5},{value:"attribute",paraId:5,tocIndex:6},{value:"explain",paraId:5,tocIndex:6},{value:"type",paraId:5,tocIndex:6},{value:"Default value",paraId:5,tocIndex:6},{value:"open",paraId:5,tocIndex:6},{value:"Elastic layer display",paraId:5,tocIndex:6},{value:"boolean",paraId:5,tocIndex:6},{value:"false",paraId:5,tocIndex:6},{value:"container",paraId:5,tocIndex:6},{value:"Portal Target Container",paraId:5,tocIndex:6},{value:"PortalProps['container']",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"hideBackdrop",paraId:5,tocIndex:6},{value:"Do not render Backdrop",paraId:5,tocIndex:6},{value:"boolean",paraId:5,tocIndex:6},{value:"false",paraId:5,tocIndex:6},{value:"BackdropProps",paraId:5,tocIndex:6},{value:"Parameters transparently passed to Backdrop",paraId:5,tocIndex:6},{value:"BackdropProps",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"onClose",paraId:5,tocIndex:6},{value:"Close callback",paraId:5,tocIndex:6},{value:"(event, reason) => void",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"disableScrollLock",paraId:5,tocIndex:6},{value:"Disable rolling penetration protection",paraId:5,tocIndex:6},{value:"boolean",paraId:5,tocIndex:6},{value:"false",paraId:5,tocIndex:6},{value:"disablePortal",paraId:5,tocIndex:6},{value:"Disable Portal",paraId:5,tocIndex:6},{value:"boolean",paraId:5,tocIndex:6},{value:"false",paraId:5,tocIndex:6},{value:"keepMounted",paraId:5,tocIndex:6},{value:"Maintain component mounting",paraId:5,tocIndex:6},{value:"boolean",paraId:5,tocIndex:6},{value:"false",paraId:5,tocIndex:6}]},29708:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"Provide navigation components for pages, commonly found at the top of mobile pages",paraId:0,tocIndex:0},{value:"Simply import the component to add a navigation bar at the top of the page",paraId:1,tocIndex:2},{value:"The component supports modifying the style of the left return arrow by passing a parameter of type ReactNode to leftCon to modify the left return arrow. When the pass parameter is' false ', hide the icon.",paraId:2,tocIndex:3},{value:"Control internal icons by setting 'IconProps'",paraId:3,tocIndex:4},{value:"Modify the text content to the left of the return arrow by passing a parameter of type ReactNode to the left attribute.",paraId:4,tocIndex:5},{value:"The component supports custom titles, which can be modified by passing parameters of type ReactNode to the title property The title of 'string' type supports omitting display beyond the limit, while 'ReactNode' needs to be implemented by oneself.",paraId:5,tocIndex:6},{value:"Users can customize the content of the right area by passing parameters of type ReactNode to the 'right' attribute, as shown in the icon content in '@ bifrostui/icons'.",paraId:6,tocIndex:7},{value:"Users can fix the navigation bar at the top of the page by passing 'true' to the 'fixed' property, and can also set the 'placeholder' property to pass' true 'to generate a placeholder block in its original position.",paraId:7,tocIndex:8},{value:"attribute",paraId:8,tocIndex:10},{value:"explain",paraId:8,tocIndex:10},{value:"type",paraId:8,tocIndex:10},{value:"Default value",paraId:8,tocIndex:10},{value:"className",paraId:8,tocIndex:10},{value:"Component class name",paraId:8,tocIndex:10},{value:"string",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"title",paraId:8,tocIndex:10},{value:"title",paraId:8,tocIndex:10},{value:"ReactNode",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"left",paraId:8,tocIndex:10},{value:"Customize the content on the left side of the navigation bar",paraId:8,tocIndex:10},{value:"ReactNode",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"leftIcon",paraId:8,tocIndex:10},{value:"Customize left arrow, false controls hide",paraId:8,tocIndex:10},{value:"ReactNode |boolean",paraId:8,tocIndex:10},{value:"<ArrowBackwardLargeIcon />",paraId:8,tocIndex:10},{value:"IconProps",paraId:8,tocIndex:10},{value:"Transmitting attributes to internal icons",paraId:8,tocIndex:10},{value:"ISvgIconProps",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"right",paraId:8,tocIndex:10},{value:"Customize the content on the right side of the navigation bar",paraId:8,tocIndex:10},{value:"ReactNode",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"fixed",paraId:8,tocIndex:10},{value:"Is it fixed at the top",paraId:8,tocIndex:10},{value:"boolean",paraId:8,tocIndex:10},{value:"false",paraId:8,tocIndex:10},{value:"placeholder",paraId:8,tocIndex:10},{value:"When fixed at the top, generate an equally high placeholder element at the label position (consider turning off immersive effect scenes)",paraId:8,tocIndex:10},{value:"boolean",paraId:8,tocIndex:10},{value:"false",paraId:8,tocIndex:10},{value:"onClickLeft",paraId:8,tocIndex:10},{value:"Click the return button to call back the event",paraId:8,tocIndex:10},{value:"(e: SyntheticEvent<HTMLDivElement) => void",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"attribute",paraId:9,tocIndex:11},{value:"explain",paraId:9,tocIndex:11},{value:"Default value",paraId:9,tocIndex:11},{value:"global variable",paraId:9,tocIndex:11},{value:"--width",paraId:9,tocIndex:11},{value:"Navigation bar width",paraId:9,tocIndex:11},{value:"100%",paraId:9,tocIndex:11},{value:"--bui-navbar-width",paraId:9,tocIndex:11},{value:"--height",paraId:9,tocIndex:11},{value:"Navigation bar height",paraId:9,tocIndex:11},{value:"45px",paraId:9,tocIndex:11},{value:"--bui-navbar-height",paraId:9,tocIndex:11},{value:"--padding",paraId:9,tocIndex:11},{value:"0 8px",paraId:9,tocIndex:11},{value:"--bui-navbar-padding",paraId:9,tocIndex:11},{value:"--title-max-width",paraId:9,tocIndex:11},{value:"Maximum width of navigation bar title",paraId:9,tocIndex:11},{value:"60%",paraId:9,tocIndex:11},{value:"--bui-navbar-title-max-width",paraId:9,tocIndex:11},{value:"--icon-size",paraId:9,tocIndex:11},{value:"Navigation bar icon size",paraId:9,tocIndex:11},{value:"30px",paraId:9,tocIndex:11},{value:"--bui-navbar-icon-size",paraId:9,tocIndex:11},{value:"--icon-font-size",paraId:9,tocIndex:11},{value:"Navigation bar icon font",paraId:9,tocIndex:11},{value:"var(--bui-title-size-3)",paraId:9,tocIndex:11},{value:"--bui-navbar-icon-font-size",paraId:9,tocIndex:11},{value:"--background-color",paraId:9,tocIndex:11},{value:"Navigation bar background color",paraId:9,tocIndex:11},{value:"var(--bui-color-white)",paraId:9,tocIndex:11},{value:"--bui-navbar-background-color",paraId:9,tocIndex:11},{value:"--border-bottom",paraId:9,tocIndex:11},{value:"Bottom border style of navigation bar",paraId:9,tocIndex:11},{value:"none",paraId:9,tocIndex:11},{value:"--bui-navbar-border-bottom",paraId:9,tocIndex:11},{value:"--z-index",paraId:9,tocIndex:11},{value:"Default hierarchy of navigation bar",paraId:9,tocIndex:11},{value:"auto",paraId:9,tocIndex:11},{value:"--bui-navbar-z-index",paraId:9,tocIndex:11}]},1310:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"Provide multiple sets of options for users to choose from. It should be noted that it is not allowed to confirm the closure of the selector during inertial scrolling.",paraId:0,tocIndex:0},{value:"Use 'open' to control the selector's on/off, and events such as clicking on the mask layer to close it will be returned through the 'onClose' callback",paraId:1,tocIndex:2},{value:"Use the 'title' attribute to specify the selector title.",paraId:2,tocIndex:3},{value:"By passing the 'options' property into a two-dimensional array, a multi column selector can be implemented.",paraId:3,tocIndex:4},{value:"Cascade selectors can be implemented through the 'children' field in the 'options' attribute sub item.",paraId:4,tocIndex:5},{value:"Asynchronous retrieval of 'options' data source.",paraId:5,tocIndex:6},{value:"The 'value' attribute allows you to specify the default selected option.",paraId:6,tocIndex:7},{value:"Legitimate attributes can be passed transparently to internal content DOM elements through the 'contentProps' attribute.",paraId:7,tocIndex:8},{value:"By listening to 'onConfirm', the callback event for clicking the confirm button can be obtained, and the 'onClose' event will be triggered after the event ends.",paraId:8,tocIndex:9},{value:"If the passed 'value' is not an equal subset of 'options', the' value 'field in the callback function will be automatically corrected when the selector is closed, making it an option that exists in' options'.",paraId:9,tocIndex:10},{value:"By monitoring 'onOptionChange', real-time callback events can be obtained for each column value change.",paraId:10,tocIndex:11},{value:"By monitoring 'onCancel', the callback event for the cancel button click can be obtained, and the 'onClose' event will be triggered after the event ends.",paraId:11,tocIndex:12},{value:"Custom styles can be achieved through the Tokens provided by [Style Variables] (# Style Variables).",paraId:12,tocIndex:13},{value:"attribute",paraId:13,tocIndex:15},{value:"explain",paraId:13,tocIndex:15},{value:"type",paraId:13,tocIndex:15},{value:"Default value",paraId:13,tocIndex:15},{value:"open",paraId:13,tocIndex:15},{value:"Do you want to display the selector",paraId:13,tocIndex:15},{value:"boolean",paraId:13,tocIndex:15},{value:"false",paraId:13,tocIndex:15},{value:"title",paraId:13,tocIndex:15},{value:"title",paraId:13,tocIndex:15},{value:"string",paraId:13,tocIndex:15},{value:"-",paraId:13,tocIndex:15},{value:"options",paraId:13,tocIndex:15},{value:"List data",paraId:13,tocIndex:15},{value:"IPickerOptionItem[][] |ICascadePickerOptionItem[]",paraId:13,tocIndex:15},{value:"[]",paraId:13,tocIndex:15},{value:"value",paraId:13,tocIndex:15},{value:"Selected values",paraId:13,tocIndex:15},{value:"(string |number)[]",paraId:13,tocIndex:15},{value:"-",paraId:13,tocIndex:15},{value:"contentProps",paraId:13,tocIndex:15},{value:"Props on drawer content DOM node",paraId:13,tocIndex:15},{value:"React.HTMLAttributes<HTMLDivElement>",paraId:13,tocIndex:15},{value:"-",paraId:13,tocIndex:15},{value:"onConfirm",paraId:13,tocIndex:15},{value:"Callback when clicking the confirm button",paraId:13,tocIndex:15},{value:"(e: React.SyntheticEvent,data: { value: (string |number)[]; options: ICascadePickerOptionItem[]}) => void",paraId:13,tocIndex:15},{value:"-",paraId:13,tocIndex:15},{value:"onOptionChange",paraId:13,tocIndex:15},{value:"Callback when option value changes",paraId:13,tocIndex:15},{value:"(e: React.SyntheticEvent,data: { value: (string |number)[];options: IPickerOptionItem[][] |ICascadePickerOptionItem[];currentOption: ICascadePickerOptionItem}) => void",paraId:13,tocIndex:15},{value:"-",paraId:13,tocIndex:15},{value:"onCancel",paraId:13,tocIndex:15},{value:"Callback when clicking the cancel button",paraId:13,tocIndex:15},{value:"(e: React.SyntheticEvent) => void",paraId:13,tocIndex:15},{value:"-",paraId:13,tocIndex:15},{value:"onClose",paraId:13,tocIndex:15},{value:"Execute when closing the selector",paraId:13,tocIndex:15},{value:"(e: React.SyntheticEvent,data: {from: string;value: (string |number)[];options: IPickerOptionItem[][] |ICascadePickerOptionItem[]}) => void",paraId:13,tocIndex:15},{value:"-",paraId:13,tocIndex:15},{value:"attribute",paraId:14,tocIndex:16},{value:"explain",paraId:14,tocIndex:16},{value:"type",paraId:14,tocIndex:16},{value:"Default value",paraId:14,tocIndex:16},{value:"options",paraId:14,tocIndex:16},{value:"List data of a single column panel",paraId:14,tocIndex:16},{value:"IPickerOptionItem[][] |ICascadePickerOptionItem[]",paraId:14,tocIndex:16},{value:"[]",paraId:14,tocIndex:16},{value:"defaultValue",paraId:14,tocIndex:16},{value:"Default values for single column panels",paraId:14,tocIndex:16},{value:"string |number",paraId:14,tocIndex:16},{value:"-",paraId:14,tocIndex:16},{value:"columnIndex",paraId:14,tocIndex:16},{value:"Li Suo Yin",paraId:14,tocIndex:16},{value:"number",paraId:14,tocIndex:16},{value:"-",paraId:14,tocIndex:16},{value:"onSelect",paraId:14,tocIndex:16},{value:"Callback when clicking on an option",paraId:14,tocIndex:16},{value:"(e: React.SyntheticEvent,data: {columnOption: IPickerOptionItem[] |ICascadePickerOptionItem;columnIndex: number}) => void",paraId:14,tocIndex:16},{value:"-",paraId:14,tocIndex:16},{value:"attribute",paraId:15,tocIndex:17},{value:"explain",paraId:15,tocIndex:17},{value:"type",paraId:15,tocIndex:17},{value:"Default value",paraId:15,tocIndex:17},{value:"label",paraId:15,tocIndex:17},{value:"Text content of options",paraId:15,tocIndex:17},{value:"string |number",paraId:15,tocIndex:17},{value:"-",paraId:15,tocIndex:17},{value:"value",paraId:15,tocIndex:17},{value:"Options correspond to unique values",paraId:15,tocIndex:17},{value:"string |number",paraId:15,tocIndex:17},{value:"-",paraId:15,tocIndex:17},{value:"attribute",paraId:16,tocIndex:18},{value:"explain",paraId:16,tocIndex:18},{value:"type",paraId:16,tocIndex:18},{value:"Default value",paraId:16,tocIndex:18},{value:"label",paraId:16,tocIndex:18},{value:"Text content of options",paraId:16,tocIndex:18},{value:"string |number",paraId:16,tocIndex:18},{value:"-",paraId:16,tocIndex:18},{value:"value",paraId:16,tocIndex:18},{value:"Options correspond to unique values",paraId:16,tocIndex:18},{value:"string |number",paraId:16,tocIndex:18},{value:"-",paraId:16,tocIndex:18},{value:"children",paraId:16,tocIndex:18},{value:"Used for cascading options",paraId:16,tocIndex:18},{value:"ICascadePickerOptionItem[]",paraId:16,tocIndex:18},{value:"-",paraId:16,tocIndex:18},{value:"Picker inherits from Drawer. Other properties can be found in the Drawer API (/ores/Drawer? # API)",paraId:17,tocIndex:18},{value:"attribute",paraId:18,tocIndex:19},{value:"explain",paraId:18,tocIndex:19},{value:"Default value",paraId:18,tocIndex:19},{value:"global variable",paraId:18,tocIndex:19},{value:"--header-height",paraId:18,tocIndex:19},{value:"Selector head height",paraId:18,tocIndex:19},{value:"50px",paraId:18,tocIndex:19},{value:"--bui-picker-header-height",paraId:18,tocIndex:19},{value:"--header-padding",paraId:18,tocIndex:19},{value:"Select the inner margin of the head of the selector",paraId:18,tocIndex:19},{value:"0 var(--bui-spacing-lg)",paraId:18,tocIndex:19},{value:"--bui-picker-header-padding",paraId:18,tocIndex:19},{value:"--cancel-height",paraId:18,tocIndex:19},{value:"Cancel button height",paraId:18,tocIndex:19},{value:"100%",paraId:18,tocIndex:19},{value:"--bui-picker-cancel-height",paraId:18,tocIndex:19},{value:"--cancel-line-height",paraId:18,tocIndex:19},{value:"Cancel button row height",paraId:18,tocIndex:19},{value:"50px",paraId:18,tocIndex:19},{value:"--bui-picker-cancel-line-height",paraId:18,tocIndex:19},{value:"--confirm-height",paraId:18,tocIndex:19},{value:"Confirm button height",paraId:18,tocIndex:19},{value:"100%",paraId:18,tocIndex:19},{value:"--bui-picker-confirm-height",paraId:18,tocIndex:19},{value:"--confirm-line-height",paraId:18,tocIndex:19},{value:"Confirm button row height",paraId:18,tocIndex:19},{value:"50px",paraId:18,tocIndex:19},{value:"--bui-picker-confirm-line-height",paraId:18,tocIndex:19},{value:"--panel-container-height",paraId:18,tocIndex:19},{value:"Select container height",paraId:18,tocIndex:19},{value:"260px",paraId:18,tocIndex:19},{value:"--bui-picker-panel-height",paraId:18,tocIndex:19},{value:"--indicator-top",paraId:18,tocIndex:19},{value:"Indicator distance from top",paraId:18,tocIndex:19},{value:"108px",paraId:18,tocIndex:19},{value:"--bui-picker-indicator-top",paraId:18,tocIndex:19},{value:"--indicator-border-color",paraId:18,tocIndex:19},{value:"Indicator stroke color",paraId:18,tocIndex:19},{value:"--bui-color-border-default",paraId:18,tocIndex:19},{value:"--bui-picker-indicator-border-color",paraId:18,tocIndex:19},{value:"--option-height",paraId:18,tocIndex:19},{value:"Option height, at the same height as the indicator, must be passed in inline",paraId:18,tocIndex:19},{value:"36px",paraId:18,tocIndex:19},{value:"--bui-picker-option-height",paraId:18,tocIndex:19},{value:"The logic layer of the Picker component needs to dynamically obtain the value of '--option-height' to calculate the height of the sliding panel. If it is not passed in the inline style, this value cannot be obtained in tsx.",paraId:19,tocIndex:20}]},91365:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"Click or hover triggers a pop-up bubble like card floating layer, which can be customized with events",paraId:0,tocIndex:0},{value:"Clicking with the mouse will display a prompt, and clicking again will disappear. The bubble floating layer does not support complex text and operations.",paraId:1,tocIndex:2},{value:"External setting of bubble floating layer visibility through open",paraId:2,tocIndex:3},{value:"You can set defaultOpen to true to display bubble floating layers by default",paraId:3,tocIndex:4},{value:"You can set 'hideArrow' to true to hide arrows",paraId:4,tocIndex:5},{value:"Placement: Set the position of the bubble float layer. The optional values are: top, left, right, bottom, topLeft, topRight, bottomLeft, bottomRight, leftTop, leftBottom, rightTop, rightBottom",paraId:5,tocIndex:6},{value:'The triggering method for displaying bubbles is "click" or "hover", with the default being "click"',paraId:6,tocIndex:7},{value:"attribute",paraId:7,tocIndex:9},{value:"explain",paraId:7,tocIndex:9},{value:"type",paraId:7,tocIndex:9},{value:"Default value",paraId:7,tocIndex:9},{value:"title",paraId:7,tocIndex:9},{value:"Title of Bubble Floating Layer Floating Layer Content",paraId:7,tocIndex:9},{value:"ReactNode",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"content",paraId:7,tocIndex:9},{value:"Content of Bubble Floating Layer",paraId:7,tocIndex:9},{value:"ReactNode",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"defaultOpen",paraId:7,tocIndex:9},{value:"Whether to hide by default",paraId:7,tocIndex:9},{value:"boolean",paraId:7,tocIndex:9},{value:"false",paraId:7,tocIndex:9},{value:"open",paraId:7,tocIndex:9},{value:"Used for manually controlling the appearance and concealment of bubble floating layers",paraId:7,tocIndex:9},{value:"boolean",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"hideArrow",paraId:7,tocIndex:9},{value:"Display arrows or not",paraId:7,tocIndex:9},{value:"boolean",paraId:7,tocIndex:9},{value:"false",paraId:7,tocIndex:9},{value:"placement",paraId:7,tocIndex:9},{value:"Bubble box position",paraId:7,tocIndex:9},{value:"String, the enumeration value is ",paraId:7,tocIndex:9},{value:"center",paraId:7,tocIndex:9},{value:" ",paraId:7,tocIndex:9},{value:"left",paraId:7,tocIndex:9},{value:" ",paraId:7,tocIndex:9},{value:"leftTop",paraId:7,tocIndex:9},{value:" ",paraId:7,tocIndex:9},{value:"leftBottom",paraId:7,tocIndex:9},{value:" ",paraId:7,tocIndex:9},{value:"right",paraId:7,tocIndex:9},{value:" ",paraId:7,tocIndex:9},{value:"rightTop",paraId:7,tocIndex:9},{value:" ",paraId:7,tocIndex:9},{value:"rightBottom",paraId:7,tocIndex:9},{value:" ",paraId:7,tocIndex:9},{value:"top",paraId:7,tocIndex:9},{value:" ",paraId:7,tocIndex:9},{value:"topLeft",paraId:7,tocIndex:9},{value:" ",paraId:7,tocIndex:9},{value:"topRight",paraId:7,tocIndex:9},{value:" ",paraId:7,tocIndex:9},{value:"bottom",paraId:7,tocIndex:9},{value:" ",paraId:7,tocIndex:9},{value:"bottomLeft",paraId:7,tocIndex:9},{value:" ",paraId:7,tocIndex:9},{value:"bottomRight",paraId:7,tocIndex:9},{value:" ",paraId:7,tocIndex:9},{value:"bottom",paraId:7,tocIndex:9},{value:"'top'",paraId:7,tocIndex:9},{value:"trigger",paraId:7,tocIndex:9},{value:"Trigger behavior",paraId:7,tocIndex:9},{value:"string |String [], the enumeration value is' click '|'hover'",paraId:7,tocIndex:9},{value:"'click'",paraId:7,tocIndex:9},{value:"onOpenChange",paraId:7,tocIndex:9},{value:"The callback method for bubble floating layer manifestation and concealment",paraId:7,tocIndex:9},{value:"(e: React.MouseEvent<HTMLDivElement>,data: {open: boolean}) => void",paraId:7,tocIndex:9},{value:"-",paraId:7,tocIndex:9},{value:"attribute",paraId:8,tocIndex:10},{value:"explain",paraId:8,tocIndex:10},{value:"Default value",paraId:8,tocIndex:10},{value:"global variable",paraId:8,tocIndex:10},{value:"--arrow-size",paraId:8,tocIndex:10},{value:"ARROW size",paraId:8,tocIndex:10},{value:"8PX",paraId:8,tocIndex:10},{value:"--bui-popover-arrow-size",paraId:8,tocIndex:10},{value:"--localtion-position",paraId:8,tocIndex:10},{value:"Arrow Position",paraId:8,tocIndex:10},{value:"8PX",paraId:8,tocIndex:10},{value:"--bui-popover-localtion-position",paraId:8,tocIndex:10},{value:"--max-width",paraId:8,tocIndex:10},{value:"Maximum width",paraId:8,tocIndex:10},{value:"350px",paraId:8,tocIndex:10},{value:"--bui-popover-max-width",paraId:8,tocIndex:10},{value:"--content-min-width",paraId:8,tocIndex:10},{value:"Minimum width of content area",paraId:8,tocIndex:10},{value:"30px",paraId:8,tocIndex:10},{value:"--bui-popover-content-min-width",paraId:8,tocIndex:10},{value:"--content-min-height",paraId:8,tocIndex:10},{value:"Minimum height of content area",paraId:8,tocIndex:10},{value:"32px",paraId:8,tocIndex:10},{value:"--bui-popover-content-min-height",paraId:8,tocIndex:10},{value:"--content-padding",paraId:8,tocIndex:10},{value:"Inner margin of content area",paraId:8,tocIndex:10},{value:"0",paraId:8,tocIndex:10},{value:"--bui-popover-content-padding",paraId:8,tocIndex:10}]},85308:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"The Portal component provides the ability to render its child nodes into DOM nodes outside of the current DOM structure. The underlying component uses [React create Portal]\uFF08 ",paraId:0,tocIndex:0},{value:"https://react.dev/reference/react-dom/createPortal",paraId:0,tocIndex:0},{value:" )",paraId:0,tocIndex:0},{value:"By default, Portal components will mount sub components to the root node of the page. H5 is' document. body ', and the mini program is the' page node '",paraId:1,tocIndex:2},{value:`import React from 'react';
import { Portal } from '@bifrostui/react';

export default () => {
  return (
    <Portal>
      <div>\u6302\u8F7D\u5728\u9875\u9762\u6839\u8282\u70B9\u4E0A</div>
    </Portal>
  );
};
`,paraId:2,tocIndex:2},{value:"You can use 'container' to specify the nodes that the sub components of Portal components are mounted on",paraId:3,tocIndex:3},{value:"You can use 'disabling Portal' to render children in the parent node instead of in the container",paraId:4,tocIndex:4},{value:"attribute",paraId:5,tocIndex:5},{value:"explain",paraId:5,tocIndex:5},{value:"type",paraId:5,tocIndex:5},{value:"Default value",paraId:5,tocIndex:5},{value:"children",paraId:5,tocIndex:5},{value:"Sub elements of Portal components",paraId:5,tocIndex:5},{value:"React.ReactNode",paraId:5,tocIndex:5},{value:"-",paraId:5,tocIndex:5},{value:"container",paraId:5,tocIndex:5},{value:"The children content will be appended to the container",paraId:5,tocIndex:5},{value:"Element |(() => Element |null) |null",paraId:5,tocIndex:5},{value:"Pages and Nodes",paraId:5,tocIndex:5},{value:"disablePortal",paraId:5,tocIndex:5},{value:"Prohibit Portal, children will be rendered in the parent node",paraId:5,tocIndex:5},{value:"boolean",paraId:5,tocIndex:5},{value:"false",paraId:5,tocIndex:5}]},27859:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"Display the current progress of the operation.",paraId:0,tocIndex:0},{value:"Set the operation progress through 'percentage'.",paraId:1,tocIndex:2},{value:"Set the line color through 'strokeColor', with the default value being '-- bui color primary'.",paraId:2,tocIndex:3},{value:"You can set the width of the progress bar through 'strokeWidth'.",paraId:3,tocIndex:4},{value:"Encapsulation of linear gradient. Recommend only transmitting two colors.",paraId:4,tocIndex:5},{value:"Specify the color of unfinished segments through 'trailColor'.",paraId:5,tocIndex:6},{value:"attribute",paraId:6,tocIndex:7},{value:"explain",paraId:6,tocIndex:7},{value:"type",paraId:6,tocIndex:7},{value:"Default value",paraId:6,tocIndex:7},{value:"percent",paraId:6,tocIndex:7},{value:"percentage",paraId:6,tocIndex:7},{value:"number",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"strokeColor",paraId:6,tocIndex:7},{value:"The color of the progress bar is gradient when passing in an object",paraId:6,tocIndex:7},{value:"string |{ from: string; to: string; direction?: string } |{ [percentage: string]: string; direction?: string }",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"trailColor",paraId:6,tocIndex:7},{value:"Color of unfilled progress bar",paraId:6,tocIndex:7},{value:"string",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"strokeWidth",paraId:6,tocIndex:7},{value:"Width of progress bar",paraId:6,tocIndex:7},{value:"number |string",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"attribute",paraId:7,tocIndex:8},{value:"explain",paraId:7,tocIndex:8},{value:"Default value",paraId:7,tocIndex:8},{value:"global variable",paraId:7,tocIndex:8},{value:"--fill-color",paraId:7,tocIndex:8},{value:"Color of progress bar",paraId:7,tocIndex:8},{value:"--bui-color-primary",paraId:7,tocIndex:8},{value:"--bui-progress-fill-color",paraId:7,tocIndex:8},{value:"--trail-color",paraId:7,tocIndex:8},{value:"Color of unfilled progress bar",paraId:7,tocIndex:8},{value:"rgba(156, 156, 165, 0.2)",paraId:7,tocIndex:8},{value:"--bui-progress-trail-color",paraId:7,tocIndex:8},{value:"--stroke-width",paraId:7,tocIndex:8},{value:"Fill in progress bar width",paraId:7,tocIndex:8},{value:"8px",paraId:7,tocIndex:8},{value:"--bui-progress-stroke-width",paraId:7,tocIndex:8},{value:"--width",paraId:7,tocIndex:8},{value:"Progress bar width",paraId:7,tocIndex:8},{value:"100%",paraId:7,tocIndex:8},{value:"--bui-progress-width",paraId:7,tocIndex:8},{value:"--border-radius",paraId:7,tocIndex:8},{value:"Round corner of progress bar",paraId:7,tocIndex:8},{value:"100px",paraId:7,tocIndex:8},{value:"--bui-progress-border-radius",paraId:7,tocIndex:8}]},573:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"A radio button that allows users to select an option from a set of options.",paraId:0,tocIndex:0},{value:"Control the status through 'checked' and 'onChange'.",paraId:1,tocIndex:2},{value:"The input property passed through 'inputProps' can be passed transparently to the internal' input 'tag.",paraId:2,tocIndex:3},{value:"Name 'and' value 'can be directly passed through to the internal' input 'tag without being overwritten by the same named attribute passed in by' inputProps'.",paraId:3,tocIndex:4},{value:"The position of the text in the checkbox icon can be controlled through 'labelPlacement'.",paraId:4,tocIndex:5},{value:"The 'icon' can be customized as a selected status icon, and the 'checkedIcon' can be customized as a selected status icon.",paraId:5,tocIndex:6},{value:"Use 'disabled' to disable components, and 'RadioGroup. disabled' can disable the entire group.",paraId:6,tocIndex:7},{value:"The combination of RadioGroup and Radio can implement a checkbox group, and the 'Radio' should pass in the 'value' attribute at this time.",paraId:7,tocIndex:8},{value:"Control the RadioGroup component through 'value' and the Radio component through 'checked'.",paraId:8,tocIndex:9},{value:"Use 'defaultValue' to specify the default value for the 'RadioGroup' component, and use 'defaultChecked' to specify the default value for the 'Radio' component.",paraId:9,tocIndex:10},{value:"attribute",paraId:10,tocIndex:12},{value:"explain",paraId:10,tocIndex:12},{value:"type",paraId:10,tocIndex:12},{value:"Default value",paraId:10,tocIndex:12},{value:"defaultValue",paraId:10,tocIndex:12},{value:"The default selected option, used when the component is uncontrolled",paraId:10,tocIndex:12},{value:"string",paraId:10,tocIndex:12},{value:"-",paraId:10,tocIndex:12},{value:"value",paraId:10,tocIndex:12},{value:"Specify the selected option to be used when the component is controlled",paraId:10,tocIndex:12},{value:"string",paraId:10,tocIndex:12},{value:"-",paraId:10,tocIndex:12},{value:"disabled",paraId:10,tocIndex:12},{value:"Is the entire group disabled",paraId:10,tocIndex:12},{value:"boolean",paraId:10,tocIndex:12},{value:"false",paraId:10,tocIndex:12},{value:"onChange",paraId:10,tocIndex:12},{value:"The callback function during changes",paraId:10,tocIndex:12},{value:"(e: React.SyntheticEvent,data: {value: string}) => void",paraId:10,tocIndex:12},{value:"-",paraId:10,tocIndex:12},{value:"attribute",paraId:11,tocIndex:13},{value:"explain",paraId:11,tocIndex:13},{value:"type",paraId:11,tocIndex:13},{value:"Default value",paraId:11,tocIndex:13},{value:"defaultChecked",paraId:11,tocIndex:13},{value:"Whether it is selected by default, used when the component is uncontrolled",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"checked",paraId:11,tocIndex:13},{value:"Is it selected to be used when the component is controlled",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"inputProps",paraId:11,tocIndex:13},{value:"inside ",paraId:11,tocIndex:13},{value:"<input>",paraId:11,tocIndex:13},{value:" Standard attributes of tags",paraId:11,tocIndex:13},{value:"React.InputHTMLAttributes<HTMLInputElement>",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"inputRef",paraId:11,tocIndex:13},{value:"inside ",paraId:11,tocIndex:13},{value:"<input>",paraId:11,tocIndex:13},{value:" Label's ref",paraId:11,tocIndex:13},{value:"React.Ref<HTMLInputElement>",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"name",paraId:11,tocIndex:13},{value:"<input>",paraId:11,tocIndex:13},{value:" Name identification",paraId:11,tocIndex:13},{value:"string",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"value",paraId:11,tocIndex:13},{value:"The value of the component should be passed in if RadioGroup is used",paraId:11,tocIndex:13},{value:"string",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"disabled",paraId:11,tocIndex:13},{value:"Do you want to disable it",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"false",paraId:11,tocIndex:13},{value:"icon",paraId:11,tocIndex:13},{value:"Unchecked status icon",paraId:11,tocIndex:13},{value:"ReactNode",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"checkedIcon",paraId:11,tocIndex:13},{value:"Select status icon",paraId:11,tocIndex:13},{value:"ReactNode",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"labelPlacement",paraId:11,tocIndex:13},{value:"Copy position",paraId:11,tocIndex:13},{value:"left",paraId:11,tocIndex:13},{value:" |",paraId:11,tocIndex:13},{value:"top",paraId:11,tocIndex:13},{value:" |",paraId:11,tocIndex:13},{value:"right",paraId:11,tocIndex:13},{value:" |",paraId:11,tocIndex:13},{value:"bottom",paraId:11,tocIndex:13},{value:"right",paraId:11,tocIndex:13},{value:"onChange",paraId:11,tocIndex:13},{value:"The callback function during changes",paraId:11,tocIndex:13},{value:"(e: React.SyntheticEvent,data: {checked: boolean}) => void",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"attribute",paraId:12,tocIndex:14},{value:"explain",paraId:12,tocIndex:14},{value:"Default value",paraId:12,tocIndex:14},{value:"global variable",paraId:12,tocIndex:14},{value:"--label-color",paraId:12,tocIndex:14},{value:"Text font color",paraId:12,tocIndex:14},{value:"--bui-color-fg-default",paraId:12,tocIndex:14},{value:"--bui-radio-label-color",paraId:12,tocIndex:14},{value:"--label-font-size",paraId:12,tocIndex:14},{value:"Copy font size",paraId:12,tocIndex:14},{value:"--bui-text-size-1",paraId:12,tocIndex:14},{value:"--bui-radio-label-font-size",paraId:12,tocIndex:14},{value:"--icon-font-size",paraId:12,tocIndex:14},{value:"Icon font size",paraId:12,tocIndex:14},{value:"--bui-title-size-2",paraId:12,tocIndex:14},{value:"--bui-radio-icon-font-size",paraId:12,tocIndex:14},{value:"--icon-padding",paraId:12,tocIndex:14},{value:"Icon inner margin",paraId:12,tocIndex:14},{value:"--bui-radio-icon-padding",paraId:12,tocIndex:14},{value:"5px",paraId:12,tocIndex:14}]},23365:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"The rating component provides a display of evaluations. It also allows users to quickly rate operations.",paraId:0,tocIndex:0},{value:"Customize ratings through 'value' and 'onChange' to select values",paraId:1,tocIndex:3},{value:"Specify 'Rating' through 'allowHalf' to support half selection state.",paraId:2,tocIndex:4},{value:"Specify 'Rating' as read-only through 'readOnly'.",paraId:3,tocIndex:5},{value:"Specify the size of 'Rating' through 'size'",paraId:4,tocIndex:6},{value:"Specify the number of display icons for 'Rating' through 'count'",paraId:5,tocIndex:7},{value:"Specify 'Rating' as disabled through 'disabled'",paraId:6,tocIndex:8},{value:"By using 'icon' and 'emptyIcon', stars can be replaced with other characters such as emoticons, letters, numbers, font icons, and even Chinese. 'icon' is a selected icon, while 'emptyIcon' is an unselected icon",paraId:7,tocIndex:9},{value:"attribute",paraId:8,tocIndex:10},{value:"explain",paraId:8,tocIndex:10},{value:"type",paraId:8,tocIndex:10},{value:"Default value",paraId:8,tocIndex:10},{value:"count",paraId:8,tocIndex:10},{value:"Total number of ratings",paraId:8,tocIndex:10},{value:"number",paraId:8,tocIndex:10},{value:"5",paraId:8,tocIndex:10},{value:"value",paraId:8,tocIndex:10},{value:"Current rating",paraId:8,tocIndex:10},{value:"number",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"defaultValue",paraId:8,tocIndex:10},{value:"Default rating for uncontrolled use",paraId:8,tocIndex:10},{value:"number",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"size",paraId:8,tocIndex:10},{value:"size",paraId:8,tocIndex:10},{value:"xsmall",paraId:8,tocIndex:10},{value:"|",paraId:8,tocIndex:10},{value:"small",paraId:8,tocIndex:10},{value:" |",paraId:8,tocIndex:10},{value:"medium",paraId:8,tocIndex:10},{value:" |",paraId:8,tocIndex:10},{value:"large",paraId:8,tocIndex:10},{value:"medium",paraId:8,tocIndex:10},{value:"disabled",paraId:8,tocIndex:10},{value:"Do you want to disable it",paraId:8,tocIndex:10},{value:"boolean",paraId:8,tocIndex:10},{value:"false",paraId:8,tocIndex:10},{value:"readOnly",paraId:8,tocIndex:10},{value:"Read only or not",paraId:8,tocIndex:10},{value:"boolean",paraId:8,tocIndex:10},{value:"false",paraId:8,tocIndex:10},{value:"allowHalf",paraId:8,tocIndex:10},{value:"Is half selection allowed",paraId:8,tocIndex:10},{value:"boolean",paraId:8,tocIndex:10},{value:"false",paraId:8,tocIndex:10},{value:"icon",paraId:8,tocIndex:10},{value:"Unchecked icon",paraId:8,tocIndex:10},{value:"React.ReactNode",paraId:8,tocIndex:10},{value:'<StarFilledIcon htmlColor="#ced1d6" />',paraId:8,tocIndex:10},{value:"checkedIcon",paraId:8,tocIndex:10},{value:"Selected icon",paraId:8,tocIndex:10},{value:"React.ReactNode",paraId:8,tocIndex:10},{value:'<StarFilledIcon color="warning" />',paraId:8,tocIndex:10},{value:"disableClear",paraId:8,tocIndex:10},{value:"Do you prohibit clearing after clicking",paraId:8,tocIndex:10},{value:"boolean",paraId:8,tocIndex:10},{value:"false",paraId:8,tocIndex:10},{value:"name",paraId:8,tocIndex:10},{value:"Single choice input element's name attribute",paraId:8,tocIndex:10},{value:"string",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"onChange",paraId:8,tocIndex:10},{value:"Select the callback for rating selection",paraId:8,tocIndex:10},{value:"(ev?: React.ChangeEvent<HTMLInputElement>,data?: { value: number }) => void",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"attribute",paraId:9,tocIndex:11},{value:"explain",paraId:9,tocIndex:11},{value:"Default value",paraId:9,tocIndex:11},{value:"global variable",paraId:9,tocIndex:11},{value:"--small-margin-right",paraId:9,tocIndex:11},{value:"Small rating right margin",paraId:9,tocIndex:11},{value:"0.5px",paraId:9,tocIndex:11},{value:"--bui-rating-small-margin-right",paraId:9,tocIndex:11},{value:"--medium-margin-right",paraId:9,tocIndex:11},{value:"Medium rating, right margin",paraId:9,tocIndex:11},{value:"1px",paraId:9,tocIndex:11},{value:"--bui-rating-medium-margin-right",paraId:9,tocIndex:11},{value:"--large-margin-right",paraId:9,tocIndex:11},{value:"Large rating right margin",paraId:9,tocIndex:11},{value:"2px",paraId:9,tocIndex:11},{value:"--bui-rating-large-margin-right",paraId:9,tocIndex:11},{value:"--large-font-size",paraId:9,tocIndex:11},{value:"Large rating font size",paraId:9,tocIndex:11},{value:"22px",paraId:9,tocIndex:11},{value:"--bui-rating-large-font-size",paraId:9,tocIndex:11}]},98355:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:`Used to handle scenes of internal element scrolling, and encapsulates scrolling and event callbacks for scrolling to the beginning and end, as well as actively controlling its scrolling position
The mini program side directly uses Taro's ScrollView component, while the H5 side uses React to directly implement and align the input parameters.`,paraId:0,tocIndex:0},{value:"\u5C0F\u7A0B\u5E8F\u6587\u6863\u53C2\u8003\uFF1A",paraId:1,tocIndex:0},{value:"https://docs.taro.zone/docs/components/viewContainer/scroll-view",paraId:1,tocIndex:0},{value:"Pass in scrollX for horizontal scrolling",paraId:2,tocIndex:3},{value:`Use 'onCrollToLower' and 'onCrollToUpper' to receive callbacks for scrolling to the beginning and end
Pass in 'scrollTop'/'scrollLeft', 'scrollIntoView' to scroll to the corresponding coordinate/ID element`,paraId:3,tocIndex:4},{value:"attribute",paraId:4,tocIndex:5},{value:"explain",paraId:4,tocIndex:5},{value:"type",paraId:4,tocIndex:5},{value:"Default value",paraId:4,tocIndex:5},{value:"scrollX",paraId:4,tocIndex:5},{value:"Horizontal scrolling",paraId:4,tocIndex:5},{value:"boolean",paraId:4,tocIndex:5},{value:"false",paraId:4,tocIndex:5},{value:"scrollY",paraId:4,tocIndex:5},{value:"Vertical scrolling",paraId:4,tocIndex:5},{value:"boolean",paraId:4,tocIndex:5},{value:"false",paraId:4,tocIndex:5},{value:"upperThreshold",paraId:4,tocIndex:5},{value:"Trigger the threshold for onScrollToUpper",paraId:4,tocIndex:5},{value:"number",paraId:4,tocIndex:5},{value:"50",paraId:4,tocIndex:5},{value:"lowerThreshold",paraId:4,tocIndex:5},{value:"Trigger the threshold for onCrollToLower",paraId:4,tocIndex:5},{value:"number",paraId:4,tocIndex:5},{value:"50",paraId:4,tocIndex:5},{value:"scrollTop",paraId:4,tocIndex:5},{value:"Set vertical scrolling position",paraId:4,tocIndex:5},{value:"number",paraId:4,tocIndex:5},{value:"scrollLeft",paraId:4,tocIndex:5},{value:"Set the horizontal scrolling position",paraId:4,tocIndex:5},{value:"number",paraId:4,tocIndex:5},{value:"scrollIntoView",paraId:4,tocIndex:5},{value:"Scroll the element corresponding to Id into the viewport",paraId:4,tocIndex:5},{value:"string",paraId:4,tocIndex:5},{value:"scrollWithAnimation",paraId:4,tocIndex:5},{value:"Enable smooth scrolling",paraId:4,tocIndex:5},{value:"boolean",paraId:4,tocIndex:5},{value:"false",paraId:4,tocIndex:5},{value:"onScrollToUpper",paraId:4,tocIndex:5},{value:"The callback when scrolling to the top",paraId:4,tocIndex:5},{value:"event=>void",paraId:4,tocIndex:5},{value:"onScrollToLower",paraId:4,tocIndex:5},{value:"Callback when scrolling to the bottom",paraId:4,tocIndex:5},{value:"event=>void",paraId:4,tocIndex:5},{value:"onScroll",paraId:4,tocIndex:5},{value:"Callback during scrolling",paraId:4,tocIndex:5},{value:"event=>void",paraId:4,tocIndex:5},{value:"onTouchMove",paraId:4,tocIndex:5},{value:"Callback upon touch",paraId:4,tocIndex:5},{value:"event=>void",paraId:4,tocIndex:5}]},30930:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:`The Select component is used to collect user provided information from a list of options.
At present, the Select component only supports' single selection '. Please wait for us to unlock more features.`,paraId:0,tocIndex:0},{value:"By combining the 'SelectOption' components, the dropdown selection effect can be achieved.",paraId:1,tocIndex:2},{value:"Support configuring the default display content of the selection box through 'placeholder'.",paraId:2,tocIndex:3},{value:"Support initial selection value through the 'defaultValue' attribute.",paraId:3,tocIndex:4},{value:`Distinguish whether it is a controlled component by passing in 'value':
Under controlled circumstances, the business retrieves the control component value through 'onChange' callback;
Uncontrolled situations can obtain component values through 'inputRef';`,paraId:4,tocIndex:5},{value:`Provide the 'disabled' attribute to prohibit user operations.
You can disable all operations by setting 'disabled' on 'Select', or disable operations on a specific option by setting 'disabled' on 'SelectOption'.`,paraId:5,tocIndex:6},{value:"The following is an example of a customized Select component.",paraId:6,tocIndex:7},{value:"Provide the ability to customize icons, which can be customized through the 'icon' attribute.",paraId:7,tocIndex:8},{value:"When you do not want to use 'label' as an option 'SelectOptions' to display content, you can customize the option display content through' children '.",paraId:8,tocIndex:9},{value:"Label 'supports the' ReactNode 'type. When you want to customize the display content of the selector' Select ', you can use the' SelectOption 'component properties:' label 'and' children ', and use them together to achieve customization.",paraId:9,tocIndex:10},{value:"The Select component not only provides basic 'onChange' callbacks, but also event callbacks for options such as' unfold 'and' collapse '.",paraId:10,tocIndex:11},{value:"attribute",paraId:11,tocIndex:13},{value:"explain",paraId:11,tocIndex:13},{value:"type",paraId:11,tocIndex:13},{value:"Default value",paraId:11,tocIndex:13},{value:"inputRef",paraId:11,tocIndex:13},{value:"Selector inputRef",paraId:11,tocIndex:13},{value:"Ref",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"inputProps",paraId:11,tocIndex:13},{value:"selector ",paraId:11,tocIndex:13},{value:"<input/>",paraId:11,tocIndex:13},{value:" Tag transparent attribute",paraId:11,tocIndex:13},{value:"React.InputHTMLAttributes",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"BackdropProps",paraId:11,tocIndex:13},{value:"Mask layer ",paraId:11,tocIndex:13},{value:"<Backdrop/>",paraId:11,tocIndex:13},{value:" Tag transparent attribute",paraId:11,tocIndex:13},{value:"React.DivHTMLAttributes",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"name",paraId:11,tocIndex:13},{value:"selector ",paraId:11,tocIndex:13},{value:"<input/>",paraId:11,tocIndex:13},{value:" Label name identification",paraId:11,tocIndex:13},{value:"string",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"value",paraId:11,tocIndex:13},{value:"Select value with selector",paraId:11,tocIndex:13},{value:"string \uFF5C number",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"defaultValue",paraId:11,tocIndex:13},{value:"Selector default value",paraId:11,tocIndex:13},{value:"string \uFF5C number",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"placeholder",paraId:11,tocIndex:13},{value:"Selector placeholder content",paraId:11,tocIndex:13},{value:"ReactNode",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"icon",paraId:11,tocIndex:13},{value:"Selector icon",paraId:11,tocIndex:13},{value:"ReactNode",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"disabled",paraId:11,tocIndex:13},{value:"Is the selector clickable",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"false",paraId:11,tocIndex:13},{value:"open",paraId:11,tocIndex:13},{value:"Is the selector dropdown option enabled",paraId:11,tocIndex:13},{value:"boolean",paraId:11,tocIndex:13},{value:"false",paraId:11,tocIndex:13},{value:"onChange",paraId:11,tocIndex:13},{value:"The callback when selecting a certain item",paraId:11,tocIndex:13},{value:"(e:SyntheticEvent, data:{value:string}) => void",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"onOpen",paraId:11,tocIndex:13},{value:"Callback when expanding dropdown menu",paraId:11,tocIndex:13},{value:"() => void",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"onClose",paraId:11,tocIndex:13},{value:"Callback when folding dropdown menu",paraId:11,tocIndex:13},{value:"() => void",paraId:11,tocIndex:13},{value:"-",paraId:11,tocIndex:13},{value:"attribute",paraId:12,tocIndex:14},{value:"explain",paraId:12,tocIndex:14},{value:"type",paraId:12,tocIndex:14},{value:"Default value",paraId:12,tocIndex:14},{value:"label",paraId:12,tocIndex:14},{value:"Option backfill content",paraId:12,tocIndex:14},{value:"ReactNode",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"value",paraId:12,tocIndex:14},{value:"Option value",paraId:12,tocIndex:14},{value:"string \uFF5C number",paraId:12,tocIndex:14},{value:"-",paraId:12,tocIndex:14},{value:"disabled",paraId:12,tocIndex:14},{value:"Options are clickable",paraId:12,tocIndex:14},{value:"boolean",paraId:12,tocIndex:14},{value:"false",paraId:12,tocIndex:14},{value:"attribute",paraId:13,tocIndex:15},{value:"explain",paraId:13,tocIndex:15},{value:"Default value",paraId:13,tocIndex:15},{value:"global variable",paraId:13,tocIndex:15},{value:"--height",paraId:13,tocIndex:15},{value:"Selector height",paraId:13,tocIndex:15},{value:"27px",paraId:13,tocIndex:15},{value:"--bui-select-height",paraId:13,tocIndex:15},{value:"--mini-width",paraId:13,tocIndex:15},{value:"Minimum width selector",paraId:13,tocIndex:15},{value:"100px",paraId:13,tocIndex:15},{value:"--bui-select-mini-width",paraId:13,tocIndex:15},{value:"--font-size",paraId:13,tocIndex:15},{value:"Select font size",paraId:13,tocIndex:15},{value:"var(--bui-title-size-3)",paraId:13,tocIndex:15},{value:"--bui-select-font-size",paraId:13,tocIndex:15},{value:"--padding",paraId:13,tocIndex:15},{value:"Selector margin",paraId:13,tocIndex:15},{value:"100px",paraId:13,tocIndex:15},{value:"--bui-select-mini-width",paraId:13,tocIndex:15},{value:"--option-container-padding",paraId:13,tocIndex:15},{value:"Overall inner margin of dropdown box",paraId:13,tocIndex:15},{value:"3px 0",paraId:13,tocIndex:15},{value:"--bui-select-option-container-padding",paraId:13,tocIndex:15},{value:"--option-container-margin-top",paraId:13,tocIndex:15},{value:"The overall top margin of the dropdown box",paraId:13,tocIndex:15},{value:"6px",paraId:13,tocIndex:15},{value:"--bui-select-option-margin-top",paraId:13,tocIndex:15},{value:"--option-padding",paraId:13,tocIndex:15},{value:"Dropdown box single option margin",paraId:13,tocIndex:15},{value:"0 14px",paraId:13,tocIndex:15},{value:"--bui-select-option-padding",paraId:13,tocIndex:15},{value:"--option-margin",paraId:13,tocIndex:15},{value:"Dropdown box single option margin",paraId:13,tocIndex:15},{value:"0 3px",paraId:13,tocIndex:15},{value:"--bui-select-option-margin",paraId:13,tocIndex:15},{value:"--option-height",paraId:13,tocIndex:15},{value:"Drop down box for individual option height",paraId:13,tocIndex:15},{value:"27px",paraId:13,tocIndex:15},{value:"--bui-select-option-height",paraId:13,tocIndex:15}]},51514:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"Provide a placeholder graphic combination at the location where content needs to be loaded.",paraId:0,tocIndex:0},{value:"Use 'width' and 'height' to set the width and height.",paraId:1,tocIndex:2},{value:"The component supports four variants:",paraId:2,tocIndex:3},{value:"Text '(default): It can automatically adjust the size based on' font size '.",paraId:3,tocIndex:3},{value:"Circular, rectangular, rounded: can be resized based on width and height.",paraId:4,tocIndex:3},{value:"The default is' wave '. You can set different animations based on 'animation' or completely disable it.",paraId:5,tocIndex:4},{value:"Different combinations of graphics can be used.",paraId:6,tocIndex:5},{value:"You can set the size based on the 'height' and 'width' properties of 'style'.",paraId:7,tocIndex:6},{value:"attribute",paraId:8,tocIndex:7},{value:"explain",paraId:8,tocIndex:7},{value:"type",paraId:8,tocIndex:7},{value:"Default value",paraId:8,tocIndex:7},{value:"animation",paraId:8,tocIndex:7},{value:"Animation effects",paraId:8,tocIndex:7},{value:"wave",paraId:8,tocIndex:7},{value:" |",paraId:8,tocIndex:7},{value:"pulse",paraId:8,tocIndex:7},{value:" |",paraId:8,tocIndex:7},{value:"false",paraId:8,tocIndex:7},{value:"wave",paraId:8,tocIndex:7},{value:"variant",paraId:8,tocIndex:7},{value:"Presentation format",paraId:8,tocIndex:7},{value:"text",paraId:8,tocIndex:7},{value:" |",paraId:8,tocIndex:7},{value:"circular",paraId:8,tocIndex:7},{value:" |",paraId:8,tocIndex:7},{value:"rectangular",paraId:8,tocIndex:7},{value:" |",paraId:8,tocIndex:7},{value:"rounded",paraId:8,tocIndex:7},{value:"text",paraId:8,tocIndex:7},{value:"width",paraId:8,tocIndex:7},{value:"Occupation width",paraId:8,tocIndex:7},{value:"string",paraId:8,tocIndex:7},{value:" |",paraId:8,tocIndex:7},{value:"number",paraId:8,tocIndex:7},{value:"100%",paraId:8,tocIndex:7},{value:"height",paraId:8,tocIndex:7},{value:"Occupation height",paraId:8,tocIndex:7},{value:"string",paraId:8,tocIndex:7},{value:" |",paraId:8,tocIndex:7},{value:"number ",paraId:8,tocIndex:7},{value:"16px",paraId:8,tocIndex:7},{value:"attribute",paraId:9,tocIndex:8},{value:"explain",paraId:9,tocIndex:8},{value:"Default value",paraId:9,tocIndex:8},{value:"global variable",paraId:9,tocIndex:8},{value:"--height",paraId:9,tocIndex:8},{value:"Skeleton screen height",paraId:9,tocIndex:8},{value:"1.2em",paraId:9,tocIndex:8},{value:"--bui-skeleton-height",paraId:9,tocIndex:8}]},41055:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:`Basic slide in/slide out animation using Transition encapsulation.
Considering the compatibility of mini programs, slide along one edge of the element itself instead of the screen edge.`,paraId:0,tocIndex:0},{value:`The Slide component supports four sliding directions, which are passed in through the 'direction' parameter
The component itself only handles the displacement of internal elements, and you may need to add external styles such as' overflow: midden 'by yourself`,paraId:1,tocIndex:2},{value:`When both 'append' and 'in' are 'true'
The component will immediately play an animation when mounted`,paraId:2,tocIndex:3},{value:"Slide inherits from Transition. Other properties can be found in Transition (/ores/transition)",paraId:3,tocIndex:4},{value:"attribute",paraId:4,tocIndex:5},{value:"explain",paraId:4,tocIndex:5},{value:"type",paraId:4,tocIndex:5},{value:"Default value",paraId:4,tocIndex:5},{value:"in",paraId:4,tocIndex:5},{value:"Do you want to enter",paraId:4,tocIndex:5},{value:"boolean",paraId:4,tocIndex:5},{value:"false",paraId:4,tocIndex:5},{value:"appear",paraId:4,tocIndex:5},{value:"Whether to play animation during mounting",paraId:4,tocIndex:5},{value:"boolean",paraId:4,tocIndex:5},{value:"false",paraId:4,tocIndex:5},{value:"direction",paraId:4,tocIndex:5},{value:"Sliding direction",paraId:4,tocIndex:5},{value:'"up"|"down"|"left"|"right"',paraId:4,tocIndex:5},{value:"timeout",paraId:4,tocIndex:5},{value:"Animation time configuration",paraId:4,tocIndex:5},{value:"number |{appear, enter, exit}",paraId:4,tocIndex:5},{value:"-",paraId:4,tocIndex:5},{value:"delay",paraId:4,tocIndex:5},{value:"Animation Delay Configuration",paraId:4,tocIndex:5},{value:"number |{appear, enter, exit}",paraId:4,tocIndex:5},{value:"-",paraId:4,tocIndex:5},{value:"enter",paraId:4,tocIndex:5},{value:"Do you want to play the animation",paraId:4,tocIndex:5},{value:"boolean",paraId:4,tocIndex:5},{value:"true",paraId:4,tocIndex:5},{value:"exit",paraId:4,tocIndex:5},{value:"Do you want to play the exit animation",paraId:4,tocIndex:5},{value:"boolean",paraId:4,tocIndex:5},{value:"true",paraId:4,tocIndex:5},{value:"mountOnEnter",paraId:4,tocIndex:5},{value:"Mount children on first entry",paraId:4,tocIndex:5},{value:"boolean",paraId:4,tocIndex:5},{value:"false",paraId:4,tocIndex:5},{value:"unmountOnExit",paraId:4,tocIndex:5},{value:"Uninstall children upon exit",paraId:4,tocIndex:5},{value:"boolean",paraId:4,tocIndex:5},{value:"false",paraId:4,tocIndex:5},{value:"onEnter",paraId:4,tocIndex:5},{value:"The callback before entering the beginning",paraId:4,tocIndex:5},{value:"node=>void",paraId:4,tocIndex:5},{value:"-",paraId:4,tocIndex:5},{value:"onEntering",paraId:4,tocIndex:5},{value:"The callback after entering the beginning",paraId:4,tocIndex:5},{value:"node=>void",paraId:4,tocIndex:5},{value:"-",paraId:4,tocIndex:5},{value:"onEntered",paraId:4,tocIndex:5},{value:"Enter the completed callback",paraId:4,tocIndex:5},{value:"node=>void",paraId:4,tocIndex:5},{value:"-",paraId:4,tocIndex:5},{value:"onExit",paraId:4,tocIndex:5},{value:"Callback before exit starts",paraId:4,tocIndex:5},{value:"node=>void",paraId:4,tocIndex:5},{value:"-",paraId:4,tocIndex:5},{value:"onExiting",paraId:4,tocIndex:5},{value:"Callback after exit starts",paraId:4,tocIndex:5},{value:"node=>void",paraId:4,tocIndex:5},{value:"-",paraId:4,tocIndex:5},{value:"onExited",paraId:4,tocIndex:5},{value:"Exit completed callback",paraId:4,tocIndex:5},{value:"node=>void",paraId:4,tocIndex:5},{value:"-",paraId:4,tocIndex:5},{value:"easing",paraId:4,tocIndex:5},{value:"Transition limiting function",paraId:4,tocIndex:5},{value:"string |{enter, exit}",paraId:4,tocIndex:5},{value:"-",paraId:4,tocIndex:5}]},74081:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"Slide the input bar to select a value within a given range.",paraId:0,tocIndex:0},{value:"Use 'value' and 'onChange' to control the sliding input bar.",paraId:1,tocIndex:2},{value:"Use 'min' and 'max' to slide and limit the value range of the input bar.",paraId:2,tocIndex:3},{value:"The step size can be customized through 'step', which should be an integer multiple of max min.",paraId:3,tocIndex:4},{value:"Enable 'tipVisible', the prompt bubble will always be displayed, otherwise it will only be displayed when sliding.",paraId:4,tocIndex:5},{value:"When the type of 'value' or 'defaultValue' is' [number, number] ', the double slider mode will be enabled.",paraId:5,tocIndex:6},{value:"When using a double slider, you can use 'disableSwap' to disable the front and back buttons from interlocking.",paraId:6,tocIndex:7},{value:"The front button icon can be customized through 'startIcon', and the back button icon can be customized through 'endIcon'.",paraId:7,tocIndex:8},{value:"Use 'disabled' to disable the component.",paraId:8,tocIndex:9},{value:"Use 'tooltipRender' to customize prompt bubbles.",paraId:9,tocIndex:10},{value:"attribute",paraId:10,tocIndex:11},{value:"explain",paraId:10,tocIndex:11},{value:"type",paraId:10,tocIndex:11},{value:"Default value",paraId:10,tocIndex:11},{value:"defaultValue",paraId:10,tocIndex:11},{value:"Set initial value, to be used when the component is uncontrolled",paraId:10,tocIndex:11},{value:"number |[number, number]",paraId:10,tocIndex:11},{value:"-",paraId:10,tocIndex:11},{value:"value",paraId:10,tocIndex:11},{value:"Set the current value to be used when the component is controlled",paraId:10,tocIndex:11},{value:"number |[number, number]",paraId:10,tocIndex:11},{value:"-",paraId:10,tocIndex:11},{value:"min",paraId:10,tocIndex:11},{value:"minimum value",paraId:10,tocIndex:11},{value:"number",paraId:10,tocIndex:11},{value:"0",paraId:10,tocIndex:11},{value:"max",paraId:10,tocIndex:11},{value:"Maximum value",paraId:10,tocIndex:11},{value:"number",paraId:10,tocIndex:11},{value:"100",paraId:10,tocIndex:11},{value:"step",paraId:10,tocIndex:11},{value:"Step size, the value must be greater than 0 and divisible by (max min)",paraId:10,tocIndex:11},{value:"number",paraId:10,tocIndex:11},{value:"1",paraId:10,tocIndex:11},{value:"tipVisible",paraId:10,tocIndex:11},{value:"Prompt whether bubbles are always visible",paraId:10,tocIndex:11},{value:"boolean",paraId:10,tocIndex:11},{value:"false",paraId:10,tocIndex:11},{value:"tooltipRender",paraId:10,tocIndex:11},{value:"Customize prompt bubbles",paraId:10,tocIndex:11},{value:"(value: number) => React.ReactNode",paraId:10,tocIndex:11},{value:"-",paraId:10,tocIndex:11},{value:"disabled",paraId:10,tocIndex:11},{value:"Do you want to disable it",paraId:10,tocIndex:11},{value:"boolean",paraId:10,tocIndex:11},{value:"false",paraId:10,tocIndex:11},{value:"startIcon",paraId:10,tocIndex:11},{value:"Start icon",paraId:10,tocIndex:11},{value:"React.ReactNode",paraId:10,tocIndex:11},{value:"-",paraId:10,tocIndex:11},{value:"endIcon",paraId:10,tocIndex:11},{value:"End icon",paraId:10,tocIndex:11},{value:"React.ReactNode",paraId:10,tocIndex:11},{value:"-",paraId:10,tocIndex:11},{value:"disableSwap",paraId:10,tocIndex:11},{value:"Prohibit interleaving of start and end icons",paraId:10,tocIndex:11},{value:"boolean",paraId:10,tocIndex:11},{value:"false",paraId:10,tocIndex:11},{value:"onChange",paraId:10,tocIndex:11},{value:"Callback when changing",paraId:10,tocIndex:11},{value:"(event: React.SyntheticEvent,data: {value: SliderValue;buttonIndex: number}) => void",paraId:10,tocIndex:11},{value:"-",paraId:10,tocIndex:11},{value:"attribute",paraId:11,tocIndex:12},{value:"explain",paraId:11,tocIndex:12},{value:"Default value",paraId:11,tocIndex:12},{value:"global variable",paraId:11,tocIndex:12},{value:"--line-color",paraId:11,tocIndex:12},{value:"Line foreground scenery",paraId:11,tocIndex:12},{value:"--bui-color-primary",paraId:11,tocIndex:12},{value:"--bui-slider-line-color",paraId:11,tocIndex:12},{value:"--line-bg-color",paraId:11,tocIndex:12},{value:"Line background color",paraId:11,tocIndex:12},{value:"--bui-color-border-default",paraId:11,tocIndex:12},{value:"--bui-slider-line-bg-color",paraId:11,tocIndex:12},{value:"--width",paraId:11,tocIndex:12},{value:"Sliding input bar width",paraId:11,tocIndex:12},{value:"100%",paraId:11,tocIndex:12},{value:"--bui-slider-width",paraId:11,tocIndex:12},{value:"--height",paraId:11,tocIndex:12},{value:"Sliding input bar height",paraId:11,tocIndex:12},{value:"2px",paraId:11,tocIndex:12},{value:"--bui-slider-height",paraId:11,tocIndex:12},{value:"--padding",paraId:11,tocIndex:12},{value:"Slide the inner margin of the input bar",paraId:11,tocIndex:12},{value:"19px 0",paraId:11,tocIndex:12},{value:"--bui-slider-padding",paraId:11,tocIndex:12},{value:"--button-width",paraId:11,tocIndex:12},{value:"Sliding button width",paraId:11,tocIndex:12},{value:"100%",paraId:11,tocIndex:12},{value:"--bui-slider-button-width",paraId:11,tocIndex:12},{value:"--button-height",paraId:11,tocIndex:12},{value:"Slide button height",paraId:11,tocIndex:12},{value:"2px",paraId:11,tocIndex:12},{value:"--bui-slider-button-height",paraId:11,tocIndex:12},{value:"--button-font-size",paraId:11,tocIndex:12},{value:"Font size of sliding button",paraId:11,tocIndex:12},{value:"--bui-title-size-3",paraId:11,tocIndex:12},{value:"--bui-slider-button-font-size",paraId:11,tocIndex:12},{value:"--button-border-radius",paraId:11,tocIndex:12},{value:"Sliding button border rounded corner",paraId:11,tocIndex:12},{value:"50%",paraId:11,tocIndex:12},{value:"--bui-slider-button-border-radius",paraId:11,tocIndex:12},{value:"--tooltip-font-size",paraId:11,tocIndex:12},{value:"Prompt for bubble font size",paraId:11,tocIndex:12},{value:"--bui-text-size-3",paraId:11,tocIndex:12},{value:"--bui-tooltip-font-size",paraId:11,tocIndex:12},{value:"--tooltip-color",paraId:11,tocIndex:12},{value:"Prompt bubble font color",paraId:11,tocIndex:12},{value:"--bui-color-white",paraId:11,tocIndex:12},{value:"--bui-tooltip-color",paraId:11,tocIndex:12},{value:"--tooltip-bg-color",paraId:11,tocIndex:12},{value:"Prompt bubble background color",paraId:11,tocIndex:12},{value:"--line-color",paraId:11,tocIndex:12},{value:"--bui-tooltip-bg-color",paraId:11,tocIndex:12},{value:"--tooltip-width",paraId:11,tocIndex:12},{value:"Prompt bubble width",paraId:11,tocIndex:12},{value:"46px",paraId:11,tocIndex:12},{value:"--bui-slider-tooltip-width",paraId:11,tocIndex:12},{value:"--tooltip-height",paraId:11,tocIndex:12},{value:"Prompt bubble height",paraId:11,tocIndex:12},{value:"24px",paraId:11,tocIndex:12},{value:"--bui-slider-tooltip-height",paraId:11,tocIndex:12},{value:"--tooltip-line-height",paraId:11,tocIndex:12},{value:"Prompt bubble height",paraId:11,tocIndex:12},{value:"24px",paraId:11,tocIndex:12},{value:"--bui-slider-tooltip-line-height",paraId:11,tocIndex:12},{value:"--tooltip-border-radius",paraId:11,tocIndex:12},{value:"Prompt bubble border rounded corners",paraId:11,tocIndex:12},{value:"24px",paraId:11,tocIndex:12},{value:"--bui-slider-tooltip-border-radius",paraId:11,tocIndex:12}]},16639:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"Stack is a container component used to control the vertical or horizontal arrangement of elements.",paraId:0,tocIndex:0},{value:`You can control the vertical/horizontal distribution of child nodes through the 'direction' attribute.
You can also control the alignment of child nodes on the main/cross axis through 'alignItem' and 'justifyContent'.
In addition, you can also control the spacing between child nodes through 'spacing'.
The example document is as follows:`,paraId:1,tocIndex:2},{value:"By using the 'divide' attribute, you can insert an element between each child element.",paraId:2,tocIndex:4},{value:"attribute",paraId:3,tocIndex:6},{value:"explain",paraId:3,tocIndex:6},{value:"type",paraId:3,tocIndex:6},{value:"Default value",paraId:3,tocIndex:6},{value:"direction",paraId:3,tocIndex:6},{value:"Set the vertical/horizontal distribution of child nodes",paraId:3,tocIndex:6},{value:"row",paraId:3,tocIndex:6},{value:" \uFF5C ",paraId:3,tocIndex:6},{value:"row-reverse",paraId:3,tocIndex:6},{value:" \uFF5C ",paraId:3,tocIndex:6},{value:"column",paraId:3,tocIndex:6},{value:" \uFF5C ",paraId:3,tocIndex:6},{value:"column-reverse",paraId:3,tocIndex:6},{value:"column",paraId:3,tocIndex:6},{value:"alignItems",paraId:3,tocIndex:6},{value:"Cross axis alignment method",paraId:3,tocIndex:6},{value:"flex-start",paraId:3,tocIndex:6},{value:" \uFF5C ",paraId:3,tocIndex:6},{value:"center",paraId:3,tocIndex:6},{value:"\uFF5C ",paraId:3,tocIndex:6},{value:"flex-end",paraId:3,tocIndex:6},{value:"\uFF5C ",paraId:3,tocIndex:6},{value:"stretch",paraId:3,tocIndex:6},{value:" \uFF5C",paraId:3,tocIndex:6},{value:"baseline",paraId:3,tocIndex:6},{value:"center",paraId:3,tocIndex:6},{value:"justifyContent",paraId:3,tocIndex:6},{value:"Alignment method on the spindle",paraId:3,tocIndex:6},{value:"flex-start",paraId:3,tocIndex:6},{value:" \uFF5C ",paraId:3,tocIndex:6},{value:"center",paraId:3,tocIndex:6},{value:" \uFF5C ",paraId:3,tocIndex:6},{value:"flex-end",paraId:3,tocIndex:6},{value:" \uFF5C ",paraId:3,tocIndex:6},{value:"space-between",paraId:3,tocIndex:6},{value:" \uFF5C",paraId:3,tocIndex:6},{value:"space-around",paraId:3,tocIndex:6},{value:" \uFF5C",paraId:3,tocIndex:6},{value:"space-evenly",paraId:3,tocIndex:6},{value:"center",paraId:3,tocIndex:6},{value:"flexWrap",paraId:3,tocIndex:6},{value:"Exceeding line break",paraId:3,tocIndex:6},{value:"wrap",paraId:3,tocIndex:6},{value:" \uFF5C ",paraId:3,tocIndex:6},{value:"nowrap",paraId:3,tocIndex:6},{value:"\uFF5C ",paraId:3,tocIndex:6},{value:"wrap-reverse",paraId:3,tocIndex:6},{value:"nowrap",paraId:3,tocIndex:6},{value:"spacing",paraId:3,tocIndex:6},{value:"Set the spacing between child nodes",paraId:3,tocIndex:6},{value:"string",paraId:3,tocIndex:6},{value:"-",paraId:3,tocIndex:6},{value:"divider",paraId:3,tocIndex:6},{value:"Split line, allowing insertion of an element between each child node",paraId:3,tocIndex:6},{value:"ReactNode \uFF5C boolean",paraId:3,tocIndex:6},{value:"false",paraId:3,tocIndex:6}]},80524:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"Step flow navigation bar.",paraId:0,tocIndex:0},{value:"The default direction is vertical. If no current is specified, it defaults to 0, which is the first step",paraId:1,tocIndex:2},{value:"Change the direction of the step bar through 'direction'",paraId:2,tocIndex:3},{value:"If there is a subtitle, its display position can be changed through 'labelPlacement'",paraId:3,tocIndex:4},{value:"Enter 'description' to add a description.",paraId:4,tocIndex:5},{value:"The step status can be controlled through status, with 'wait' indicating waiting, 'active' indicating current activation, 'finish' indicating completed, and 'error' indicating failed completion",paraId:5,tocIndex:6},{value:"You can customize the icons for each state through 'icon'.",paraId:6,tocIndex:7},{value:"Make the step table non clickable through 'disabled'",paraId:7,tocIndex:8},{value:"Component styles can be changed through commonly used CSS variables",paraId:8,tocIndex:10},{value:"attribute",paraId:9,tocIndex:12},{value:"explain",paraId:9,tocIndex:12},{value:"type",paraId:9,tocIndex:12},{value:"Default value",paraId:9,tocIndex:12},{value:"current",paraId:9,tocIndex:12},{value:"Specify the current step, counting from 0. In the sub Step element, the status attribute can be used to override the status",paraId:9,tocIndex:12},{value:"number",paraId:9,tocIndex:12},{value:"0",paraId:9,tocIndex:12},{value:"direction",paraId:9,tocIndex:12},{value:"Step bar direction",paraId:9,tocIndex:12},{value:"horizontal",paraId:9,tocIndex:12},{value:" |",paraId:9,tocIndex:12},{value:"vertical",paraId:9,tocIndex:12},{value:"vertical",paraId:9,tocIndex:12},{value:"labelPlacement",paraId:9,tocIndex:12},{value:"Specify label placement location",paraId:9,tocIndex:12},{value:"horizontal",paraId:9,tocIndex:12},{value:" |",paraId:9,tocIndex:12},{value:"vertical",paraId:9,tocIndex:12},{value:"horizontal",paraId:9,tocIndex:12},{value:"onChange",paraId:9,tocIndex:12},{value:"Triggered when clicking to switch steps",paraId:9,tocIndex:12},{value:"(ev?: SyntheticEvent,data?: { current: number }) =>void",paraId:9,tocIndex:12},{value:"-",paraId:9,tocIndex:12},{value:"attribute",paraId:10,tocIndex:13},{value:"explain",paraId:10,tocIndex:13},{value:"type",paraId:10,tocIndex:13},{value:"Default value",paraId:10,tocIndex:13},{value:"title",paraId:10,tocIndex:13},{value:"title",paraId:10,tocIndex:13},{value:"React.ReactNode",paraId:10,tocIndex:13},{value:"-",paraId:10,tocIndex:13},{value:"subtitle",paraId:10,tocIndex:13},{value:"Subtitle",paraId:10,tocIndex:13},{value:"React.ReactNode",paraId:10,tocIndex:13},{value:"-",paraId:10,tocIndex:13},{value:"description",paraId:10,tocIndex:13},{value:"Detailed description of steps",paraId:10,tocIndex:13},{value:"React.ReactNode",paraId:10,tocIndex:13},{value:"-",paraId:10,tocIndex:13},{value:"icon",paraId:10,tocIndex:13},{value:"Step icon",paraId:10,tocIndex:13},{value:"React.ReactNode",paraId:10,tocIndex:13},{value:"-",paraId:10,tocIndex:13},{value:"status",paraId:10,tocIndex:13},{value:"The status of the current step",paraId:10,tocIndex:13},{value:"wait",paraId:10,tocIndex:13},{value:" |",paraId:10,tocIndex:13},{value:"active",paraId:10,tocIndex:13},{value:" |",paraId:10,tocIndex:13},{value:"finish",paraId:10,tocIndex:13},{value:" |",paraId:10,tocIndex:13},{value:"error",paraId:10,tocIndex:13},{value:"active",paraId:10,tocIndex:13},{value:"disabled",paraId:10,tocIndex:13},{value:"Do you want to prohibit clicking",paraId:10,tocIndex:13},{value:"boolean",paraId:10,tocIndex:13},{value:"false",paraId:10,tocIndex:13},{value:"onClick",paraId:10,tocIndex:13},{value:"Step icon",paraId:10,tocIndex:13},{value:"(ev?: SyntheticEvent,data?: { current: number }) =>void",paraId:10,tocIndex:13},{value:"-",paraId:10,tocIndex:13},{value:"attribute",paraId:11,tocIndex:14},{value:"explain",paraId:11,tocIndex:14},{value:"Default value",paraId:11,tocIndex:14},{value:"global variable",paraId:11,tocIndex:14},{value:"--font-size",paraId:11,tocIndex:14},{value:"Default font size",paraId:11,tocIndex:14},{value:"--bui-title-size-3",paraId:11,tocIndex:14},{value:"--bui-steps-font-size",paraId:11,tocIndex:14},{value:"--subtitle-font-size",paraId:11,tocIndex:14},{value:"Subtitle font size",paraId:11,tocIndex:14},{value:"--bui-text-size-2",paraId:11,tocIndex:14},{value:"--bui-step-subtitle-font-size",paraId:11,tocIndex:14},{value:"--step-icon-margin",paraId:11,tocIndex:14},{value:"Step icon margin",paraId:11,tocIndex:14},{value:"--bui-spacing-xs --bui-spacing-xs 0 0",paraId:11,tocIndex:14},{value:"--bui-step-icon-margin",paraId:11,tocIndex:14},{value:"--step-line-padding",paraId:11,tocIndex:14},{value:"Step bar line inner margin",paraId:11,tocIndex:14},{value:"20px 0 3px 0",paraId:11,tocIndex:14},{value:"--bui-step-line-padding",paraId:11,tocIndex:14},{value:"--step-line-width",paraId:11,tocIndex:14},{value:"Step bar line width",paraId:11,tocIndex:14},{value:"1px",paraId:11,tocIndex:14},{value:"--bui-step-line-width",paraId:11,tocIndex:14},{value:"--step-line-height",paraId:11,tocIndex:14},{value:"Step bar line height",paraId:11,tocIndex:14},{value:"100%",paraId:11,tocIndex:14},{value:"--bui-step-line-height",paraId:11,tocIndex:14},{value:"--step-label-horizontal-line-height",paraId:11,tocIndex:14},{value:"Step bar label horizontal direction row height",paraId:11,tocIndex:14},{value:"1.8",paraId:11,tocIndex:14},{value:"--bui-step-label-horizontal-line-height",paraId:11,tocIndex:14},{value:"--step-icon-width",paraId:11,tocIndex:14},{value:"Step bar icon width",paraId:11,tocIndex:14},{value:"28px",paraId:11,tocIndex:14},{value:"--bui-step-icon-width",paraId:11,tocIndex:14},{value:"--step-icon-font-size",paraId:11,tocIndex:14},{value:"Step bar icon",paraId:11,tocIndex:14},{value:"var(--bui-title-size-4)",paraId:11,tocIndex:14},{value:"--bui-step-icon-font-size",paraId:11,tocIndex:14},{value:"--step-icon-active-width",paraId:11,tocIndex:14},{value:"Step Bar Current Activation Icon Width",paraId:11,tocIndex:14},{value:"12px",paraId:11,tocIndex:14},{value:"--bui-step-icon-active-width",paraId:11,tocIndex:14},{value:"--step-icon-active-height",paraId:11,tocIndex:14},{value:"Step bar current activation icon height",paraId:11,tocIndex:14},{value:"12px",paraId:11,tocIndex:14},{value:"--bui-step-icon-active-height",paraId:11,tocIndex:14},{value:"--step-icon-margin",paraId:11,tocIndex:14},{value:"Step bar icon margin",paraId:11,tocIndex:14},{value:"var(--bui-spacing-xs) var(--bui-spacing-xs) 0 0",paraId:11,tocIndex:14},{value:"--bui-step-icon-margin",paraId:11,tocIndex:14},{value:"--step-content-padding",paraId:11,tocIndex:14},{value:"Step bar content margin",paraId:11,tocIndex:14},{value:"3px 0",paraId:11,tocIndex:14},{value:"--bui-step-content-padding",paraId:11,tocIndex:14},{value:"--step-horizontal-line-padding",paraId:11,tocIndex:14},{value:"Step horizontal line padding",paraId:11,tocIndex:14},{value:"28px 0 6px",paraId:11,tocIndex:14},{value:"--bui-step-horizontal-line-padding",paraId:11,tocIndex:14}]},22277:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:`A slider view container used for creating commonly used layouts such as slideshows and pagination displays.
The mini program side directly used Taro's Swiper component, while the H5 side used Swiper/react and aligned the input parameters.`,paraId:0,tocIndex:0},{value:"Mini program documentation reference:< ",paraId:1,tocIndex:0},{value:"https://taro-docs.jd.com/docs/components/viewContainer/swiper",paraId:1,tocIndex:0},{value:" >",paraId:1,tocIndex:0},{value:"By embedding the SwiperItem into the Swiper, you can build a basic slider view container.",paraId:2,tocIndex:2},{value:`Pass in current to set the current page, which will trigger page switching when data changes.
If you need to be compatible with both sliding and current control, you also need to use the nChange event to synchronize the current page position.`,paraId:3,tocIndex:3},{value:`Pass in autoplay to enable automatic switching.
Use interval to control the interval time (in milliseconds) between two automatic switches.`,paraId:4,tocIndex:4},{value:"Passing in circular allows the container to roll infinitely in the same direction.",paraId:5,tocIndex:5},{value:"Pass in the effect parameter to select the switching effect.",paraId:6,tocIndex:6},{value:"Pass in vertical to make the container roll vertically (rather than horizontally).",paraId:7,tocIndex:7},{value:`Pass in the indicator dots to enable page indicators (small dots).
Use indicator Color and indicator ActiveColor to set the color of small dots.`,paraId:8,tocIndex:8},{value:`Support ONChange and onAnimationFinish events.
The specific return value is in the detail of the corresponding event object.`,paraId:9,tocIndex:9},{value:"attribute",paraId:10,tocIndex:10},{value:"explain",paraId:10,tocIndex:10},{value:"type",paraId:10,tocIndex:10},{value:"Default value",paraId:10,tocIndex:10},{value:"current",paraId:10,tocIndex:10},{value:"Current page index",paraId:10,tocIndex:10},{value:"number",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10},{value:"autoplay",paraId:10,tocIndex:10},{value:"Automatic switching",paraId:10,tocIndex:10},{value:"boolean",paraId:10,tocIndex:10},{value:"false",paraId:10,tocIndex:10},{value:"interval",paraId:10,tocIndex:10},{value:"Interval time for automatic switching",paraId:10,tocIndex:10},{value:"number",paraId:10,tocIndex:10},{value:"5000",paraId:10,tocIndex:10},{value:"duration",paraId:10,tocIndex:10},{value:"Switch animation time",paraId:10,tocIndex:10},{value:"number",paraId:10,tocIndex:10},{value:"500",paraId:10,tocIndex:10},{value:"displayMultipleItems",paraId:10,tocIndex:10},{value:"Number of images displayed on each screen",paraId:10,tocIndex:10},{value:"number",paraId:10,tocIndex:10},{value:"1",paraId:10,tocIndex:10},{value:"circular",paraId:10,tocIndex:10},{value:"Circular display",paraId:10,tocIndex:10},{value:"boolean",paraId:10,tocIndex:10},{value:"false",paraId:10,tocIndex:10},{value:"vertical",paraId:10,tocIndex:10},{value:"Vertical mode",paraId:10,tocIndex:10},{value:"boolean",paraId:10,tocIndex:10},{value:"false",paraId:10,tocIndex:10},{value:"spaceBetween",paraId:10,tocIndex:10},{value:"The distance between two sheets",paraId:10,tocIndex:10},{value:"number",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10},{value:"previousMargin",paraId:10,tocIndex:10},{value:"Leakage of the width (height) of the previous sheet",paraId:10,tocIndex:10},{value:"number |string",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10},{value:"nextMargin",paraId:10,tocIndex:10},{value:"Leakage of the width (height) of the next sheet",paraId:10,tocIndex:10},{value:"number |string",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10},{value:"indicatorDots",paraId:10,tocIndex:10},{value:"Page indicator (small dot)",paraId:10,tocIndex:10},{value:"boolean",paraId:10,tocIndex:10},{value:"false",paraId:10,tocIndex:10},{value:"indicatorColor",paraId:10,tocIndex:10},{value:"Page indicator is not the color of the current page",paraId:10,tocIndex:10},{value:"string",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10},{value:"indicatorActiveColor",paraId:10,tocIndex:10},{value:"Page indicator: The color of the current page",paraId:10,tocIndex:10},{value:"string",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10},{value:"onChange",paraId:10,tocIndex:10},{value:"Switching callback (triggered when releasing and switching)",paraId:10,tocIndex:10},{value:"event=>void",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10},{value:"onAnimationFinish",paraId:10,tocIndex:10},{value:"Animation end callback (triggered at the end of the animation)",paraId:10,tocIndex:10},{value:"event=>void",paraId:10,tocIndex:10},{value:"-",paraId:10,tocIndex:10},{value:"attribute",paraId:11,tocIndex:11},{value:"explain",paraId:11,tocIndex:11},{value:"Default value",paraId:11,tocIndex:11},{value:"global variable",paraId:11,tocIndex:11},{value:"--height",paraId:11,tocIndex:11},{value:"height",paraId:11,tocIndex:11},{value:"150px",paraId:11,tocIndex:11},{value:"--bui-swiper-height",paraId:11,tocIndex:11}]},37582:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"By simply tapping the button, users can trigger actions or make choices.",paraId:0,tocIndex:0},{value:"Basic usage of Switch. The default color for Switch is' primary ', and the default size is' medium'.",paraId:1,tocIndex:2},{value:"The Switch component provides 5 theme colors: primary, info, success, warning, and danger. The component theme color can be set through color The default value for the color attribute is' primary '.",paraId:2,tocIndex:4},{value:"The component size can be specified through 'size', with optional values including 'small', 'medium', and 'large'. The default is' medium '.",paraId:3,tocIndex:5},{value:"Customize status text or icons through 'checkedChildren' and 'uncheckedChildren'.",paraId:4,tocIndex:6},{value:"Customize component selection status through 'checked' and 'onChange'.",paraId:5,tocIndex:7},{value:"The input property passed through 'inputProps' can be passed transparently to the internal' input 'tag.",paraId:6,tocIndex:8},{value:"Specify 'Switch' as disabled through 'disabled'.",paraId:7,tocIndex:9},{value:"attribute",paraId:8,tocIndex:10},{value:"explain",paraId:8,tocIndex:10},{value:"type",paraId:8,tocIndex:10},{value:"Default value",paraId:8,tocIndex:10},{value:"checked",paraId:8,tocIndex:10},{value:"Selected or not",paraId:8,tocIndex:10},{value:"boolean",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"defaultChecked",paraId:8,tocIndex:10},{value:"Whether it is selected by default, used when the component is uncontrolled",paraId:8,tocIndex:10},{value:"boolean",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"inputRef",paraId:8,tocIndex:10},{value:"inside ",paraId:8,tocIndex:10},{value:"<input>",paraId:8,tocIndex:10},{value:" Label's ref",paraId:8,tocIndex:10},{value:"React.Ref<HTMLInputElement>",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"inputProps",paraId:8,tocIndex:10},{value:"inside ",paraId:8,tocIndex:10},{value:"<input>",paraId:8,tocIndex:10},{value:" Standard attributes of tags",paraId:8,tocIndex:10},{value:"React.InputHTMLAttributes<HTMLInputElement>",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"name",paraId:8,tocIndex:10},{value:"inside ",paraId:8,tocIndex:10},{value:"<input>",paraId:8,tocIndex:10},{value:" Name identification",paraId:8,tocIndex:10},{value:"string",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"checkedChildren",paraId:8,tocIndex:10},{value:"Content when selected",paraId:8,tocIndex:10},{value:"ReactNode",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"unCheckedChildren",paraId:8,tocIndex:10},{value:"Content when not selected",paraId:8,tocIndex:10},{value:"ReactNode",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"disabled",paraId:8,tocIndex:10},{value:"Do you want to disable it",paraId:8,tocIndex:10},{value:"boolean",paraId:8,tocIndex:10},{value:"false",paraId:8,tocIndex:10},{value:"size",paraId:8,tocIndex:10},{value:"size",paraId:8,tocIndex:10},{value:"small",paraId:8,tocIndex:10},{value:" |",paraId:8,tocIndex:10},{value:"medium",paraId:8,tocIndex:10},{value:" |",paraId:8,tocIndex:10},{value:"large",paraId:8,tocIndex:10},{value:"medium",paraId:8,tocIndex:10},{value:"color",paraId:8,tocIndex:10},{value:"colour",paraId:8,tocIndex:10},{value:"info",paraId:8,tocIndex:10},{value:" |",paraId:8,tocIndex:10},{value:"primary",paraId:8,tocIndex:10},{value:" |",paraId:8,tocIndex:10},{value:"success",paraId:8,tocIndex:10},{value:" |",paraId:8,tocIndex:10},{value:"warning",paraId:8,tocIndex:10},{value:" |",paraId:8,tocIndex:10},{value:"danger",paraId:8,tocIndex:10},{value:"primary",paraId:8,tocIndex:10},{value:"onChange",paraId:8,tocIndex:10},{value:"The callback function during changes",paraId:8,tocIndex:10},{value:"(e: React.SyntheticEvent,data: { checked: boolean;},) => void",paraId:8,tocIndex:10},{value:"-",paraId:8,tocIndex:10},{value:"[UNK][UNK]\u5C5E[UNK]\u89C1 ",paraId:9,tocIndex:10},{value:"label",paraId:9,tocIndex:10},{value:"attribute",paraId:10,tocIndex:11},{value:"explain",paraId:10,tocIndex:11},{value:"Default value",paraId:10,tocIndex:11},{value:"global variable",paraId:10,tocIndex:11},{value:"--bg-color",paraId:10,tocIndex:11},{value:"background color",paraId:10,tocIndex:11},{value:"#ccc",paraId:10,tocIndex:11},{value:"--bui-switch-bg-color",paraId:10,tocIndex:11},{value:"--padding",paraId:10,tocIndex:11},{value:"padding",paraId:10,tocIndex:11},{value:"0",paraId:10,tocIndex:11},{value:"--bui-switch-padding",paraId:10,tocIndex:11},{value:"--border-radius",paraId:10,tocIndex:11},{value:"fillet",paraId:10,tocIndex:11},{value:"15px",paraId:10,tocIndex:11},{value:"--bui-switch-border-radius",paraId:10,tocIndex:11},{value:"--small-width",paraId:10,tocIndex:11},{value:"Small switch width",paraId:10,tocIndex:11},{value:"24px",paraId:10,tocIndex:11},{value:"--bui-switch-small-width",paraId:10,tocIndex:11},{value:"--small-height",paraId:10,tocIndex:11},{value:"Small switch height",paraId:10,tocIndex:11},{value:"16px",paraId:10,tocIndex:11},{value:"--bui-switch-small-height",paraId:10,tocIndex:11},{value:"--small-font-size",paraId:10,tocIndex:11},{value:"fine print",paraId:10,tocIndex:11},{value:"9px",paraId:10,tocIndex:11},{value:"--bui-switch-small-font-size",paraId:10,tocIndex:11},{value:"--controller-small-width",paraId:10,tocIndex:11},{value:"Small control width",paraId:10,tocIndex:11},{value:"12px",paraId:10,tocIndex:11},{value:"--bui-switch-controller-small-width",paraId:10,tocIndex:11},{value:"--controller-small-height",paraId:10,tocIndex:11},{value:"Small control height",paraId:10,tocIndex:11},{value:"12px",paraId:10,tocIndex:11},{value:"--bui-switch-controller-small-height",paraId:10,tocIndex:11},{value:"--medium-width",paraId:10,tocIndex:11},{value:"Medium switch width",paraId:10,tocIndex:11},{value:"44px",paraId:10,tocIndex:11},{value:"--bui-switch-medium-width",paraId:10,tocIndex:11},{value:"--medium-height",paraId:10,tocIndex:11},{value:"Medium switch height",paraId:10,tocIndex:11},{value:"22px",paraId:10,tocIndex:11},{value:"--bui-switch-medium-height",paraId:10,tocIndex:11},{value:"--controller-medium-width",paraId:10,tocIndex:11},{value:"Medium control width",paraId:10,tocIndex:11},{value:"18px",paraId:10,tocIndex:11},{value:"--bui-switch-controller-medium-width",paraId:10,tocIndex:11},{value:"--controller-medium-height",paraId:10,tocIndex:11},{value:"Medium control height",paraId:10,tocIndex:11},{value:"18px",paraId:10,tocIndex:11},{value:"--bui-switch-controller-medium-height",paraId:10,tocIndex:11},{value:"--large-width",paraId:10,tocIndex:11},{value:"Large switch width",paraId:10,tocIndex:11},{value:"51px",paraId:10,tocIndex:11},{value:"--bui-switch-large-width",paraId:10,tocIndex:11},{value:"--large-height",paraId:10,tocIndex:11},{value:"Large switch height",paraId:10,tocIndex:11},{value:"30px",paraId:10,tocIndex:11},{value:"--bui-switch-large-height",paraId:10,tocIndex:11},{value:"--controller-large-width",paraId:10,tocIndex:11},{value:"Large control width",paraId:10,tocIndex:11},{value:"24px",paraId:10,tocIndex:11},{value:"--bui-switch-controller-large-width",paraId:10,tocIndex:11},{value:"--controller-large-height",paraId:10,tocIndex:11},{value:"Large control height",paraId:10,tocIndex:11},{value:"24px",paraId:10,tocIndex:11},{value:"--bui-switch-controller-large-height",paraId:10,tocIndex:11}]},65824:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"Bottom navigation bar, used to switch between different pages",paraId:0,tocIndex:0},{value:"Update the 'current' value change by listening to the 'onChange' event. The 'current' value is mandatory and the first element is selected by default.",paraId:1,tocIndex:2},{value:"You can customize the default icon and selected icon of TabBarItem through the 'icon' and 'activeIcon' properties",paraId:2,tocIndex:3},{value:"Support setting default theme colors and selecting theme colors through 'color' and 'activeColor' to achieve custom icon and font colors",paraId:3,tocIndex:4},{value:"Support setting the corresponding logo content for 'TabBarItem' through the BadgeProps property",paraId:4,tocIndex:5},{value:"attribute",paraId:5,tocIndex:7},{value:"explain",paraId:5,tocIndex:7},{value:"type",paraId:5,tocIndex:7},{value:"Default value",paraId:5,tocIndex:7},{value:"current",paraId:5,tocIndex:7},{value:"The currently selected tag index value",paraId:5,tocIndex:7},{value:"number",paraId:5,tocIndex:7},{value:"0",paraId:5,tocIndex:7},{value:"color",paraId:5,tocIndex:7},{value:"Default Theme Color",paraId:5,tocIndex:7},{value:"primary",paraId:5,tocIndex:7},{value:" |",paraId:5,tocIndex:7},{value:"info",paraId:5,tocIndex:7},{value:" |",paraId:5,tocIndex:7},{value:"success",paraId:5,tocIndex:7},{value:" |",paraId:5,tocIndex:7},{value:"warning",paraId:5,tocIndex:7},{value:" |",paraId:5,tocIndex:7},{value:"danger",paraId:5,tocIndex:7},{value:" |",paraId:5,tocIndex:7},{value:"default",paraId:5,tocIndex:7},{value:" |",paraId:5,tocIndex:7},{value:"vip",paraId:5,tocIndex:7},{value:"default",paraId:5,tocIndex:7},{value:"activeColor",paraId:5,tocIndex:7},{value:"Select theme color",paraId:5,tocIndex:7},{value:"primary",paraId:5,tocIndex:7},{value:" |",paraId:5,tocIndex:7},{value:"info",paraId:5,tocIndex:7},{value:" |",paraId:5,tocIndex:7},{value:"success",paraId:5,tocIndex:7},{value:" |",paraId:5,tocIndex:7},{value:"warning",paraId:5,tocIndex:7},{value:" |",paraId:5,tocIndex:7},{value:"danger",paraId:5,tocIndex:7},{value:" |",paraId:5,tocIndex:7},{value:"default",paraId:5,tocIndex:7},{value:" |",paraId:5,tocIndex:7},{value:"vip",paraId:5,tocIndex:7},{value:"primary",paraId:5,tocIndex:7},{value:"onChange",paraId:5,tocIndex:7},{value:"The callback when selecting a certain item",paraId:5,tocIndex:7},{value:"(e:SyntheticEvent, data:{value:number}) => void",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"attribute",paraId:6,tocIndex:8},{value:"explain",paraId:6,tocIndex:8},{value:"type",paraId:6,tocIndex:8},{value:"Default value",paraId:6,tocIndex:8},{value:"title",paraId:6,tocIndex:8},{value:"title",paraId:6,tocIndex:8},{value:"string",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"icon",paraId:6,tocIndex:8},{value:"Icon",paraId:6,tocIndex:8},{value:"ReactNode",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"activeIcon",paraId:6,tocIndex:8},{value:"Select icon",paraId:6,tocIndex:8},{value:"ReactNode",paraId:6,tocIndex:8},{value:"BadgeProps",paraId:6,tocIndex:8},{value:"logo",paraId:6,tocIndex:8},{value:"BadgeProps",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"attribute",paraId:7,tocIndex:10},{value:"explain",paraId:7,tocIndex:10},{value:"Default value",paraId:7,tocIndex:10},{value:"global variable",paraId:7,tocIndex:10},{value:"--width",paraId:7,tocIndex:10},{value:"width",paraId:7,tocIndex:10},{value:"100%",paraId:7,tocIndex:10},{value:"--bui-tab-bar-width",paraId:7,tocIndex:10},{value:"--height",paraId:7,tocIndex:10},{value:"height",paraId:7,tocIndex:10},{value:"50px",paraId:7,tocIndex:10},{value:"--bui-tab-bar-height",paraId:7,tocIndex:10},{value:"--padding",paraId:7,tocIndex:10},{value:"padding",paraId:7,tocIndex:10},{value:"6px 0",paraId:7,tocIndex:10},{value:"--bui-tab-bar-padding",paraId:7,tocIndex:10},{value:"attribute",paraId:8,tocIndex:11},{value:"explain",paraId:8,tocIndex:11},{value:"Default value",paraId:8,tocIndex:11},{value:"global variable",paraId:8,tocIndex:11},{value:"--tab-color",paraId:8,tocIndex:11},{value:"Text color",paraId:8,tocIndex:11},{value:"--bui-color-fg-default",paraId:8,tocIndex:11},{value:"--bui-tab-bar-default-color",paraId:8,tocIndex:11}]},35367:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"Tab switching component.",paraId:0,tocIndex:0},{value:"The mini program switches between using gradient animation for the bottom line of the tab and displacement animation for H5;",paraId:1,tocIndex:1},{value:"The mini program cannot move to the middle position of the view for tabs that are beyond scrollable when clicked to activate.",paraId:1,tocIndex:1},{value:"Complete layout with Tab component",paraId:2,tocIndex:3},{value:"Generate tabs using 'tabs'.",paraId:3,tocIndex:4},{value:"Disable Tab from triggering clicks through 'disabled'.",paraId:4,tocIndex:5},{value:"attribute",paraId:5,tocIndex:9},{value:"explain",paraId:5,tocIndex:9},{value:"type",paraId:5,tocIndex:9},{value:"Default value",paraId:5,tocIndex:9},{value:"value",paraId:5,tocIndex:9},{value:"The index value of the currently selected panel corresponds to tabs.index",paraId:5,tocIndex:9},{value:"string",paraId:5,tocIndex:9},{value:"-",paraId:5,tocIndex:9},{value:"tabs",paraId:5,tocIndex:9},{value:"Switch panel data",paraId:5,tocIndex:9},{value:"ITabItem[]",paraId:5,tocIndex:9},{value:"-",paraId:5,tocIndex:9},{value:"align",paraId:5,tocIndex:9},{value:"Alignment method",paraId:5,tocIndex:9},{value:"start",paraId:5,tocIndex:9},{value:" |",paraId:5,tocIndex:9},{value:"center",paraId:5,tocIndex:9},{value:"center",paraId:5,tocIndex:9},{value:"onChange",paraId:5,tocIndex:9},{value:"Switch panel callback",paraId:5,tocIndex:9},{value:"(e?: SyntheticEvent,data?:{index: string}) => void",paraId:5,tocIndex:9},{value:"-",paraId:5,tocIndex:9},{value:"attribute",paraId:6,tocIndex:10},{value:"explain",paraId:6,tocIndex:10},{value:"type",paraId:6,tocIndex:10},{value:"Default value",paraId:6,tocIndex:10},{value:"title",paraId:6,tocIndex:10},{value:"Panel Title",paraId:6,tocIndex:10},{value:"React.ReactNode",paraId:6,tocIndex:10},{value:"-",paraId:6,tocIndex:10},{value:"index",paraId:6,tocIndex:10},{value:"Index value of panel",paraId:6,tocIndex:10},{value:"string",paraId:6,tocIndex:10},{value:"-",paraId:6,tocIndex:10},{value:"disabled",paraId:6,tocIndex:10},{value:"Is the panel disabled",paraId:6,tocIndex:10},{value:"boolean",paraId:6,tocIndex:10},{value:"false",paraId:6,tocIndex:10},{value:"attribute",paraId:7,tocIndex:11},{value:"explain",paraId:7,tocIndex:11},{value:"type",paraId:7,tocIndex:11},{value:"Default value",paraId:7,tocIndex:11},{value:"index",paraId:7,tocIndex:11},{value:"Index value of panel",paraId:7,tocIndex:11},{value:"string",paraId:7,tocIndex:11},{value:"-",paraId:7,tocIndex:11},{value:"disabled",paraId:7,tocIndex:11},{value:"Is the panel disabled",paraId:7,tocIndex:11},{value:"boolean",paraId:7,tocIndex:11},{value:"false",paraId:7,tocIndex:11},{value:"onClick",paraId:7,tocIndex:11},{value:"Click on the callback of Tab",paraId:7,tocIndex:11},{value:"(e?: SyntheticEvent,data?:{index: string}) => void",paraId:7,tocIndex:11},{value:"-",paraId:7,tocIndex:11},{value:"attribute",paraId:8,tocIndex:12},{value:"explain",paraId:8,tocIndex:12},{value:"type",paraId:8,tocIndex:12},{value:"Default value",paraId:8,tocIndex:12},{value:"value",paraId:8,tocIndex:12},{value:"The value of the currently selected panel",paraId:8,tocIndex:12},{value:"string",paraId:8,tocIndex:12},{value:"-",paraId:8,tocIndex:12},{value:"index",paraId:8,tocIndex:12},{value:"Corresponding to the index in the data of the tab switching panel",paraId:8,tocIndex:12},{value:"string",paraId:8,tocIndex:12},{value:"-",paraId:8,tocIndex:12},{value:"keepMounted",paraId:8,tocIndex:12},{value:"Whether to render DOM structure when TabPanel is hidden",paraId:8,tocIndex:12},{value:"boolean",paraId:8,tocIndex:12},{value:"false",paraId:8,tocIndex:12},{value:"attribute",paraId:9,tocIndex:14},{value:"explain",paraId:9,tocIndex:14},{value:"Default value",paraId:9,tocIndex:14},{value:"global variable",paraId:9,tocIndex:14},{value:"--height",paraId:9,tocIndex:14},{value:"Tabs height",paraId:9,tocIndex:14},{value:"39px",paraId:9,tocIndex:14},{value:"--bui-tabs-height",paraId:9,tocIndex:14},{value:"--color",paraId:9,tocIndex:14},{value:"Font color",paraId:9,tocIndex:14},{value:"--bui-color-fg-subtle",paraId:9,tocIndex:14},{value:"--bui-tabs-color",paraId:9,tocIndex:14},{value:"--active-color",paraId:9,tocIndex:14},{value:"Activate Tab font color",paraId:9,tocIndex:14},{value:"--bui-color-fg-default",paraId:9,tocIndex:14},{value:"--bui-tabs-active-color",paraId:9,tocIndex:14},{value:"--line-width",paraId:9,tocIndex:14},{value:"Width of the lower marking line",paraId:9,tocIndex:14},{value:"18px",paraId:9,tocIndex:14},{value:"--bui-tabs-line-width",paraId:9,tocIndex:14},{value:"--line-height",paraId:9,tocIndex:14},{value:"Height of the lower marking line",paraId:9,tocIndex:14},{value:"3PX",paraId:9,tocIndex:14},{value:"--bui-tabs-line-height",paraId:9,tocIndex:14},{value:"--line-color",paraId:9,tocIndex:14},{value:"Color of the lower marking line",paraId:9,tocIndex:14},{value:"--bui-color-primary",paraId:9,tocIndex:14},{value:"--bui-tabs-line-color",paraId:9,tocIndex:14},{value:"--mask-width",paraId:9,tocIndex:14},{value:"Mask width",paraId:9,tocIndex:14},{value:"12px",paraId:9,tocIndex:14},{value:"--bui-tabs-mask-width",paraId:9,tocIndex:14},{value:"--mask-height",paraId:9,tocIndex:14},{value:"Mask height",paraId:9,tocIndex:14},{value:"100%",paraId:9,tocIndex:14},{value:"--bui-tabs-mask-height",paraId:9,tocIndex:14},{value:"attribute",paraId:10,tocIndex:15},{value:"explain",paraId:10,tocIndex:15},{value:"Default value",paraId:10,tocIndex:15},{value:"global variable",paraId:10,tocIndex:15},{value:"--height",paraId:10,tocIndex:15},{value:"Tab height",paraId:10,tocIndex:15},{value:"100%",paraId:10,tocIndex:15},{value:"--bui-tab-height",paraId:10,tocIndex:15},{value:"--padding",paraId:10,tocIndex:15},{value:"Tab inner margin",paraId:10,tocIndex:15},{value:"var(--bui-spacing-lg) var(--bui-spacing-lg) 10px",paraId:10,tocIndex:15},{value:"--bui-tab-padding",paraId:10,tocIndex:15},{value:"--font-size",paraId:10,tocIndex:15},{value:"Tab font size",paraId:10,tocIndex:15},{value:"--bui-text-size-1",paraId:10,tocIndex:15},{value:"--bui-tab-font-size",paraId:10,tocIndex:15}]},49028:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"Tags are usually used to mark or supplement a visual element.",paraId:0,tocIndex:0},{value:`The label supports three display modes: 'stroke', 'fill', and 'light', with the default being the stroke label.
Stroke label: a common form of white background with borders, which can be used in combination with fill buttons.
Fill in tags: Users need to focus on the highest priority tag on the entire page to guide them to pay attention.
Light Bright Label: The light bright mode is visually less emphasized than the fill label, and the background and text have the same theme color.`,paraId:1,tocIndex:2},{value:"Tag tags support defining themes such as' primary ',' success', 'info', 'warning', and 'danger'. If color is not set, it defaults to 'default'",paraId:2,tocIndex:3},{value:"In addition to using the theme colors we provide, you can also customize colors through the 'htmlColor' property.",paraId:3,tocIndex:4},{value:"In addition to a single tag tag, you can also combine the 'TagGroup' component to achieve combined tags.",paraId:4,tocIndex:5},{value:"attribute",paraId:5,tocIndex:7},{value:"explain",paraId:5,tocIndex:7},{value:"type",paraId:5,tocIndex:7},{value:"Default value",paraId:5,tocIndex:7},{value:"color",paraId:5,tocIndex:7},{value:"Tag Theme Color",paraId:5,tocIndex:7},{value:"primary",paraId:5,tocIndex:7},{value:" |",paraId:5,tocIndex:7},{value:"info",paraId:5,tocIndex:7},{value:" |",paraId:5,tocIndex:7},{value:"success",paraId:5,tocIndex:7},{value:" |",paraId:5,tocIndex:7},{value:"warning",paraId:5,tocIndex:7},{value:" |",paraId:5,tocIndex:7},{value:"danger",paraId:5,tocIndex:7},{value:" |",paraId:5,tocIndex:7},{value:"default",paraId:5,tocIndex:7},{value:" |",paraId:5,tocIndex:7},{value:"vip",paraId:5,tocIndex:7},{value:"default",paraId:5,tocIndex:7},{value:"htmlColor",paraId:5,tocIndex:7},{value:"Customize label colors",paraId:5,tocIndex:7},{value:"string",paraId:5,tocIndex:7},{value:"-",paraId:5,tocIndex:7},{value:"variant",paraId:5,tocIndex:7},{value:"Tag type",paraId:5,tocIndex:7},{value:"contained",paraId:5,tocIndex:7},{value:" \uFF5C",paraId:5,tocIndex:7},{value:"outlined",paraId:5,tocIndex:7},{value:"\uFF5C",paraId:5,tocIndex:7},{value:"light",paraId:5,tocIndex:7},{value:"contained",paraId:5,tocIndex:7},{value:"attribute",paraId:6,tocIndex:9},{value:"explain",paraId:6,tocIndex:9},{value:"Default value",paraId:6,tocIndex:9},{value:"global variable",paraId:6,tocIndex:9},{value:"--tag-bg-color",paraId:6,tocIndex:9},{value:"Tag background color",paraId:6,tocIndex:9},{value:"--bui-color-gay",paraId:6,tocIndex:9},{value:"--bui-tag-bg-color",paraId:6,tocIndex:9},{value:"--tag-border-color",paraId:6,tocIndex:9},{value:"Tag border color",paraId:6,tocIndex:9},{value:"--bui-color-border-gay",paraId:6,tocIndex:9},{value:"--bui-tag-border-color",paraId:6,tocIndex:9},{value:"--tag-color",paraId:6,tocIndex:9},{value:"Tag Text Color",paraId:6,tocIndex:9},{value:"--bui-color-gay",paraId:6,tocIndex:9},{value:"--bui-tag-color",paraId:6,tocIndex:9},{value:"--tag-height",paraId:6,tocIndex:9},{value:"Tag height",paraId:6,tocIndex:9},{value:"15px",paraId:6,tocIndex:9},{value:"--bui-tag-height",paraId:6,tocIndex:9},{value:"--tag-line-height",paraId:6,tocIndex:9},{value:"Tag row height",paraId:6,tocIndex:9},{value:"15px",paraId:6,tocIndex:9},{value:"--bui-tag-line-height",paraId:6,tocIndex:9},{value:"--tag-padding",paraId:6,tocIndex:9},{value:"Tag inner margin",paraId:6,tocIndex:9},{value:"0 var(--bui-spacing-xs)",paraId:6,tocIndex:9},{value:"--bui-tag-padding",paraId:6,tocIndex:9},{value:"--tag-bg-color-vip",paraId:6,tocIndex:9},{value:"Tag Member Theme Color",paraId:6,tocIndex:9},{value:"fade(#ff866e, 30%)",paraId:6,tocIndex:9},{value:"--bui-tag-color-vip",paraId:6,tocIndex:9},{value:"attribute",paraId:7,tocIndex:10},{value:"explain",paraId:7,tocIndex:10},{value:"Default value",paraId:7,tocIndex:10},{value:"global variable",paraId:7,tocIndex:10},{value:"--height",paraId:7,tocIndex:10},{value:"Height of dividing line",paraId:7,tocIndex:10},{value:"13%",paraId:7,tocIndex:10},{value:"--bui-tag-group-divider-height",paraId:7,tocIndex:10}]},76478:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"Text input box, used for inputting longer content.",paraId:0,tocIndex:0},{value:"The basic attribute transparency of the 'textarea' tag is supported. If the attribute to be transparently passed is not in the document, it will only be passed to the internal 'textarea' tag by placing it in the 'textarea Properties' field.",paraId:1,tocIndex:2},{value:"ShowCount 'controls the number of words displayed as input and can generally be used in conjunction with' maxLength '.",paraId:2,tocIndex:3},{value:"Determine whether it is a controlled component based on whether 'value' is passed in. Uncontrolled components can control the value of 'textarea' by obtaining elements through 'textareaRef'.",paraId:3,tocIndex:4},{value:"Control whether to auto focus through the 'autoFocus' field.",paraId:4,tocIndex:5},{value:"Control whether to automatically raise through the 'autoSize' field. When passing this field to 'boolean', there is no limit on the height size. When passing it to 'object', the height size can be controlled. If it exceeds the maximum value, it can be scrolled. This function does not support Alipay applet.",paraId:5,tocIndex:6},{value:"attribute",paraId:6,tocIndex:7},{value:"explain",paraId:6,tocIndex:7},{value:"type",paraId:6,tocIndex:7},{value:"Default value",paraId:6,tocIndex:7},{value:"value",paraId:6,tocIndex:7},{value:"Input box content, used when controlled",paraId:6,tocIndex:7},{value:"string",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"defaultValue",paraId:6,tocIndex:7},{value:"Default input box content, used when uncontrolled",paraId:6,tocIndex:7},{value:"string",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"textareaProps",paraId:6,tocIndex:7},{value:"inside ",paraId:6,tocIndex:7},{value:"<textarea>",paraId:6,tocIndex:7},{value:" Standard attributes of tags",paraId:6,tocIndex:7},{value:"TextareaHTMLAttributes<HTMLTextAreaElement>",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"textareaRef",paraId:6,tocIndex:7},{value:"inside ",paraId:6,tocIndex:7},{value:"<textarea>",paraId:6,tocIndex:7},{value:" Label's ref",paraId:6,tocIndex:7},{value:"React.Ref<HTMLTextAreaElement>",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"name",paraId:6,tocIndex:7},{value:"inside ",paraId:6,tocIndex:7},{value:"<textarea>",paraId:6,tocIndex:7},{value:" Name identification",paraId:6,tocIndex:7},{value:"string",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"placeholder",paraId:6,tocIndex:7},{value:"Occupation Content",paraId:6,tocIndex:7},{value:"string",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"disabled",paraId:6,tocIndex:7},{value:"Do you want to disable it",paraId:6,tocIndex:7},{value:"boolean",paraId:6,tocIndex:7},{value:"false",paraId:6,tocIndex:7},{value:"rows",paraId:6,tocIndex:7},{value:"Number of lines in the text box",paraId:6,tocIndex:7},{value:"number",paraId:6,tocIndex:7},{value:"2",paraId:6,tocIndex:7},{value:"maxLength",paraId:6,tocIndex:7},{value:"Maximum length of content",paraId:6,tocIndex:7},{value:"number",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"autoSize",paraId:6,tocIndex:7},{value:"Adaptive content height, can be set to true|false \u6216\u5BF9\u8C61\uFF1A{minHeight?: number;maxHeight?: number}",paraId:6,tocIndex:7},{value:"boolean",paraId:6,tocIndex:7},{value:"false",paraId:6,tocIndex:7},{value:"autoFocus",paraId:6,tocIndex:7},{value:"Does it automatically focus",paraId:6,tocIndex:7},{value:"boolean",paraId:6,tocIndex:7},{value:"false",paraId:6,tocIndex:7},{value:"showCount",paraId:6,tocIndex:7},{value:"Display word count",paraId:6,tocIndex:7},{value:"boolean",paraId:6,tocIndex:7},{value:"false",paraId:6,tocIndex:7},{value:"onChange",paraId:6,tocIndex:7},{value:"Callback when the content of the text box changes",paraId:6,tocIndex:7},{value:"(e: React.ChangeEvent<HTMLTextAreaElement>,data: {value: string}) => void",paraId:6,tocIndex:7},{value:"-",paraId:6,tocIndex:7},{value:"attribute",paraId:7,tocIndex:8},{value:"explain",paraId:7,tocIndex:8},{value:"Default value",paraId:7,tocIndex:8},{value:"global variable",paraId:7,tocIndex:8},{value:"--border-radius",paraId:7,tocIndex:8},{value:"fillet",paraId:7,tocIndex:8},{value:"--bui-shape-radius-label",paraId:7,tocIndex:8},{value:"--bui-textarea-border-radius",paraId:7,tocIndex:8},{value:"--width",paraId:7,tocIndex:8},{value:"width",paraId:7,tocIndex:8},{value:"100%",paraId:7,tocIndex:8},{value:"--bui-textarea-width",paraId:7,tocIndex:8},{value:"--bg-color",paraId:7,tocIndex:8},{value:"Text box background color",paraId:7,tocIndex:8},{value:"--bui-color-bg-default",paraId:7,tocIndex:8},{value:"--bui-textarea-background-color",paraId:7,tocIndex:8},{value:"--text-color",paraId:7,tocIndex:8},{value:"Text box font color",paraId:7,tocIndex:8},{value:"--bui-color-fg-subtle",paraId:7,tocIndex:8},{value:"--bui-textarea-text-color",paraId:7,tocIndex:8},{value:"--count-bg-color",paraId:7,tocIndex:8},{value:"Count column background color",paraId:7,tocIndex:8},{value:"--bui-color-bg-default",paraId:7,tocIndex:8},{value:"--bui-textarea-background-color",paraId:7,tocIndex:8},{value:"--count-text-color",paraId:7,tocIndex:8},{value:"Count column font color",paraId:7,tocIndex:8},{value:"--bui-color-fg-subtle",paraId:7,tocIndex:8},{value:"--bui-textarea-count-color",paraId:7,tocIndex:8},{value:"--text-font-size",paraId:7,tocIndex:8},{value:"Font size of text box",paraId:7,tocIndex:8},{value:"--bui-text-size-2",paraId:7,tocIndex:8},{value:"--bui-textarea-text-font-size",paraId:7,tocIndex:8},{value:"--count-font-size",paraId:7,tocIndex:8},{value:"Text box word count and font size",paraId:7,tocIndex:8},{value:"--bui-title-size-3",paraId:7,tocIndex:8},{value:"--bui-textarea-count-font-size",paraId:7,tocIndex:8},{value:"--content-padding",paraId:7,tocIndex:8},{value:"Text box margin",paraId:7,tocIndex:8},{value:"8px",paraId:7,tocIndex:8},{value:"--bui-textarea-padding",paraId:7,tocIndex:8},{value:"--count-padding",paraId:7,tocIndex:8},{value:"Count column margin",paraId:7,tocIndex:8},{value:"4px",paraId:7,tocIndex:8},{value:"--bui-textarea-count-padding",paraId:7,tocIndex:8},{value:"--placeholder-color",paraId:7,tocIndex:8},{value:"Placeholder font color",paraId:7,tocIndex:8},{value:"#ced1d6",paraId:7,tocIndex:8},{value:"--bui-textarea-placeholder-color",paraId:7,tocIndex:8},{value:"--placeholder-line-height",paraId:7,tocIndex:8},{value:"Placeholder line height (invalid mini program)",paraId:7,tocIndex:8},{value:"1.3",paraId:7,tocIndex:8},{value:"--bui-textarea-placeholder-line-height",paraId:7,tocIndex:8}]},34131:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:`Theme configuration can be used to specify component colors, sizes, languages, etc.
ThemeProvider relies on React's' context 'to pass themes and internationalization to components, so you need to ensure that ThemeProvider is the parent of the component you are trying to customize.`,paraId:0,tocIndex:0},{value:"**Developers should pay attention to the following two points when customizing Tokens. For detailed information on theme customization, please refer to [Customize Theme] (/guide/theme).",paraId:1,tocIndex:2},{value:"Do not confuse definitions: Different business scenarios should use corresponding APIs to customize Tokens. For example, responsive layout should use the responsive attribute, dark mode should use the defaultDarkToken or dmDarkToken attribute, and overlay built-in highlight mode Tokens should use defaultLightToken or dmLightToken.",paraId:2,tocIndex:2},{value:"Distinguish priorities: The priority of special scenarios is always higher than that of global general scenarios.",paraId:2,tocIndex:2},{value:"You can flexibly customize Design Tokens in the browser.",paraId:3,tocIndex:3},{value:"Global Design Tokens related to components can be configured by nested ThemeProvider components. BUI does not restrict the transmission of built-in Token properties in custom Tokens at the component level to override global built-in Tokens, but it is recommended not to do so unless necessary to avoid confusion in theme configuration.",paraId:4,tocIndex:4},{value:"Code cannot be dynamically injected into mini programs, and themes and responsive design tokens cannot be dynamically configured through the ThemeProvider component. Currently, the following two methods are supported to modify mini program themes:",paraId:5,tocIndex:5},{value:"Write the corresponding tokens under the selector in the style file, and the theme configuration of the global style file will be overwritten by the page level style file.",paraId:6,tocIndex:5},{value:"Local themes can only be passed in CSS variables inline when using components.",paraId:6,tocIndex:5},{value:`Here are the components in BUI that require internationalization support. You can switch languages in the demonstration.
Currently, the components that support internationalization include: Picker, Calendar, Input, TextArea, Select, CitySelector, and Dialog`,paraId:7,tocIndex:6},{value:"attribute",paraId:8,tocIndex:8},{value:"explain",paraId:8,tocIndex:8},{value:"type",paraId:8,tocIndex:8},{value:"Default value",paraId:8,tocIndex:8},{value:"isRoot",paraId:8,tocIndex:8},{value:"Is the current ThemeProvider mounted at the top level",paraId:8,tocIndex:8},{value:"boolean",paraId:8,tocIndex:8},{value:"false",paraId:8,tocIndex:8},{value:"container",paraId:8,tocIndex:8},{value:"Mounted container",paraId:8,tocIndex:8},{value:"ReactNode",paraId:8,tocIndex:8},{value:"-",paraId:8,tocIndex:8},{value:"containerId",paraId:8,tocIndex:8},{value:"Mount the container's ID",paraId:8,tocIndex:8},{value:"string",paraId:8,tocIndex:8},{value:"-",paraId:8,tocIndex:8},{value:"locale",paraId:8,tocIndex:8},{value:"language",paraId:8,tocIndex:8},{value:"BaseLang",paraId:8,tocIndex:8},{value:"zh-CN",paraId:8,tocIndex:8},{value:"responsive",paraId:8,tocIndex:8},{value:"Responsive screen breakpoint configuration",paraId:8,tocIndex:8},{value:"ResponsiveTokenOptions",paraId:8,tocIndex:8},{value:"-",paraId:8,tocIndex:8},{value:"defaultLightToken",paraId:8,tocIndex:8},{value:"Default highlight theme token",paraId:8,tocIndex:8},{value:"Record<string, string>",paraId:8,tocIndex:8},{value:"-",paraId:8,tocIndex:8},{value:"defaultDarkToken",paraId:8,tocIndex:8},{value:"Default Dark Theme Token",paraId:8,tocIndex:8},{value:"Record<string, string>",paraId:8,tocIndex:8},{value:"-",paraId:8,tocIndex:8},{value:"dmLightToken",paraId:8,tocIndex:8},{value:"Damai Dark Theme Token",paraId:8,tocIndex:8},{value:"Record<string, string>",paraId:8,tocIndex:8},{value:"-",paraId:8,tocIndex:8},{value:"token",paraId:8,tocIndex:8},{value:"Component Global Token",paraId:8,tocIndex:8},{value:"Record<string, string>",paraId:8,tocIndex:8},{value:"-",paraId:8,tocIndex:8},{value:"attribute",paraId:9,tocIndex:9},{value:"explain",paraId:9,tocIndex:9},{value:"type",paraId:9,tocIndex:9},{value:"Default value",paraId:9,tocIndex:9},{value:"xs",paraId:9,tocIndex:9},{value:"Ultra small screen",paraId:9,tocIndex:9},{value:"Record<string, string>",paraId:9,tocIndex:9},{value:"575.98px",paraId:9,tocIndex:9},{value:"sm",paraId:9,tocIndex:9},{value:"Small screen",paraId:9,tocIndex:9},{value:"Record<string, string>",paraId:9,tocIndex:9},{value:"576px",paraId:9,tocIndex:9},{value:"md",paraId:9,tocIndex:9},{value:"Medium screen",paraId:9,tocIndex:9},{value:"Record<string, string>",paraId:9,tocIndex:9},{value:"768px",paraId:9,tocIndex:9},{value:"lg",paraId:9,tocIndex:9},{value:"Large screen",paraId:9,tocIndex:9},{value:"Record<string, string>",paraId:9,tocIndex:9},{value:"992px",paraId:9,tocIndex:9},{value:"xl",paraId:9,tocIndex:9},{value:"Large screen",paraId:9,tocIndex:9},{value:"Record<string, string>",paraId:9,tocIndex:9},{value:"1200px",paraId:9,tocIndex:9}]},59744:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"Pop up a black semi transparent prompt on the page, used for operation result prompts and other scenarios, supports",paraId:0,tocIndex:0},{value:"Toast",paraId:0,tocIndex:0},{value:",",paraId:0,tocIndex:0},{value:"Toast.warning",paraId:0,tocIndex:0},{value:",",paraId:0,tocIndex:0},{value:"Toast.loading",paraId:0,tocIndex:0},{value:",",paraId:0,tocIndex:0},{value:"Toast.success",paraId:0,tocIndex:0},{value:",",paraId:0,tocIndex:0},{value:"Toast.fail",paraId:0,tocIndex:0},{value:`\u3002
It is recommended to use Hooks calling method. Static methods cannot obtain context, and ThemeProvider data will not take effect. Therefore, it is recommended to use Hooks calling method`,paraId:0,tocIndex:0},{value:"Toast.useToast",paraId:0,tocIndex:0},{value:"\u521Bbuild contextholder that supports reading context and replaces it with top-level registration",paraId:0,tocIndex:0},{value:"Toast",paraId:0,tocIndex:0},{value:"\u9759state method.",paraId:0,tocIndex:0},{value:"Display prompt content.",paraId:1,tocIndex:2},{value:"Toast provides four common modes: warning, loading, success, and fail.",paraId:2,tocIndex:5},{value:"The prompt text supports the use of '\\ n' line breaks.",paraId:3,tocIndex:6},{value:"Use 'duration' to control the duration of the prompt display, with a default display of 2 seconds. When 'duration' is 0, Toast will not automatically close. Of course, you can receive the return value and use its' close 'function to manually close the current Toast.",paraId:4,tocIndex:7},{value:"Toast provides three display positions: top, center, and bottom, with the default being center.",paraId:5,tocIndex:8},{value:"Using 'allowMultiple' allows for multiple Toast prompts to exist simultaneously on the page, with only one Toast displayed by default at a time.",paraId:6,tocIndex:9},{value:"Use 'icon' to customize icons.",paraId:7,tocIndex:10},{value:"Use 'disableClick' to control whether other content on the page can be clicked when displaying Toast prompts. It defaults to clickable.",paraId:8,tocIndex:11},{value:"You can listen for callbacks when Toast is closed through 'onClose'.",paraId:9,tocIndex:12},{value:"Toast provides a 'clear' method to close all existing pop ups on the page.",paraId:10,tocIndex:13},{value:"You can customize the Toast style based on the provided CSS variables and properties such as className.",paraId:11,tocIndex:14},{value:"attribute",paraId:12,tocIndex:16},{value:"explain",paraId:12,tocIndex:16},{value:"type",paraId:12,tocIndex:16},{value:"Default value",paraId:12,tocIndex:16},{value:"message",paraId:12,tocIndex:16},{value:"Toast content, supports the use of ",paraId:12,tocIndex:16},{value:"\\n",paraId:12,tocIndex:16},{value:" Line break",paraId:12,tocIndex:16},{value:"string",paraId:12,tocIndex:16},{value:"-",paraId:12,tocIndex:16},{value:"duration",paraId:12,tocIndex:16},{value:"Display duration (ms), when the value is 0, toast will not disappear",paraId:12,tocIndex:16},{value:"number",paraId:12,tocIndex:16},{value:"2000",paraId:12,tocIndex:16},{value:"position",paraId:12,tocIndex:16},{value:"Display location",paraId:12,tocIndex:16},{value:"top",paraId:12,tocIndex:16},{value:" |",paraId:12,tocIndex:16},{value:"center",paraId:12,tocIndex:16},{value:" |",paraId:12,tocIndex:16},{value:"bottom",paraId:12,tocIndex:16},{value:"center",paraId:12,tocIndex:16},{value:"allowMultiple",paraId:12,tocIndex:16},{value:"Is it allowed to have multiple Toasts at the same time",paraId:12,tocIndex:16},{value:"boolean",paraId:12,tocIndex:16},{value:"false",paraId:12,tocIndex:16},{value:"icon",paraId:12,tocIndex:16},{value:"Customize icons",paraId:12,tocIndex:16},{value:"React.ReactNode",paraId:12,tocIndex:16},{value:"-",paraId:12,tocIndex:16},{value:"disableClick",paraId:12,tocIndex:16},{value:"Can the page content be clicked when displaying Toast",paraId:12,tocIndex:16},{value:"boolean",paraId:12,tocIndex:16},{value:"false",paraId:12,tocIndex:16},{value:"onClose",paraId:12,tocIndex:16},{value:"The callback function when closing",paraId:12,tocIndex:16},{value:"() => void",paraId:12,tocIndex:16},{value:"-",paraId:12,tocIndex:16},{value:"Method Name",paraId:13,tocIndex:17},{value:"explain",paraId:13,tocIndex:17},{value:"parameter",paraId:13,tocIndex:17},{value:"Return value",paraId:13,tocIndex:17},{value:"Taost",paraId:13,tocIndex:17},{value:"Display Tips",paraId:13,tocIndex:17},{value:"ToastOptions |string",paraId:13,tocIndex:17},{value:"ToastReturnType",paraId:13,tocIndex:17},{value:"Taost.warning",paraId:13,tocIndex:17},{value:"Warning prompt",paraId:13,tocIndex:17},{value:"ToastOptions |string",paraId:13,tocIndex:17},{value:"ToastReturnType",paraId:13,tocIndex:17},{value:"Taost.loading",paraId:13,tocIndex:17},{value:"Loading prompt",paraId:13,tocIndex:17},{value:"ToastOptions |string",paraId:13,tocIndex:17},{value:"ToastReturnType",paraId:13,tocIndex:17},{value:"Taost.success",paraId:13,tocIndex:17},{value:"Successful prompt",paraId:13,tocIndex:17},{value:"ToastOptions |string",paraId:13,tocIndex:17},{value:"ToastReturnType",paraId:13,tocIndex:17},{value:"Taost.fail",paraId:13,tocIndex:17},{value:"Failure prompt",paraId:13,tocIndex:17},{value:"ToastOptions |string",paraId:13,tocIndex:17},{value:"ToastReturnType",paraId:13,tocIndex:17},{value:"Taost.clear",paraId:13,tocIndex:17},{value:"Clear prompt",paraId:13,tocIndex:17},{value:"-",paraId:13,tocIndex:17},{value:"-",paraId:13,tocIndex:17},{value:"Attribute Name",paraId:14,tocIndex:18},{value:"Description",paraId:14,tocIndex:18},{value:"Type",paraId:14,tocIndex:18},{value:"Return Value",paraId:14,tocIndex:18},{value:"Close",paraId:14,tocIndex:18},{value:"Close the current prompt",paraId:14,tocIndex:18},{value:"()=>void",paraId:14,tocIndex:18},{value:"-",paraId:14,tocIndex:18},{value:"attribute",paraId:15,tocIndex:19},{value:"explain",paraId:15,tocIndex:19},{value:"Default value",paraId:15,tocIndex:19},{value:"global variable",paraId:15,tocIndex:19},{value:"--min-width",paraId:15,tocIndex:19},{value:"Minimum width",paraId:15,tocIndex:19},{value:"86px",paraId:15,tocIndex:19},{value:"--bui-toast-min-width",paraId:15,tocIndex:19},{value:"--max-width",paraId:15,tocIndex:19},{value:"Maximum width",paraId:15,tocIndex:19},{value:"80%",paraId:15,tocIndex:19},{value:"--bui-toast-max-width",paraId:15,tocIndex:19},{value:"--text-align",paraId:15,tocIndex:19},{value:"text arrangement",paraId:15,tocIndex:19},{value:"center",paraId:15,tocIndex:19},{value:"--bui-toast-text-align",paraId:15,tocIndex:19},{value:"--flex-direction",paraId:15,tocIndex:19},{value:"Icon and copywriting arrangement direction",paraId:15,tocIndex:19},{value:"column",paraId:15,tocIndex:19},{value:"--bui-toast-flex-direction",paraId:15,tocIndex:19},{value:"--padding",paraId:15,tocIndex:19},{value:"padding",paraId:15,tocIndex:19},{value:"--bui-spacing-xl",paraId:15,tocIndex:19},{value:"--bui-toast-padding",paraId:15,tocIndex:19},{value:"--position-top",paraId:15,tocIndex:19},{value:"When displaying at the top, the distance from the top",paraId:15,tocIndex:19},{value:"15%",paraId:15,tocIndex:19},{value:"--bui-toast-position-top",paraId:15,tocIndex:19},{value:"--position-bottom",paraId:15,tocIndex:19},{value:"When displaying at the bottom, the distance from the top",paraId:15,tocIndex:19},{value:"85%",paraId:15,tocIndex:19},{value:"--bui-toast-position-bottom",paraId:15,tocIndex:19},{value:"--background-color",paraId:15,tocIndex:19},{value:"background color",paraId:15,tocIndex:19},{value:"rgba(0, 0, 0, 0.8)",paraId:15,tocIndex:19},{value:"--bui-toast-bg-color",paraId:15,tocIndex:19},{value:"--border-radius",paraId:15,tocIndex:19},{value:"fillet",paraId:15,tocIndex:19},{value:"--bui-shape-radius-default",paraId:15,tocIndex:19},{value:"--bui-toast-border-radius",paraId:15,tocIndex:19},{value:"--icon-margin",paraId:15,tocIndex:19},{value:"Icon margin",paraId:15,tocIndex:19},{value:"0 0 8px",paraId:15,tocIndex:19},{value:"--bui-toast-icon-margin",paraId:15,tocIndex:19},{value:"--icon-font-size",paraId:15,tocIndex:19},{value:"Icon font size",paraId:15,tocIndex:19},{value:"30px",paraId:15,tocIndex:19},{value:"--bui-toast-icon-font-size",paraId:15,tocIndex:19}]},44739:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"Simple text prompts for bubble boxes.",paraId:0,tocIndex:0},{value:"Clicking with the mouse will display a prompt, and clicking again will disappear. The bubble floating layer does not support complex text and operations.",paraId:1,tocIndex:2},{value:"External setting of bubble floating layer visibility through open",paraId:2,tocIndex:3},{value:"You can set defaultOpen to true to display bubble floating layers by default",paraId:3,tocIndex:4},{value:"placement\u8BBE\u7F6E\u6C14\u6CE1\u6D6E\u5C42\u7684\u4F4D\u7F6E\uFF0C\u53EF\u9009 top left right bottom topLeft topRight bottomLeft bottomRight leftTop leftBottom rightTop rightBottom",paraId:4,tocIndex:5},{value:'The triggering method for displaying bubbles is "click" or "hover", with the default being "click"',paraId:5,tocIndex:6},{value:"attribute",paraId:6,tocIndex:8},{value:"explain",paraId:6,tocIndex:8},{value:"type",paraId:6,tocIndex:8},{value:"Default value",paraId:6,tocIndex:8},{value:"title",paraId:6,tocIndex:8},{value:"Bubble floating layer content",paraId:6,tocIndex:8},{value:"string",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"defaultOpen",paraId:6,tocIndex:8},{value:"Whether to hide by default",paraId:6,tocIndex:8},{value:"boolean",paraId:6,tocIndex:8},{value:"false",paraId:6,tocIndex:8},{value:"open",paraId:6,tocIndex:8},{value:"Used for manually controlling the appearance and concealment of bubble floating layers",paraId:6,tocIndex:8},{value:"boolean",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"placement",paraId:6,tocIndex:8},{value:"Bubble box position",paraId:6,tocIndex:8},{value:"String, the enumeration value is ",paraId:6,tocIndex:8},{value:"center",paraId:6,tocIndex:8},{value:" ",paraId:6,tocIndex:8},{value:"left",paraId:6,tocIndex:8},{value:" ",paraId:6,tocIndex:8},{value:"leftTop",paraId:6,tocIndex:8},{value:" ",paraId:6,tocIndex:8},{value:"leftBottom",paraId:6,tocIndex:8},{value:" ",paraId:6,tocIndex:8},{value:"right",paraId:6,tocIndex:8},{value:" ",paraId:6,tocIndex:8},{value:"rightTop",paraId:6,tocIndex:8},{value:" ",paraId:6,tocIndex:8},{value:"rightBottom",paraId:6,tocIndex:8},{value:" ",paraId:6,tocIndex:8},{value:"top",paraId:6,tocIndex:8},{value:" ",paraId:6,tocIndex:8},{value:"topLeft",paraId:6,tocIndex:8},{value:" ",paraId:6,tocIndex:8},{value:"topRight",paraId:6,tocIndex:8},{value:" ",paraId:6,tocIndex:8},{value:"bottom",paraId:6,tocIndex:8},{value:" ",paraId:6,tocIndex:8},{value:"bottomLeft",paraId:6,tocIndex:8},{value:" ",paraId:6,tocIndex:8},{value:"bottomRight",paraId:6,tocIndex:8},{value:" ",paraId:6,tocIndex:8},{value:"bottom",paraId:6,tocIndex:8},{value:"'top'",paraId:6,tocIndex:8},{value:"trigger",paraId:6,tocIndex:8},{value:"Trigger behavior",paraId:6,tocIndex:8},{value:"string |String [], the enumeration value is' click '|'hover'",paraId:6,tocIndex:8},{value:"'click'",paraId:6,tocIndex:8},{value:"onOpenChange",paraId:6,tocIndex:8},{value:"The callback method for bubble floating layer manifestation and concealment",paraId:6,tocIndex:8},{value:"(e: React.MouseEvent<HTMLDivElement>,data: {open: boolean}) => void",paraId:6,tocIndex:8},{value:"-",paraId:6,tocIndex:8},{value:"attribute",paraId:7,tocIndex:9},{value:"explain",paraId:7,tocIndex:9},{value:"Default value",paraId:7,tocIndex:9},{value:"global variable",paraId:7,tocIndex:9},{value:"--arrow-size",paraId:7,tocIndex:9},{value:"ARROW size",paraId:7,tocIndex:9},{value:"8PX",paraId:7,tocIndex:9},{value:"--bui-tooltip-arrow-size",paraId:7,tocIndex:9},{value:"--localtion-position",paraId:7,tocIndex:9},{value:"Arrow Position",paraId:7,tocIndex:9},{value:"8PX",paraId:7,tocIndex:9},{value:"--bui-tooltip-localtion-position",paraId:7,tocIndex:9},{value:"--max-width",paraId:7,tocIndex:9},{value:"Maximum width",paraId:7,tocIndex:9},{value:"350px",paraId:7,tocIndex:9},{value:"--bui-tooltip-max-width",paraId:7,tocIndex:9},{value:"--content-min-width",paraId:7,tocIndex:9},{value:"Minimum width of content area",paraId:7,tocIndex:9},{value:"30px",paraId:7,tocIndex:9},{value:"--bui-tooltip-content-min-width",paraId:7,tocIndex:9},{value:"--content-min-height",paraId:7,tocIndex:9},{value:"Minimum height of content area",paraId:7,tocIndex:9},{value:"32px",paraId:7,tocIndex:9},{value:"--bui-tooltip-content-min-height",paraId:7,tocIndex:9},{value:"--content-padding",paraId:7,tocIndex:9},{value:"Inner margin of content area",paraId:7,tocIndex:9},{value:"6px 8px",paraId:7,tocIndex:9},{value:"--bui-tooltip-content-padding",paraId:7,tocIndex:9}]},66940:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"All the underlying components of dynamic effects.",paraId:0,tocIndex:0},{value:"Responsible for maintaining the mapping from the input (entering, exiting) of what state a component should be in to the output (entering, entering, exiting, exiting, uninstalling) of what state the component is currently in.",paraId:1,tocIndex:0},{value:"The specific rendering is completed by the user after passing the render function to accept the current state of the component.",paraId:2,tocIndex:0},{value:`The following code implements a simple Fade component.
As can be seen, passing a rendering function into Transition and maintaining a status based on it makes it easy to implement a custom switching animation.
The specific meanings corresponding to tenses are as follows:
Enter, exit: after the change and before the action is triggered
-Ing: Action in progress
-Ed: Action completed`,paraId:3,tocIndex:2},{value:`The Transition component will trigger the corresponding event every time the state changes and return the corresponding DOM node as much as possible in the parameters.
The triggering timing corresponding to the tense is as follows:
Enter, exit: after the change and before the action is triggered
-Ing: After the action starts (action in progress)
-Ed: After the action is completed`,paraId:4,tocIndex:3},{value:"attribute",paraId:5,tocIndex:4},{value:"explain",paraId:5,tocIndex:4},{value:"type",paraId:5,tocIndex:4},{value:"Default value",paraId:5,tocIndex:4},{value:"in",paraId:5,tocIndex:4},{value:"Do you want to enter",paraId:5,tocIndex:4},{value:"boolean",paraId:5,tocIndex:4},{value:"false",paraId:5,tocIndex:4},{value:"appear",paraId:5,tocIndex:4},{value:"Whether to play animation during mounting",paraId:5,tocIndex:4},{value:"boolean",paraId:5,tocIndex:4},{value:"false",paraId:5,tocIndex:4},{value:"timeout",paraId:5,tocIndex:4},{value:"Animation time configuration",paraId:5,tocIndex:4},{value:"number |{appear, enter, exit}",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"delay",paraId:5,tocIndex:4},{value:"Animation Delay Configuration",paraId:5,tocIndex:4},{value:"number |{appear, enter, exit}",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"enter",paraId:5,tocIndex:4},{value:"Do you want to play the animation",paraId:5,tocIndex:4},{value:"boolean",paraId:5,tocIndex:4},{value:"true",paraId:5,tocIndex:4},{value:"exit",paraId:5,tocIndex:4},{value:"Do you want to play the exit animation",paraId:5,tocIndex:4},{value:"boolean",paraId:5,tocIndex:4},{value:"true",paraId:5,tocIndex:4},{value:"mountOnEnter",paraId:5,tocIndex:4},{value:"Mount children on first entry",paraId:5,tocIndex:4},{value:"boolean",paraId:5,tocIndex:4},{value:"false",paraId:5,tocIndex:4},{value:"unmountOnExit",paraId:5,tocIndex:4},{value:"Uninstall children upon exit",paraId:5,tocIndex:4},{value:"boolean",paraId:5,tocIndex:4},{value:"false",paraId:5,tocIndex:4},{value:"onEnter",paraId:5,tocIndex:4},{value:"The callback before entering the beginning",paraId:5,tocIndex:4},{value:"node=>void",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"onEntering",paraId:5,tocIndex:4},{value:"The callback after entering the beginning",paraId:5,tocIndex:4},{value:"node=>void",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"onEntered",paraId:5,tocIndex:4},{value:"Enter the completed callback",paraId:5,tocIndex:4},{value:"node=>void",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"onExit",paraId:5,tocIndex:4},{value:"Callback before exit starts",paraId:5,tocIndex:4},{value:"node=>void",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"onExiting",paraId:5,tocIndex:4},{value:"Callback after exit starts",paraId:5,tocIndex:4},{value:"node=>void",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4},{value:"onExited",paraId:5,tocIndex:4},{value:"Exit completed callback",paraId:5,tocIndex:4},{value:"node=>void",paraId:5,tocIndex:4},{value:"-",paraId:5,tocIndex:4}]},9635:function(R,S,e){e.r(S),e.d(S,{texts:function(){return v}});const v=[{value:"Need to install the @ bifrostui/icons icon package.",paraId:0,tocIndex:0},{value:`$ npm install --save @bifrostui/icons
# or
$ yarn add @bifrostui/icons
# or
$ pnpm add @bifrostui/icons
`,paraId:1,tocIndex:0},{value:"After installing the package, directly reference the required icon",paraId:2,tocIndex:1},{value:`import { SettingsOutlinedIcon } from '@bifrostui/icons';
`,paraId:3,tocIndex:1},{value:"Set the icon size through the 'size' attribute.",paraId:4,tocIndex:3},{value:"Set the icon color through the 'color' attribute.",paraId:5,tocIndex:4},{value:"If the predefined icon size and color cannot meet the needs, you can customize the color through the 'htmlColor' property or the 'style' property.",paraId:6,tocIndex:5},{value:"attribute",paraId:7,tocIndex:7},{value:"explain",paraId:7,tocIndex:7},{value:"type",paraId:7,tocIndex:7},{value:"Default value",paraId:7,tocIndex:7},{value:"color",paraId:7,tocIndex:7},{value:"Icon Theme Colors",paraId:7,tocIndex:7},{value:"default",paraId:7,tocIndex:7},{value:" |",paraId:7,tocIndex:7},{value:"primary",paraId:7,tocIndex:7},{value:" |",paraId:7,tocIndex:7},{value:"info",paraId:7,tocIndex:7},{value:" |",paraId:7,tocIndex:7},{value:"success",paraId:7,tocIndex:7},{value:" |",paraId:7,tocIndex:7},{value:"warning",paraId:7,tocIndex:7},{value:" |",paraId:7,tocIndex:7},{value:"danger",paraId:7,tocIndex:7},{value:" |",paraId:7,tocIndex:7},{value:"disabled",paraId:7,tocIndex:7},{value:"-",paraId:7,tocIndex:7},{value:"htmlColor",paraId:7,tocIndex:7},{value:"Customize icon colors",paraId:7,tocIndex:7},{value:"string",paraId:7,tocIndex:7},{value:"-",paraId:7,tocIndex:7},{value:"size",paraId:7,tocIndex:7},{value:"The preset icon size can also be set to a custom icon size through the font size of the element",paraId:7,tocIndex:7},{value:"small",paraId:7,tocIndex:7},{value:" |",paraId:7,tocIndex:7},{value:"medium",paraId:7,tocIndex:7},{value:" |",paraId:7,tocIndex:7},{value:"large",paraId:7,tocIndex:7},{value:"Inherit the font size of the parent element",paraId:7,tocIndex:7},{value:"viewBox",paraId:7,tocIndex:7},{value:"The viewBox property of SVG",paraId:7,tocIndex:7},{value:"string",paraId:7,tocIndex:7},{value:"'0 0 96 96'",paraId:7,tocIndex:7}]}}]);
