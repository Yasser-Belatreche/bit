import React from 'react';
import classNames from 'classnames';
import { Icon } from '@teambit/evangelist.elements.icon';
import { HighlightedText } from '@teambit/documenter.ui.highlighted-text';
import { TabContent, TabContentProps } from '@teambit/ui-foundation.ui.use-box.tab-content';
import { linkStyles } from '@teambit/ui-foundation.ui.use-box.bottom-link';
import { TooltipCopybox } from './tooltip-copybox';
import styles from './menu.module.scss';

export type InstallProps = {
  componentName: string;
  copyString: string;
  back: () => void;
  registryName: string;
  packageManager: string;
} & TabContentProps;

export function Install({ componentName, copyString, back, registryName, packageManager, ...rest }: InstallProps) {
  return (
    <TabContent
      {...rest}
      bottom={
        <div className={classNames(linkStyles, styles.installLink)} onClick={back}>
          <div>
            <Icon of="settings" />
            <span>
              Configure <HighlightedText>{registryName}</HighlightedText> as a Scoped Registry
            </span>
          </div>
          <Icon of="arrow_right" />
        </div>
      }
    >
      <div>{`Install ${componentName} with ${packageManager}`}</div>
      <TooltipCopybox content={copyString} />
    </TabContent>
  );
}
