/** @jsx h */

import h from '../../../helpers/h'

export default function(editor) {
  editor.unwrapNodeByKey('a')
}

export const input = (
  <value>
    <document>
      <quote>
        <paragraph key="a">word</paragraph>
      </quote>
    </document>
  </value>
)

export const output = (
  <value>
    <document>
      <paragraph>word</paragraph>
    </document>
  </value>
)
