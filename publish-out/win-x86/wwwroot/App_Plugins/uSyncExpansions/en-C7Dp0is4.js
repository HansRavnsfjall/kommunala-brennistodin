const e = {
  uSync: {
    IUser: "Users",
    IUserGroup: "User groups",
    IMember: "Members",
    IMemberGroup: "Member groups"
  },
  uSyncRestore: {
    title: "Restore points",
    intro: `<p>
			Restore points can be created manually, or as part of a process such as a push or pull from
			another site
		</p>
		<p>
			By default only the last 10 restore points are kept, you can restore from any restore point, but you migth 
			well loose your current content, setting or files as part of the process.
		</p>`,
    scan: "Scan restore folder",
    restoreLatest: "Restore from latest",
    create: "Create a restore point",
    createIntro: "Type a description to help you identify the restore point.<br/>The current date and time are added automatically",
    createSummary: "Your restore point has been created.",
    restorePoints: "Restore points",
    restoreTitle: "Restore Umbraco settings and content",
    restoreIntro: `
			<p>A restore can help fix problems the might be causing your site to not work show the right content</p>
			<p>A restore will reset all the settings, content and (if included media), back to the way it was at the specified point in time.</p>
			<p style="color: var(--uui-color-danger)">You will loose any changes that you have made this this restore point, so you should be sure you want to restore.</p>
			`,
    restoreCheck: "Check restore",
    restoreInfo: "Restore to this point?"
  }
};
export {
  e as default
};
//# sourceMappingURL=en-C7Dp0is4.js.map
