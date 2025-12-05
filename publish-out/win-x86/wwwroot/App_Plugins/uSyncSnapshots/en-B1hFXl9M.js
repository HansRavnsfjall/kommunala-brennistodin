const e = {
  uSyncSnapshots: {
    name: "Snapshots",
    description: "Point in time snapshots of your Umbraco site",
    create: "Create Snapshot",
    createName: "Snapshot Name",
    createNameDescription: "Give your snapshot a name",
    createFiles: "Include files",
    createFilesDescription: "Include templates, views and script files",
    createMedia: "Include Media",
    createMediaDescription: "Include media files",
    report: "Snapshot Report",
    noChanges: "No changes",
    noChangesDescription: `<p>
				There are no changes since the last snapshot, so this snapshot was empty ans will
				not have created anything on disk.
			</p>`,
    singleWarning: "Running an action against a single snapshot might result in changes that do not reflect the whole snapshot process.",
    allWarning: "Running against all snapshots will merge all the snapshots together to gvie you a single view of the snapshots you have locally on this site",
    uploadWarning: `<p>Uploading individual snapshots from other sites can cause unexpected results</p>
			<p>only upload single snapshots if you are sure of what you are doing</p>`
  }
};
export {
  e as default
};
//# sourceMappingURL=en-B1hFXl9M.js.map
