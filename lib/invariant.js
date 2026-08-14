/** Package-owned invariant companion. @module dsh-plugin-organizer/invariant */
const PACKAGE_NAME = "dsh-plugin-organizer";
/** Cordis companion plugin name. */
const name = "plugin-organizer-invariant";
/** Service required before the companion can reserve package ownership. */
const inject = ["invariants"];
/** No runtime invariant: this package owns a read-only Settings contribution. */
const install = () => {};
/** Register this package's invariant companion. */
const apply = (ctx) => Promise.resolve(ctx.invariants.register(PACKAGE_NAME, install));
export { apply, inject, name };
