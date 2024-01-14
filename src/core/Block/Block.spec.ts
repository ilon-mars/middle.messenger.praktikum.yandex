import { expect } from "chai";
import sinon from "sinon";
import { Block } from "./index.ts";

describe("Block", () => {
  const testProps = 'testProps';
  let block: Block;

  it('should have correct props', () => {
    block = new Block({ testProps });
    expect(block.props.testProps).to.eq(testProps)
  });

  it('should "setProps" correctly', () => {
    block.setProps({ testProps })
    expect(block.props.testProps).to.eq(testProps)
  });

  it('should use "render" method', () => {
    block = new Block({});

    const spy = sinon.spy(block, 'render')
    block.render()

    expect(spy.callCount).to.equal(1)
  });
});
